import { Entity } from './../../.history/src/entities/IEntity_20230112143719';
import { Item } from './Item'
import { LootTable } from './LootTable';

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
    ouput: { lootTableId: string }
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
}