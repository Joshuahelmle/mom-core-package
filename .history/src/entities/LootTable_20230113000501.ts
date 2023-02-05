import { ILootTableEntry, ILootItem, GetLoot, LootTableResolver, LootTable as ltaTable, AddLoot } from 'loot-table-advanced';
import { GDLOOTTABLES } from './GameDataValues';
import fetchedPoolDataJson from '../assets/poolcache.json'

interface poolData {
    id: string,
    name: string,
    description: string,
    itemId: string,
    balance: number,
    burnTotal: number,
    sevenDayDeposits: number,
    sevenDayPayouts: number,
    sevenDayBurns: number,
    fullnessTarget: number,
    fullnessPercent: number,
    currentLootMultiplier: number,
    nextDrip?: string,
    currentDripAmount?: number,
    dripTargets?: { [key in string]: { percent: number, amount: number } }
}

interface APIResponse {
    updatedAt: string,
    nextUpdateSeconds: number,
    cacheDetails: string,
    data: { [key in string]: poolData }
}

interface GameDataLoottableEntry<T extends string = string> extends ILootTableEntry<T> {
    dynamicPoolId?: string
}

export interface GameDataLoottable {
    id: string,
    data: GameDataLoottableEntry[]
}

export interface Loot<T extends string = string> extends ILootItem<T> {
    dynamicPoolId?: string;
}

const MAX_NESTED = 100;

const loot_defaults: ILootTableEntry = {
    id: null,
    weight: 1,
    min: 1,
    max: 1,
    step: 1,
    group: 1,
    transform: null,
}

const rxLootTableEntryID = new RegExp('^@?([a-z0-9_-]+)(\\(([0-9]+)\\))?$', 'i')

export class LootTable {
    constructor(public internalId: string, public data: GameDataLoottableEntry[]) { }

    public static fromGameData ({ id, data }: GameDataLoottable): LootTable {
        const dynamicData = data.map(e => {
            if (e.dynamicPoolId) {
                let transform = (x: number) => x * (fetchedPoolData.find(pool => pool.id === e.dynamicPoolId)?.currentLootMultiplier ?? 1);
                return { ...e, transform }
            } else return e
        });
        return new LootTable(id, dynamicData);
    }

    private CloneEntry<T extends string = string> (
        entry: Partial<ILootTableEntry<T>>
    ): Partial<ILootTableEntry<T>> {
        return JSON.parse(JSON.stringify(entry)) as Partial<ILootTableEntry<T>>
    }

    private CloneLootTable<T extends string = string> (
        table: ltaTable<T>
    ): ltaTable<T> {
        const result = JSON.parse(JSON.stringify(table)) as ltaTable<T>
        return result
    }

    private FillInLootEntryDefaults<T extends string = string> (
        entry: Partial<ILootTableEntry<T>>
    ): ILootTableEntry<T> {
        if (entry.id === undefined) entry.id = null
        if (entry.weight === undefined) entry.weight = loot_defaults.weight
        if (entry.min === undefined) entry.min = loot_defaults.min
        if (entry.max === undefined)
            entry.max = Math.max(loot_defaults.max, loot_defaults.min)
        if (entry.step === undefined) entry.step = loot_defaults.step
        if (entry.group === undefined) entry.group = loot_defaults.group
        return entry as ILootTableEntry<T>
    }

    private ParseLootID<T extends string = string> (
        id: string
    ): { id: T | null; count: number } {
        var count = 0
        var name: T | null = null
        const matches = id.match(rxLootTableEntryID)
        if (matches) {
            name = matches[1] as T
            count = matches[3] === undefined ? 1 : parseInt(matches[3])
        }
        return { id: name, count }
    }

    private MergeLoot<TID extends string = string> (
        a: Array<Loot<TID>>,
        b: Array<Loot<TID>>
    ): Array<Loot<TID>> {
        b.forEach((e) => AddLoot(a, e))
        return a
    }

    public getLoot (): Loot<string>[] {
        return GetLoot(this.data, 1, lootResolver)
    }

