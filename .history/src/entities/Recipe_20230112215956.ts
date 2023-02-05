import { Entity } from './../../.history/src/entities/IEntity_20230112143719';
import { GDRECIPES } from './GameDataValues';
import { Item, ITEMS } from './Item'
import { LootTable, LOOTTABLES } from './LootTable';

interface RecipeInput {
    item: Item,
    amount: number,
    operation: string
}

interface GameDataInput {
    itemMatch: string[],
    operation: string,
    quantity: number
}

interface outputRefConditional {
    conditions: GameDataInput[],
    output: { lootTableId: string }
}

interface GameDataRecipe {
    activeWhen: string,
    canHire: boolean,
    category: string,
    cooldownSeconds: number,
    description: string,
    durationSeconds: number,
    hideUntil: number,
    id: string,
    image: string,
    inputs: GameDataInput[],
    keywords: string[],
    mode: string,
    name: string,
    outputRef: { lootTableId: string }
    outputRefConditional: outputRefConditional[],
    recipients: { itemMatch: string[], who: string }[]
    requirements: GameDataInput[]
}

export class Recipe implements Entity {

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
        public activeWhen: string,
        public outputRef: string,
        public outputConditional: outputRefConditional[],
        public recipients: { itemMatch: string[], who: string }[]) { }

    public getLoot () {
        return this.lootTable?.getLoot();
    }

    public getLootAverage () {
        return this.lootTable?.getLootAverage();
    }

    public getLootPercentages () {
        return this.lootTable?.getLootPercentages();
    }

    static fromJson ({ description, durationSeconds, id, inputs, name, image, outputRef, cooldownSeconds, category, activeWhen, outputRefConditional, recipients }: GameDataRecipe): Recipe {
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


        return new Recipe(id, name, image, recipeInputs, outputs!, durationSeconds, description, cooldownSeconds, category, activeWhen, outputRef.lootTableId, outputRefConditional, recipients)
    }


    static getScavRecipes (): Recipe[] {
        let scav = (Object.values(GDRECIPES) as GameDataRecipe[]).find(r => r.id === 'adv_scavenge')!;
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
            const rec = new Recipe(`${outputs.internalId}`, `${scav.name} Tier${name.pop()}`, scav.image, recipeInputs, outputs, scav.durationSeconds, scav.description, scav.cooldownSeconds, scav.category, scav.activeWhen, scav.outputRef.lootTableId, scav.outputRefConditional, scav.recipients)
            recipes.push(rec);
        }
        return recipes;
    }
}