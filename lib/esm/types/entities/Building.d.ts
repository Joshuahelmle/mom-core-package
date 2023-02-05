import { RARITY } from "./GameDataValues";
import { IEntity } from "./IEntity";
import { Item } from "./Item";
import { Recipe } from "./Recipe";
export interface InventoryItem {
    item: Item;
    value: number;
}
interface GameDataBuilding {
    id: string;
    image: string;
    inventory: {
        id: string;
        value: number;
    }[];
    itemId: string | null;
    keywords: string[];
    level: number;
    name: string;
    rarity: string;
    recipeRefs: {
        concurrent: number;
        id: string;
    }[];
    size: number;
}
export interface GameDataUpgrade {
    shardsRequired: number;
    upgradePrice: number;
    itemId: string;
    level: number;
    rarity: string;
    shardId: string;
    id: string;
    name: string;
    nextLevel: number;
}
interface Upgrade extends Pick<GameDataUpgrade, "shardsRequired" | "level" | "shardId" | "upgradePrice"> {
}
export declare class Building implements IEntity {
    internalId: string;
    displayName: string;
    image: string;
    inventory: InventoryItem[];
    itemId: string | null;
    level: number;
    rarity: RARITY;
    buildingRecipes: Recipe[];
    size: number;
    slotSize: number[];
    upgrades: Upgrade[];
    keywords: string[];
    recipeRefs: {
        concurrent: number;
        id: string;
    }[];
    constructor(internalId: string, displayName: string, image: string, inventory: InventoryItem[], itemId: string | null, level: number, rarity: RARITY, buildingRecipes: Recipe[], size: number, slotSize: number[], upgrades: Upgrade[], keywords: string[], recipeRefs: {
        concurrent: number;
        id: string;
    }[]);
    getNextLevel(): Building | undefined;
    static fromGameData({ id, name, image, itemId, level, size, rarity, inventory, recipeRefs, keywords }: GameDataBuilding): Building;
}
export declare const UPGRADES: GameDataUpgrade[];
export declare const BUILDINGS: Building[];
export {};
//# sourceMappingURL=Building.d.ts.map