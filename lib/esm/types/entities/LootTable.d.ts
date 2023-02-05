import { ILootTableEntry, ILootItem, LootTableResolver } from 'loot-table-advanced';
export interface GameDataLoottableEntry<T extends string = string> extends ILootTableEntry<T> {
    dynamicPoolId?: string;
}
export interface GameDataLoottable {
    id: string;
    data: GameDataLoottableEntry[];
}
export interface Loot<T extends string = string> extends ILootItem<T> {
    dynamicPoolId?: string;
}
export declare class LootTable {
    internalId: string;
    data: GameDataLoottableEntry[];
    constructor(internalId: string, data: GameDataLoottableEntry[]);
    static fromGameData({ id, data }: GameDataLoottable): LootTable;
    private CloneEntry;
    private CloneLootTable;
    private FillInLootEntryDefaults;
    private ParseLootID;
    private MergeLoot;
    getLoot(): Loot<string>[];
    private GetLootAverage;
    private GetLootPercentages;
    getLootAverage(): Loot<string>[];
    getLootPercentages(): Loot<string>[];
    private hasNestedTables;
    hasDynamicPools(): boolean;
}
export declare const fetchedPoolData: ({
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
    nextDrip: string;
    currentDripAmount: number;
    dripTargets: {
        dusk_pool_10: {
            percent: number;
            amount: number;
        };
        dusk_pool_11: {
            percent: number;
            amount: number;
        };
        dusk_pool_16: {
            percent: number;
            amount: number;
        };
        dusk_pool_18: {
            percent: number;
            amount: number;
        };
        dusk_pool_2: {
            percent: number;
            amount: number;
        };
        dusk_pool_20: {
            percent: number;
            amount: number;
        };
        dusk_pool_3: {
            percent: number;
            amount: number;
        };
        dusk_pool_4: {
            percent: number;
            amount: number;
        };
        dusk_pool_5: {
            percent: number;
            amount: number;
        };
        dusk_pool_6: {
            percent: number;
            amount: number;
        };
        dusk_pool_7: {
            percent: number;
            amount: number;
        };
        dusk_pool_8: {
            percent: number;
            amount: number;
        };
        dusk_pool_9: {
            percent: number;
            amount: number;
        };
    };
    nextDripSeconds: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
} | {
    id: string;
    name: string;
    description: string;
    itemId: string;
    balance: number;
    burnTotal: number;
    sevenDayDeposits: number;
    sevenDayPayouts: number;
    sevenDayBurns: number;
    fullnessTarget: number;
    fullnessPercent: number;
    currentLootMultiplier: number;
})[];
export declare const LOOTTABLES: LootTable[];
export declare const lootResolver: LootTableResolver;
export declare const gdlootResolver: LootTableResolver;
//# sourceMappingURL=LootTable.d.ts.map