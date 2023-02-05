import lootTables from '../assets/gamedata/lootTables.json';
import gameItems from '../assets/gamedata/items.json';
import gameRecipes from '../assets/gamedata/recipes.json';
import gameBuildings from '../assets/gamedata/buildings.json';
import gameUpgrades from '../assets/gamedata/buildingUpgrades.json';
export var RARITY;
(function (RARITY) {
    RARITY["COMMON"] = "COMMON";
    RARITY["UNCOMMON"] = "UNCOMMON";
    RARITY["RARE"] = "RARE";
    RARITY["EPIC"] = "EPIC";
    RARITY["LEGENDARY"] = "LEGENDARY";
    RARITY["MYTHIC"] = "MYTHIC";
})(RARITY || (RARITY = {}));
export const GDRECIPES = Object.values(gameRecipes);
export const GDLOOTTABLES = Object.values(lootTables);
export const GDITEMS = Object.values(gameItems);
export const GDBUILDINGS = Object.values(gameBuildings);
export const GDUPGRADES = Object.values(gameUpgrades);
