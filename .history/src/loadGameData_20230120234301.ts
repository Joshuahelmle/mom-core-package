import { decompress } from 'lzutf8'
import path from 'path'
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs'

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

export async function fetchGameData () {
    try {
        const res = await fetch("https://milliononmars.io/data/Game_Data.bin");
        const buffer = Buffer.from(await res.arrayBuffer());
        const data = JSON.parse(decompress(buffer));
        const gameDataDir = path.join(__dirname, 'assets', 'gamedata');
        if (!existsSync(gameDataDir)) {
            mkdirSync(gameDataDir, { recursive: true });
        }
        writeFileSync(path.join(gameDataDir, `gd_${Date.now().toString()}.json`),
            JSON.stringify(data)
        );


        const files = [
            "items",
            "lootTables",
            "recipes",
            "buildings",
            "buildingUpgrades",
            "shop",
            "dynamicTreasuryPools",
            "dynamicTreasuryBreakpoints",
            "skillLevels"
        ];

        for (const f of files) {
            writeFileSync(path.join(gameDataDir, `${f}.json`), JSON.stringify(data[f]));
        }
        console.log("fetched latest data!")
    } catch (error) {
        console.error(error)
    }

}

export const fetchPoolData = async () => {
    const filePath = path.join(__dirname, 'assets', 'poolcache.json');
    const maxCacheAge = 1000 * 60 * 10;
    let json: APIResponse
    try {
        if (existsSync(filePath)) {
            json = JSON.parse(readFileSync(filePath, 'utf-8'));
            if (Date.now() > (new Date(json.updatedAt).getTime() + maxCacheAge)) {
                const res = await fetch('https://milliononmars.io/api/v1/2d/dynamic-treasury/pool-data');
                json = await res.json();
                writeFileSync(filePath, JSON.stringify(json));
            }
        } else {
            const res = await fetch('https://milliononmars.io/api/v1/2d/dynamic-treasury/pool-data');
            json = await res.json();
            writeFileSync(filePath, JSON.stringify(json));
        }
        //fetchedPoolData = Object.entries(json.data).map(d => ({ id: d[0], ...d[1] }))
    } catch (err) {
        console.error(err);
    }
}

fetchGameData();
fetchPoolData();