import { GDITEMS } from "./GameDataValues";
import { LOOTTABLES } from './LootTable';
export class Item {
    internalId;
    displayName;
    image;
    keywords;
    lootTable;
    constructor(internalId, displayName, image, keywords, lootTable) {
        this.internalId = internalId;
        this.displayName = displayName;
        this.image = image;
        this.keywords = keywords;
        this.lootTable = lootTable;
    }
    static fromGameData({ id, name, image, keywords, lootTableId }) {
        const lootTable = LOOTTABLES.find(lt => lt.internalId === lootTableId);
        return new Item(id, name, image, keywords, lootTable);
    }
    isInternal() {
        return this.keywords.length > 0 && this.keywords.includes('internal');
    }
    isStatic() {
        return this.keywords.length > 0 && this.keywords.includes('static');
    }
    isResource() {
        return this.keywords.length > 0 && this.keywords.includes('resource');
    }
    isDTM() {
        return this.keywords.length > 0 && this.keywords.includes('dtm');
    }
    isArt() {
        return this.keywords.length > 0 && this.keywords.includes('art');
    }
    isArtifact() {
        return this.keywords.length > 0 && this.keywords.includes('artifact');
    }
    isMarket() {
        return this.keywords.length > 0 && this.keywords.includes('market');
    }
    getLoot() {
        return this.lootTable?.getLoot() ?? undefined;
    }
    getLootAverage() {
        return this.lootTable?.getLootAverage() ?? undefined;
    }
    getLootPercentages() {
        return this.lootTable?.getLootPercentages() ?? undefined;
    }
}
export const ITEMS = GDITEMS.map(gdItem => Item.fromGameData(gdItem));
