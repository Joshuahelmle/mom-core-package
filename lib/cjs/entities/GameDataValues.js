"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GDUPGRADES = exports.GDBUILDINGS = exports.GDITEMS = exports.GDLOOTTABLES = exports.GDRECIPES = exports.RARITY = void 0;
const lootTables_json_1 = __importDefault(require("../assets/gamedata/lootTables.json"));
const items_json_1 = __importDefault(require("../assets/gamedata/items.json"));
const recipes_json_1 = __importDefault(require("../assets/gamedata/recipes.json"));
const buildings_json_1 = __importDefault(require("../assets/gamedata/buildings.json"));
const buildingUpgrades_json_1 = __importDefault(require("../assets/gamedata/buildingUpgrades.json"));
var RARITY;
(function (RARITY) {
    RARITY["COMMON"] = "COMMON";
    RARITY["UNCOMMON"] = "UNCOMMON";
    RARITY["RARE"] = "RARE";
    RARITY["EPIC"] = "EPIC";
    RARITY["LEGENDARY"] = "LEGENDARY";
    RARITY["MYTHIC"] = "MYTHIC";
})(RARITY = exports.RARITY || (exports.RARITY = {}));
exports.GDRECIPES = Object.values(recipes_json_1.default);
exports.GDLOOTTABLES = Object.values(lootTables_json_1.default);
exports.GDITEMS = Object.values(items_json_1.default);
exports.GDBUILDINGS = Object.values(buildings_json_1.default);
exports.GDUPGRADES = Object.values(buildingUpgrades_json_1.default);
