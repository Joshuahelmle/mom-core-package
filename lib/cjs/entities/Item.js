"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEMS = exports.Item = void 0;
const GameDataValues_1 = require("./GameDataValues");
const LootTable_1 = require("./LootTable");
class Item {
    constructor(internalId, displayName, image, keywords, lootTable) {
        this.internalId = internalId;
        this.displayName = displayName;
        this.image = image;
        this.keywords = keywords;
        this.lootTable = lootTable;
    }
    static fromGameData({ id, name, image, keywords, lootTableId }) {
        const lootTable = LootTable_1.LOOTTABLES.find(lt => lt.internalId === lootTableId);
        return new Item(id, name, image, keywords, lootTable);
    }
    isInternal() {
        return this.keywords.length > 0 && this.keywords.includes('internal');
    }
    isStatic() {
        return this.keywords.length > 0 && this.keywords.includes('static');
    }
    isResource() {
        return this.keywords.length > 0 && this.keywords.includes('resource');
    }
    isDTM() {
        return this.keywords.length > 0 && this.keywords.includes('dtm');
    }
    isArt() {
        return this.keywords.length > 0 && this.keywords.includes('art');
    }
    isArtifact() {
        return this.keywords.length > 0 && this.keywords.includes('artifact');
    }
    isMarket() {
        return this.keywords.length > 0 && this.keywords.includes('market');
    }
    getLoot() {
        var _a, _b;
        return (_b = (_a = this.lootTable) === null || _a === void 0 ? void 0 : _a.getLoot()) !== null && _b !== void 0 ? _b : undefined;
    }
    getLootAverage() {
        var _a, _b;
        return (_b = (_a = this.lootTable) === null || _a === void 0 ? void 0 : _a.getLootAverage()) !== null && _b !== void 0 ? _b : undefined;
    }
    getLootPercentages() {
        var _a, _b;
        return (_b = (_a = this.lootTable) === null || _a === void 0 ? void 0 : _a.getLootPercentages()) !== null && _b !== void 0 ? _b : undefined;
    }
}
exports.Item = Item;
exports.ITEMS = GameDataValues_1.GDITEMS.map(gdItem => Item.fromGameData(gdItem));
