import { GDRECIPES } from './GameDataValues';
import { ITEMS } from './Item';
import { LOOTTABLES } from './LootTable';
import { GoTime } from '@nimaimalle/go-time';
export class Recipe {
    internalId;
    displayName;
    image;
    inputs;
    lootTable;
    duration;
    description;
    cooldown;
    category;
    activeWhen;
    outputRef;
    outputConditional;
    recipients;
    keywords;
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
        return this.lootTable?.getLoot();
    }
    getLootAverage() {
        return this.lootTable?.getLootAverage();
    }
    getLootPercentages() {
        return this.lootTable?.getLootPercentages();
    }
    isActiveRecipe() {
        return !this.activeWhen || !!(new GoTime(this.activeWhen).next());
    }
    static fromJson({ description, durationSeconds, id, inputs, name, image, outputRef, cooldownSeconds, category, activeWhen, outputRefConditional, recipients, keywords }) {
        const recipeInputs = inputs.map(input => {
            const item = ITEMS.find(i => i.internalId === input.itemMatch[0]);
            return {
                item: item ?? ITEMS.find(i => i.keywords.includes(input.itemMatch[0])),
                amount: input.quantity,
                operation: input.operation
            };
        });
        let outputs = LOOTTABLES.find(loot => loot.internalId === outputRef.lootTableId);
        /*if (outputRefConditional.length > 0) {
            
            for (const oRef of outputRefConditional) {
                outputs = outputs.concat(LOOTTABLE.find(loot => loot.id === oRef.output.lootTableId)?.data ?? [])
            }
        }*/
        return new Recipe(id, name, image, recipeInputs, outputs, durationSeconds, description, cooldownSeconds, category, activeWhen, outputRef.lootTableId, outputRefConditional, recipients, keywords);
    }
    static getScavRecipes() {
        let scav = (Object.values(GDRECIPES)).find(r => r.id === 'adv_scavenge');
        const recipeInputs = scav.inputs.map(input => {
            /*return {
                item: ITEMS.find(i => i.internalId === input.itemMatch[0]) as Item,
                amount: input.quantity,
                operation: input.operation
            }*/
            const item = ITEMS.find(i => i.internalId === input.itemMatch[0]);
            if (item) {
                return {
                    item,
                    amount: input.quantity,
                    operation: input.operation
                };
            }
            else {
                return {
                    item: ITEMS.find(i => i.internalId === 'dusk'),
                    amount: 0,
                    operation: input.operation
                };
            }
        });
        const recipes = [];
        for (const lootTable of scav.outputRefConditional) {
            const outputs = LOOTTABLES.find(loot => loot.internalId === lootTable.output.lootTableId);
            const name = outputs.internalId.split('_');
            const rec = new Recipe(`${outputs.internalId}`, `${scav.name} Tier${name.pop()}`, scav.image, recipeInputs, outputs, scav.durationSeconds, scav.description, scav.cooldownSeconds, scav.category, scav.activeWhen, scav.outputRef.lootTableId, scav.outputRefConditional, scav.recipients, scav.keywords);
            recipes.push(rec);
        }
        return recipes;
    }
}
export const RECIPES = GDRECIPES.map(Recipe.fromJson).concat(Recipe.getScavRecipes()).filter(r => !r.activeWhen || new GoTime(r.activeWhen).next());
export const findRecipesWithOutput = (itemID) => {
    if (!itemID)
        return [];
    return RECIPES.filter((r, idx, self) => idx === self.findIndex(other => other.displayName === r.displayName)).filter(r => r.getLootAverage().some(l => l.id === itemID));
};
export const findRecipesWithInput = (itemID) => {
    if (!itemID)
        return [];
    return RECIPES.filter((r, idx, self) => idx === self.findIndex(other => other.displayName === r.displayName)).filter(r => r.inputs.some(input => input.item.internalId === itemID));
};
