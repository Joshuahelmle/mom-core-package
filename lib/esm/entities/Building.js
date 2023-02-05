import { GDBUILDINGS, GDUPGRADES, RARITY } from "./GameDataValues";
import { ITEMS } from "./Item";
import { RECIPES } from "./Recipe";
export class Building {
    internalId;
    displayName;
    image;
    inventory;
    itemId;
    level;
    rarity;
    buildingRecipes;
    size;
    slotSize;
    upgrades;
    keywords;
    recipeRefs;
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
        return BUILDINGS.find(b => b.internalId === `${this.itemId}_${this.rarity[0]}${this.level + 1}`);
    }
    static fromGameData({ id, name, image, itemId, level, size, rarity, inventory, recipeRefs, keywords }) {
        const inv = inventory.map(i => ({ item: ITEMS.find(itm => itm.internalId === i.id), value: i.value }));
        const thisRarity = RARITY[rarity];
        const dupl = UPGRADES.filter(u => u.rarity === rarity && u.level >= level && u.itemId === itemId);
        const upgrades = dupl.filter((u, idx) => idx === dupl.findIndex(o => u.level === o.level));
        let recLocation = itemId === 'cantina' ? 1 : 0;
        const recs = recipeRefs.length > 0 ? recipeRefs.map(rr => RECIPES.filter(r => r.category === rr.id)).flat() : [];
        const slots = recipeRefs.length > 0 ? recipeRefs.filter(rr => RECIPES.filter(r => r.category === rr.id).some(r => r.duration > 0)).map(rr => rr.concurrent) : [];
        return new Building(id, name, image, inv, itemId, level, thisRarity, recs, size, slots, upgrades, keywords, recipeRefs);
    }
}
export const UPGRADES = Object.values(GDUPGRADES);
export const BUILDINGS = Object.values(GDBUILDINGS).map(Building.fromGameData);
