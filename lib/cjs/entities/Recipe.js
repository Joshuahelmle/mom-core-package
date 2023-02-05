"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRecipesWithInput = exports.findRecipesWithOutput = exports.RECIPES = exports.Recipe = void 0;
const GameDataValues_1 = require("./GameDataValues");
const Item_1 = require("./Item");
const LootTable_1 = require("./LootTable");
const go_time_1 = require("@nimaimalle/go-time");
class Recipe {
    constructor(internalId, displayName, image, inputs, 
    //public outputs: RecipeOutput[],
    lootTable, duration, description, cooldown, category, activeWhen, outputRef, outputConditional, recipients, keywords) {
        this.internalId = internalId;
        this.displayName = displayName;
        this.image = image;
        this.inputs = inputs;
        this.lootTable = lootTable;
        this.duration = duration;
        this.description = description;
        this.cooldown = cooldown;
        this.category = category;
        this.activeWhen = activeWhen;
        this.outputRef = outputRef;
        this.outputConditional = outputConditional;
        this.recipients = recipients;
        this.keywords = keywords;
    }
    getLoot() {
        var _a;
        return (_a = this.lootTable) === null || _a === void 0 ? void 0 : _a.getLoot();
    }
    getLootAverage() {
        var _a;
        return (_a = this.lootTable) === null || _a === void 0 ? void 0 : _a.getLootAverage();
    }
    getLootPercentages() {
        var _a;
        return (_a = this.lootTable) === null || _a === void 0 ? void 0 : _a.getLootPercentages();
    }
    isActiveRecipe() {
        return !this.activeWhen || !!(new go_time_1.GoTime(this.activeWhen).next());
    }
    static fromJson({ description, durationSeconds, id, inputs, name, image, outputRef, cooldownSeconds, category, activeWhen, outputRefConditional, recipients, keywords }) {
        const recipeInputs = inputs.map(input => {
            const item = Item_1.ITEMS.find(i => i.internalId === input.itemMatch[0]);
            return {
                item: item !== null && item !== void 0 ? item : Item_1.ITEMS.find(i => i.keywords.includes(input.itemMatch[0])),
                amount: input.quantity,
                operation: input.operation
            };
        });
        let outputs = LootTable_1.LOOTTABLES.find(loot => loot.internalId === outputRef.lootTableId);
        /*if (outputRefConditional.length > 0) {
            
            for (const oRef of outputRefConditional) {
                outputs = outputs.concat(LOOTTABLE.find(loot => loot.id === oRef.output.lootTableId)?.data ?? [])
            }
        }*/
        return new Recipe(id, name, image, recipeInputs, outputs, durationSeconds, description, cooldownSeconds, category, activeWhen, outputRef.lootTableId, outputRefConditional, recipients, keywords);
    }
    static getScavRecipes() {
        let scav = (Object.values(GameDataValues_1.GDRECIPES)).find(r => r.id === 'adv_scavenge');
        const recipeInputs = scav.inputs.map(input => {
            /*return {
                item: ITEMS.find(i => i.internalId === input.itemMatch[0]) as Item,
                amount: input.quantity,
                operation: input.operation
            }*/
            const item = Item_1.ITEMS.find(i => i.internalId === input.itemMatch[0]);
            if (item) {
                return {
                    item,
                    amount: input.quantity,
                    operation: input.operation
                };
            }
            else {
                return {
                    item: Item_1.ITEMS.find(i => i.internalId === 'dusk'),
                    amount: 0,
                    operation: input.operation
                };
            }
        });
        const recipes = [];
        for (const lootTable of scav.outputRefConditional) {
            const outputs = LootTable_1.LOOTTABLES.find(loot => loot.internalId === lootTable.output.lootTableId);
            const name = outputs.internalId.split('_');
            const rec = new Recipe(`${outputs.internalId}`, `${scav.name} Tier${name.pop()}`, scav.image, recipeInputs, outputs, scav.durationSeconds, scav.description, scav.cooldownSeconds, scav.category, scav.activeWhen, scav.outputRef.lootTableId, scav.outputRefConditional, scav.recipients, scav.keywords);
            recipes.push(rec);
        }
        return recipes;
    }
}
exports.Recipe = Recipe;
exports.RECIPES = GameDataValues_1.GDRECIPES.map(Recipe.fromJson).concat(Recipe.getScavRecipes()).filter(r => !r.activeWhen || new go_time_1.GoTime(r.activeWhen).next());
const findRecipesWithOutput = (itemID) => {
    if (!itemID)
        return [];
    return exports.RECIPES.filter((r, idx, self) => idx === self.findIndex(other => other.displayName === r.displayName)).filter(r => r.getLootAverage().some(l => l.id === itemID));
};
exports.findRecipesWithOutput = findRecipesWithOutput;
const findRecipesWithInput = (itemID) => {
    if (!itemID)
        return [];
    return exports.RECIPES.filter((r, idx, self) => idx === self.findIndex(other => other.displayName === r.displayName)).filter(r => r.inputs.some(input => input.item.internalId === itemID));
};
exports.findRecipesWithInput = findRecipesWithInput;
