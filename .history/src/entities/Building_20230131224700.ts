import { GDBUILDINGS, GDUPGRADES, RARITY } from "./GameDataValues"
import { IEntity } from "./IEntity"
import { Item, ITEMS } from "./Item"
import { Recipe, RECIPES } from "./Recipe"


export interface InventoryItem {
    item: Item,
    value: number,
}
interface GameDataBuilding {
    id: string,
    image: string,
    inventory: { id: string, value: number }[],
    itemId: string | null,
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

interface Upgrade extends Pick<
    GameDataUpgrade, "shardsRequired" | "level" | "shardId" | "upgradePrice"> { }

export class Building implements IEntity {

    constructor(
        public internalId: string,
        public displayName: string,
        public image: string,
        public inventory: InventoryItem[],
        public itemId: string | null,
        public level: number,
        public rarity: RARITY,
        public buildingRecipes: Recipe[],
        public size: number,
        public slotSize: number[],
        public upgrades: Upgrade[],
        public keywords: string[],
        public recipeRefs: { concurrent: number, id: string }[]
    ) { }

    public getNextLevel (): Building | undefined {
        return BUILDINGS.find(b => b.internalId === `${this.itemId}_${this.rarity[0]}${this.level + 1}`);
    }

    public static fromGameData ({ id, name, image, itemId, level, size, rarity, inventory, recipeRefs, keywords }: GameDataBuilding) {
        const inv = inventory.map(i => ({ item: ITEMS.find(itm => itm.internalId === i.id)!, value: i.value }))
        const thisRarity = RARITY[rarity as keyof typeof RARITY]
        const dupl = UPGRADES.filter(u => u.rarity === rarity && u.level >= level && u.itemId === itemId)
        const upgrades = dupl.filter((u, idx) => idx === dupl.findIndex(o => u.level === o.level))
        let recLocation = itemId === 'cantina' ? 1 : 0
        const recs = recipeRefs.length > 0 ? recipeRefs.map(rr => RECIPES.filter(r => r.category === rr.id)).flat() : []
        const slots = recipeRefs.length > 0 ? recipeRefs.filter(rr => RECIPES.filter(r => r.category === rr.id).some(r => r.duration > 0)).map(rr => rr.concurrent) : []
        return new Building(id, name, image, inv, itemId, level, thisRarity, recs, size, slots, upgrades, keywords, recipeRefs)
    }
}

export const UPGRADES: GameDataUpgrade[] = Object.values(GDUPGRADES);
export const BUILDINGS: Building[] = Object.values(GDBUILDINGS).map(Building.fromGameData)