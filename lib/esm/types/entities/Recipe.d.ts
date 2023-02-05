import { IEntity } from './IEntity';
import { GameDataRecipe, outputRefConditional } from './GameDataValues';
import { Item } from './Item';
import { LootTable } from './LootTable';
interface RecipeInput {
    item: Item;
    amount: number;
    operation: string;
}
export declare class Recipe implements IEntity {
    internalId: string;
    displayName: string;
    image: string;
    inputs: RecipeInput[];
    lootTable: LootTable;
    duration: number;
    description: string;
    cooldown: number;
    category: string;
    activeWhen: string | null;
    outputRef: string;
    outputConditional: outputRefConditional[];
    recipients: {
        itemMatch: string[];
        who: string;
    }[];
    keywords: string[];
    constructor(internalId: string, displayName: string, image: string, inputs: RecipeInput[], lootTable: LootTable, duration: number, description: string, cooldown: number, category: string, activeWhen: string | null, outputRef: string, outputConditional: outputRefConditional[], recipients: {
        itemMatch: string[];
        who: string;
    }[], keywords: string[]);
    getLoot(): import("./LootTable").Loot<string>[];
    getLootAverage(): import("./LootTable").Loot<string>[];
    getLootPercentages(): import("./LootTable").Loot<string>[];
    isActiveRecipe(): boolean;
    static fromJson({ description, durationSeconds, id, inputs, name, image, outputRef, cooldownSeconds, category, activeWhen, outputRefConditional, recipients, keywords }: GameDataRecipe): Recipe;
    static getScavRecipes(): Recipe[];
}
export declare const RECIPES: Recipe[];
export declare const findRecipesWithOutput: (itemID: string) => Recipe[];
export declare const findRecipesWithInput: (itemID: string) => Recipe[];
export {};
//# sourceMappingURL=Recipe.d.ts.map