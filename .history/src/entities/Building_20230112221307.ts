interface GameDataBuilding {
    id: string,
    image: string,
    inventory: { id: string, value: number }[],
    itemId: string,
    keywords: string[],
    level: number,
    name: string,
    rarity: string,
    recipeRefs: { concurrent: number, id: string }[]
    size: number
}

export interface GameDataUpgrade {
    shardsRequired: number,
    upgradePrice: number,
    itemId: string,
    level: number,
    rarity: string,
    shardId: string,
    id: string,
    name: string,
    nextLevel: number,

}