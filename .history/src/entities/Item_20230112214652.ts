import { IEntity } from "./IEntity";

import { GDITEMS } from "./GameDataValues";
import { LootTable, LOOTTABLES } from './LootTable'


export interface GameDataItem {
    actions: {
        functionName: string,
        args: string[]
    }[],
    duskPrice: number,
    id: string,
    image: string,
    keywords: string[],
    lootTableId: string | null,
    name: string,
    recievedSoundId?: string | null
}

export class Item implements IEntity {
    constructor(public internalId: string, public displayName: string, public image: string, public keywords: string[], public lootTable?: LootTable) { }

    public static fromGameData ({ id, name, image, keywords, lootTableId }: GameDataItem): Item {
        const lootTable = LOOTTABLES.find(lt => lt.internalId === lootTableId);
        return new Item(id, name, image, keywords, lootTable)

    }

    public isInternal (): boolean {
        return this.keywords.length > 0 && this.keywords.includes('internal')
    }

    public isStatic (): boolean {
        return this.keywords.length > 0 && this.keywords.includes('static')
    }

    public isResource (): boolean {
        return this.keywords.length > 0 && this.keywords.includes('resource')
    }

    public isDTM (): boolean {
        return this.keywords.length > 0 && this.keywords.includes('dtm');
    }

    public isArt (): boolean {
        return this.keywords.length > 0 && this.keywords.includes('art');
    }

    public isArtifact (): boolean {
        return this.keywords.length > 0 && this.keywords.includes('artifact');
    }

    public isMarket (): boolean {
        return this.keywords.length > 0 && this.keywords.includes('market');
    }

    public getLoot () {
        return this.lootTable?.getLoot() ?? undefined
    }
}

export const ITEMS: Item[] = GDITEMS.map(gdItem => Item.fromGameData(gdItem as GameDataItem))