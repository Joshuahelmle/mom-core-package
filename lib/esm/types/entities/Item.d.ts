import { IEntity } from "./IEntity";
import { LootTable } from './LootTable';
export interface GameDataItem {
    actions: {
        functionName: string;
        args: string[];
    }[];
    duskPrice: number;
    id: string;
    image: string;
    keywords: string[];
    lootTableId: string | null;
    name: string;
    recievedSoundId?: string | null;
}
export declare class Item implements IEntity {
    internalId: string;
    displayName: string;
    image: string;
    keywords: string[];
    lootTable?: LootTable | undefined;
    constructor(internalId: string, displayName: string, image: string, keywords: string[], lootTable?: LootTable | undefined);
    static fromGameData({ id, name, image, keywords, lootTableId }: GameDataItem): Item;
    isInternal(): boolean;
    isStatic(): boolean;
    isResource(): boolean;
    isDTM(): boolean;
    isArt(): boolean;
    isArtifact(): boolean;
    isMarket(): boolean;
    getLoot(): import("./LootTable").Loot<string>[] | undefined;
    getLootAverage(): import("./LootTable").Loot<string>[] | undefined;
    getLootPercentages(): import("./LootTable").Loot<string>[] | undefined;
}
export declare const ITEMS: Item[];
//# sourceMappingURL=Item.d.ts.map