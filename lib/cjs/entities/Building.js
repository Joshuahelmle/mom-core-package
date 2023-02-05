"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUILDINGS = exports.UPGRADES = exports.Building = void 0;
const GameDataValues_1 = require("./GameDataValues");
const Item_1 = require("./Item");
const Recipe_1 = require("./Recipe");
class Building {
    constructor(internalId, displayName, image, inventory, itemId, level, rarity, buildingRecipes, size, slotSize, upgrades, keywords, recipeRefs) {
        this.internalId = internalId;
        this.displayName = displayName;
        this.image = image;
        this.inventory = inventory;
        this.itemId = itemId;
        this.level = level;
        this.rarity = rarity;
        this.buildingRecipes = buildingRecipes;
        this.size = size;
        this.slotSize = slotSize;
        this.upgrades = upgrades;
        this.keywords = keywords;
        this.recipeRefs = recipeRefs;
    }
    getNextLevel() {
        return exports.BUILDINGS.find(b => b.internalId === `${this.itemId}_${this.rarity[0]}${this.level + 1}`);
    }
    static fromGameData({ id, name, image, itemId, level, size, rarity, inventory, recipeRefs, keywords }) {
        const inv = inventory.map(i => ({ item: Item_1.ITEMS.find(itm => itm.internalId === i.id), value: i.value }));
        const thisRarity = GameDataValues_1.RARITY[rarity];
        const dupl = exports.UPGRADES.filter(u => u.rarity === rarity && u.level >= level && u.itemId === itemId);
        const upgrades = dupl.filter((u, idx) => idx === dupl.findIndex(o => u.level === o.level));
        let recLocation = itemId === 'cantina' ? 1 : 0;
        const recs = recipeRefs.length > 0 ? recipeRefs.map(rr => Recipe_1.RECIPES.filter(r => r.category === rr.id)).flat() : [];
        const slots = recipeRefs.length > 0 ? recipeRefs.filter(rr => Recipe_1.RECIPES.filter(r => r.category === rr.id).some(r => r.duration > 0)).map(rr => rr.concurrent) : [];
        return new Building(id, name, image, inv, itemId, level, thisRarity, recs, size, slots, upgrades, keywords, recipeRefs);
    }
}
exports.Building = Building;
exports.UPGRADES = Object.values(GameDataValues_1.GDUPGRADES);
exports.BUILDINGS = Object.values(GameDataValues_1.GDBUILDINGS).map(Building.fromGameData);
