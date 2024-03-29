import { IEntity } from './IEntity';
import { GameDataRecipe, GDRECIPES, outputRefConditional } from './GameDataValues';
import { Item, ITEMS } from './Item'
import { LootTable, LOOTTABLES } from './LootTable';
import { GoTime } from '@nimaimalle/go-time';

interface RecipeInput {
    item: Item,
    amount: number,
    operation: string
}






export class Recipe implements IEntity {

    constructor(public internalId: string,
        public displayName: string,
        public image: string,
        public inputs: RecipeInput[],
        //public outputs: RecipeOutput[],
        public lootTable: LootTable,
        public duration: number,
        public description: string,
        public cooldown: number,
        public category: string,
        public activeWhen: string | null,
        public outputRef: string,
        public outputConditional: outputRefConditional[],
        public recipients: { itemMatch: string[], who: string }[],
        public keywords: string[]) { }

    public getLoot () {
        return this.lootTable?.getLoot();
    }

    public getLootAverage () {
        return this.lootTable?.getLootAverage();
    }

    public getLootPercentages () {
        return this.lootTable?.getLootPercentages();
    }

    public getConditionalLoot () {
        return this.outputConditional.map(o => LOOTTABLES.find(loot => loot.internalId === o.output.lootTableId)?.getLoot());
    }

    public getConditionalLootAverage () {
        return this.outputConditional.map(o => LOOTTABLES.find(loot => loot.internalId === o.output.lootTableId)?.getLootAverage());
    }

    public getConditionalLootPercentages () {
        return this.outputConditional.map(o => LOOTTABLES.find(loot => loot.internalId === o.output.lootTableId)?.getLootPercentages());
    }


    public isActiveRecipe () {
        return !this.activeWhen || !!(new GoTime(this.activeWhen).next())
    }

    static fromJson ({ description, durationSeconds, id, inputs, name, image, outputRef, cooldownSeconds, category, activeWhen, outputRefConditional, recipients, keywords }: GameDataRecipe): Recipe {
        const recipeInputs: RecipeInput[] = inputs.map(input => {

            const item = ITEMS.find(i => i.internalId === input.itemMatch[0]) as Item;
            return {
                item: item ?? ITEMS.find(i => i.keywords.includes(input.itemMatch[0])) as Item,
                amount: input.quantity,
                operation: input.operation
            }
        })

        let outputs = LOOTTABLES.find(loot => loot.internalId === outputRef.lootTableId)
        /*if (outputRefConditional.length > 0) {
            
            for (const oRef of outputRefConditional) {
                outputs = outputs.concat(LOOTTABLE.find(loot => loot.id === oRef.output.lootTableId)?.data ?? [])
            }
        }*/


        return new Recipe(id, name, image, recipeInputs, outputs!, durationSeconds, description ?? '', cooldownSeconds, category, activeWhen ?? '', outputRef.lootTableId, outputRefConditional, recipients, keywords)
    }

    public toCSV (): string {
        return '';
        // return ['TRUE', this.internalId, this.displayName, this.description, this.image, this.so]
    }


    static getScavRecipes (): Recipe[] {
        let scav = (Object.values(GDRECIPES)).find(r => r.id === 'adv_scavenge')!;
        const recipeInputs: RecipeInput[] = scav.inputs.map(input => {

            /*return {
                item: ITEMS.find(i => i.internalId === input.itemMatch[0]) as Item,
                amount: input.quantity,
                operation: input.operation
            }*/
            const item = ITEMS.find(i => i.internalId === input.itemMatch[0])
            if (item) {
                return {
                    item,
                    amount: input.quantity,
                    operation: input.operation
                }
            }
            else {
                return {
                    item: ITEMS.find(i => i.internalId === 'dusk')! as Item,
                    amount: 0,
                    operation: input.operation
                }
            }
        })
        const recipes: Recipe[] = []
        for (const lootTable of scav.outputRefConditional) {
            const outputs = LOOTTABLES.find(loot => loot.internalId === lootTable.output.lootTableId)!;
            const name = outputs.internalId.split('_');
            const rec = new Recipe(`${outputs.internalId}`, `${scav.name} Tier${name.pop()}`, scav.image, recipeInputs, outputs, scav.durationSeconds, scav.description ?? '', scav.cooldownSeconds, scav.category, scav.activeWhen ?? '', scav.outputRef.lootTableId, scav.outputRefConditional, scav.recipients, scav.keywords)
            recipes.push(rec);
        }
        return recipes;
    }
}


export const RECIPES = GDRECIPES.map(Recipe.fromJson).concat(Recipe.getScavRecipes()).filter(r => !r.activeWhen || new GoTime(r.activeWhen).next());

export const findRecipesWithOutput = (itemID: string): Recipe[] => {
    if (!itemID) return [];
    return RECIPES.filter((r, idx, self) => idx === self.findIndex(other => other.displayName === r.displayName)).filter(r => r.getLootAverage().some(l => l.id === itemID))
}

export const findRecipesWithInput = (itemID: string): Recipe[] => {
    if (!itemID) return [];
    return RECIPES.filter((r, idx, self) => idx === self.findIndex(other => other.displayName === r.displayName)).filter(r => r.inputs.some(input => input.item.internalId === itemID))
}