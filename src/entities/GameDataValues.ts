import lootTables from '../assets/gamedata/lootTables.json'
import gameItems from '../assets/gamedata/items.json'
import gameRecipes from '../assets/gamedata/recipes.json'
import gameBuildings from '../assets/gamedata/buildings.json'
import gameUpgrades from '../assets/gamedata/buildingUpgrades.json'

export enum RARITY {
    COMMON = "COMMON", UNCOMMON = "UNCOMMON", RARE = "RARE", EPIC = "EPIC", LEGENDARY = "LEGENDARY", MYTHIC = "MYTHIC"
}


export interface outputRefConditional {
    conditions: GameDataInput[],
    output: { lootTableId: string }
}

export interface GameDataInput {
    itemMatch: string[],
    operation: string,
    quantity: number
}


export interface GameDataRecipe {
    activeWhen: string | null,
    canHire: boolean,
    category: string,
    cooldownSeconds: number,
    description: string,
    durationSeconds: number,
    hideUntil: number | null,
    id: string,
    image: string,
    inputs: GameDataInput[],
    keywords: string[],
    mode: string | null,
    name: string,
    outputRef: { lootTableId: string }
    outputRefConditional: outputRefConditional[],
    recipients: { itemMatch: string[], who: string }[]
    requirements: GameDataInput[]
}



export const GDRECIPES: GameDataRecipe[] = Object.values(gameRecipes)
export const GDLOOTTABLES = Object.values(lootTables);
export const GDITEMS = Object.values(gameItems);
export const GDBUILDINGS = Object.values(gameBuildings);
export const GDUPGRADES = Object.values(gameUpgrades);