    private GetLootAverage<
        T extends string = string, // Item Id type
        V extends string = string // Loot Table Id type
    > (
        table: ltaTable<T>,
        count: number = 1,
        resolver?: LootTableResolver<T, V>,
        depth = 0
    ): Array<Loot<T>> {
        if (!Array.isArray(table)) throw new Error('Not a loot table')
        if (depth > MAX_NESTED) throw new Error(`Too many nested loot tables`)
        if (count != 1) {
            table = this.CloneLootTable(table)
        }
        const result = new Array<ILootItem<T>>()
        const groups = new Set()
        table.map((e) => groups.add(e.group))
        for (let pull = 0; pull < count; ++pull) {
            for (const groupID of groups) {
                const entries = table
                    .filter((e) => e.group === groupID)
                    .map(this.FillInLootEntryDefaults)
                const totalWeight = entries
                    .map((e) => e.weight)
                    .reduce((a, b) => a + b, 0)
                if (totalWeight == 0) {
                    continue
                }
                for (const e of entries) {
                    const avg = e.transform ? e.transform(e.weight / totalWeight) : e.weight / totalWeight;
                    const quantity = (e.min + e.max) / 2 * avg;
                    const id = e.id

                    if (id?.startsWith('@')) {
                        const otherInfo = this.ParseLootID<V>(id.substring(1))
                        if (!otherInfo.id) throw new Error(`Unable to parse ${id}`)
                        if (!resolver) throw new Error(`No resolver for ${id}`)
                        const otherTable = resolver(otherInfo.id)
                        if (!otherTable) throw new Error(`${id} could not be resolved`)
                        const loot = this.GetLootAverage(otherTable, otherInfo.count, resolver, ++depth)
                        loot.forEach(item => item.quantity *= quantity)
                        this.MergeLoot(result, loot)
                    } else {
                        if (e.id !== null) {
                            AddLoot(result, { id: e.id, quantity })
                        }
                    }

                }
            }
        }

        return result
    }


    private GetLootPercentages<
        T extends string = string, // Item Id type
        V extends string = string // Loot Table Id type
    > (
        table: ltaTable<T>,
        count: number = 1,
        resolver?: LootTableResolver<T, V>,
        depth = 0
    ): Array<Loot<T>> {
        if (!Array.isArray(table)) throw new Error('Not a loot table')
        if (depth > MAX_NESTED) throw new Error(`Too many nested loot tables`)
        if (count != 1) {
            table = this.CloneLootTable(table)
        }
        const result = new Array<ILootItem<T>>()
        const groups = new Set()
        table.map((e) => groups.add(e.group))
        for (let pull = 0; pull < count; ++pull) {
            for (const groupID of groups) {
                const entries = table
                    .filter((e) => e.group === groupID)
                    .map(this.FillInLootEntryDefaults)
                const totalWeight = entries
                    .map((e) => e.weight)
                    .reduce((a, b) => a + b, 0)
                if (totalWeight == 0) {
                    continue
                }
                for (const e of entries) {
                    const quantity = e.transform ? e.transform(e.weight / totalWeight) : e.weight / totalWeight;
                    const id = e.id

                    if (id?.startsWith('@')) {
                        const otherInfo = this.ParseLootID<V>(id.substring(1))
                        if (!otherInfo.id) throw new Error(`Unable to parse ${id}`)
                        if (!resolver) throw new Error(`No resolver for ${id}`)
                        const otherTable = resolver(otherInfo.id)
                        if (!otherTable) throw new Error(`${id} could not be resolved`)
                        const loot = this.GetLootPercentages(otherTable, otherInfo.count, resolver, ++depth)
                        loot.forEach(item => item.quantity *= quantity)
                        this.MergeLoot(result, loot)
                    } else {
                        if (e.id !== null) {
                            AddLoot(result, { id: e.id, quantity })
                        }
                    }

                }
            }
        }

        return result
    }

    public getLootAverage () {
        return this.GetLootAverage(this.data, 1, lootResolver)
    }

    public getLootPercentages () {
        return this.GetLootPercentages(this.data, 1, lootResolver)
    }



    private hasNestedTables () {
        return this.data.some(e => e.id?.startsWith('@'))
    }

    public hasDynamicPools (): boolean {
        if (!this.hasNestedTables()) {
            return this.data.some(e => !!e.dynamicPoolId)
        } else {
            return this.data.filter(e => e.id?.startsWith('@'))
                .map(e => e.id?.slice(1))
                .map(name => LOOTTABLES.find(lt => lt.internalId === name))
                .map(lt => lt?.hasDynamicPools()).some(e => e === true)
        }
    }
}





export const fetchedPoolData = Object.values(fetchedPoolDataJson.data);
export const LOOTTABLES = (GDLOOTTABLES as GameDataLoottable[]).map(LootTable.fromGameData);
export const lootResolver: LootTableResolver = (id: string) => LOOTTABLES.find(lt => lt.internalId === id)?.data;
export const gdlootResolver: LootTableResolver = (id: string) => (GDLOOTTABLES as GameDataLoottable[]).find(lt => lt.id === id)?.data ?? []