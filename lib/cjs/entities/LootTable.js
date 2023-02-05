"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gdlootResolver = exports.lootResolver = exports.LOOTTABLES = exports.fetchedPoolData = exports.LootTable = void 0;
const loot_table_advanced_1 = require("loot-table-advanced");
const GameDataValues_1 = require("./GameDataValues");
const poolcache_json_1 = __importDefault(require("../assets/poolcache.json"));
const MAX_NESTED = 100;
const loot_defaults = {
    id: null,
    weight: 1,
    min: 1,
    max: 1,
    step: 1,
    group: 1,
    transform: null,
};
const rxLootTableEntryID = new RegExp('^@?([a-z0-9_-]+)(\\(([0-9]+)\\))?$', 'i');
class LootTable {
    constructor(internalId, data) {
        this.internalId = internalId;
        this.data = data;
    }
    static fromGameData({ id, data }) {
        const dynamicData = data.map(e => {
            if (e.dynamicPoolId) {
                let transform = (x) => { var _a, _b; return x * ((_b = (_a = exports.fetchedPoolData.find(pool => pool.id === e.dynamicPoolId)) === null || _a === void 0 ? void 0 : _a.currentLootMultiplier) !== null && _b !== void 0 ? _b : 1); };
                return Object.assign(Object.assign({}, e), { transform });
            }
            else
                return e;
        });
        return new LootTable(id, dynamicData);
    }
    CloneEntry(entry) {
        return JSON.parse(JSON.stringify(entry));
    }
    CloneLootTable(table) {
        const result = JSON.parse(JSON.stringify(table));
        return result;
    }
    FillInLootEntryDefaults(entry) {
        if (entry.id === undefined)
            entry.id = null;
        if (entry.weight === undefined)
            entry.weight = loot_defaults.weight;
        if (entry.min === undefined)
            entry.min = loot_defaults.min;
        if (entry.max === undefined)
            entry.max = Math.max(loot_defaults.max, loot_defaults.min);
        if (entry.step === undefined)
            entry.step = loot_defaults.step;
        if (entry.group === undefined)
            entry.group = loot_defaults.group;
        return entry;
    }
    ParseLootID(id) {
        var count = 0;
        var name = null;
        const matches = id.match(rxLootTableEntryID);
        if (matches) {
            name = matches[1];
            count = matches[3] === undefined ? 1 : parseInt(matches[3]);
        }
        return { id: name, count };
    }
    MergeLoot(a, b) {
        b.forEach((e) => (0, loot_table_advanced_1.AddLoot)(a, e));
        return a;
    }
    getLoot() {
        return (0, loot_table_advanced_1.GetLoot)(this.data, 1, exports.lootResolver);
    }
    GetLootAverage(table, count = 1, resolver, depth = 0) {
        if (!Array.isArray(table))
            throw new Error('Not a loot table');
        if (depth > MAX_NESTED)
            throw new Error(`Too many nested loot tables`);
        if (count != 1) {
            table = this.CloneLootTable(table);
        }
        const result = new Array();
        const groups = new Set();
        table.map((e) => groups.add(e.group));
        for (let pull = 0; pull < count; ++pull) {
            for (const groupID of groups) {
                const entries = table
                    .filter((e) => e.group === groupID)
                    .map(this.FillInLootEntryDefaults);
                const totalWeight = entries
                    .map((e) => e.weight)
                    .reduce((a, b) => a + b, 0);
                if (totalWeight == 0) {
                    continue;
                }
                for (const e of entries) {
                    const avg = e.transform ? e.transform(e.weight / totalWeight) : e.weight / totalWeight;
                    const quantity = (e.min + e.max) / 2 * avg;
                    const id = e.id;
                    if (id === null || id === void 0 ? void 0 : id.startsWith('@')) {
                        const otherInfo = this.ParseLootID(id.substring(1));
                        if (!otherInfo.id)
                            throw new Error(`Unable to parse ${id}`);
                        if (!resolver)
                            throw new Error(`No resolver for ${id}`);
                        const otherTable = resolver(otherInfo.id);
                        if (!otherTable)
                            throw new Error(`${id} could not be resolved`);
                        const loot = this.GetLootAverage(otherTable, otherInfo.count, resolver, ++depth);
                        loot.forEach(item => item.quantity *= quantity);
                        this.MergeLoot(result, loot);
                    }
                    else {
                        if (e.id !== null) {
                            (0, loot_table_advanced_1.AddLoot)(result, { id: e.id, quantity });
                        }
                    }
                }
            }
        }
        return result;
    }
    GetLootPercentages(table, count = 1, resolver, depth = 0) {
        if (!Array.isArray(table))
            throw new Error('Not a loot table');
        if (depth > MAX_NESTED)
            throw new Error(`Too many nested loot tables`);
        if (count != 1) {
            table = this.CloneLootTable(table);
        }
        const result = new Array();
        const groups = new Set();
        table.map((e) => groups.add(e.group));
        for (let pull = 0; pull < count; ++pull) {
            for (const groupID of groups) {
                const entries = table
                    .filter((e) => e.group === groupID)
                    .map(this.FillInLootEntryDefaults);
                const totalWeight = entries
                    .map((e) => e.weight)
                    .reduce((a, b) => a + b, 0);
                if (totalWeight == 0) {
                    continue;
                }
                for (const e of entries) {
                    const quantity = e.transform ? e.transform(e.weight / totalWeight) : e.weight / totalWeight;
                    const id = e.id;
                    if (id === null || id === void 0 ? void 0 : id.startsWith('@')) {
                        const otherInfo = this.ParseLootID(id.substring(1));
                        if (!otherInfo.id)
                            throw new Error(`Unable to parse ${id}`);
                        if (!resolver)
                            throw new Error(`No resolver for ${id}`);
                        const otherTable = resolver(otherInfo.id);
                        if (!otherTable)
                            throw new Error(`${id} could not be resolved`);
                        const loot = this.GetLootPercentages(otherTable, otherInfo.count, resolver, ++depth);
                        loot.forEach(item => item.quantity *= quantity);
                        this.MergeLoot(result, loot);
                    }
                    else {
                        if (e.id !== null) {
                            (0, loot_table_advanced_1.AddLoot)(result, { id: e.id, quantity });
                        }
                    }
                }
            }
        }
        return result;
    }
    getLootAverage() {
        return this.GetLootAverage(this.data, 1, exports.lootResolver);
    }
    getLootPercentages() {
        return this.GetLootPercentages(this.data, 1, exports.lootResolver);
    }
    hasNestedTables() {
        return this.data.some(e => { var _a; return (_a = e.id) === null || _a === void 0 ? void 0 : _a.startsWith('@'); });
    }
    hasDynamicPools() {
        if (!this.hasNestedTables()) {
            return this.data.some(e => !!e.dynamicPoolId);
        }
        else {
            return this.data.filter(e => { var _a; return (_a = e.id) === null || _a === void 0 ? void 0 : _a.startsWith('@'); })
                .map(e => { var _a; return (_a = e.id) === null || _a === void 0 ? void 0 : _a.slice(1); })
                .map(name => exports.LOOTTABLES.find(lt => lt.internalId === name))
                .map(lt => lt === null || lt === void 0 ? void 0 : lt.hasDynamicPools()).some(e => e === true);
        }
    }
}
exports.LootTable = LootTable;
exports.fetchedPoolData = Object.values(poolcache_json_1.default.data);
exports.LOOTTABLES = GameDataValues_1.GDLOOTTABLES.map(LootTable.fromGameData);
const lootResolver = (id) => { var _a; return (_a = exports.LOOTTABLES.find(lt => lt.internalId === id)) === null || _a === void 0 ? void 0 : _a.data; };
exports.lootResolver = lootResolver;
const gdlootResolver = (id) => { var _a, _b; return (_b = (_a = GameDataValues_1.GDLOOTTABLES.find(lt => lt.id === id)) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : []; };
exports.gdlootResolver = gdlootResolver;
