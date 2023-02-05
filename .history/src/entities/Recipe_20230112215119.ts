import { Item } from './Item'

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