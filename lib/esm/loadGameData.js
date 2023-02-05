import { decompress } from 'lzutf8';
import path from 'path';
import { writeFileSync, existsSync, readFileSync, promises } from 'fs';
const gameDataDir = path.join(__dirname, 'assets', 'gamedata');
async function fetchAndSaveVersion() {
    try {
        const res = await fetch('https://milliononmars.io/api/v1/2d/game-data/version');
        if (!res.ok)
            throw new Error(`Got Status: ${res.status} while fetching version`);
        const data = await res.json();
        await promises.writeFile(path.join(gameDataDir, 'version.json'), JSON.stringify(data));
    }
    catch (error) {
        console.error(error);
    }
}
export async function fetchGameData() {
    try {
        let initialFetch = false;
        if (!existsSync(path.join(gameDataDir, 'version.json'))) {
            await fetchAndSaveVersion();
            initialFetch = true;
        }
        const { version: currVersion } = JSON.parse(readFileSync(path.join(gameDataDir, 'version.json'), 'utf8'));
        const res = await fetch('https://milliononmars.io/api/v1/2d/game-data/version');
        if (!res.ok)
            throw new Error(`Got Status: ${res.status} while fetching version`);
        const versionData = await res.json();
        if (initialFetch || versionData.version !== currVersion) {
            await promises.writeFile(path.join(gameDataDir, 'version.json'), JSON.stringify(versionData));
            const resGD = await fetch(versionData.url);
            if (!resGD.ok)
                throw new Error(`Got Status: ${res.status} while fetching GameData`);
            const buffer = Buffer.from(await resGD.arrayBuffer());
            const gameData = JSON.parse(decompress(buffer));
            //await promises.writeFile(path.join(gameDataDir, `gd_${versionData.version}.json`),
            //JSON.stringify(gameData)
            //);
            const files = [
                "items",
                "lootTables",
                "recipes",
                "buildings",
                "buildingUpgrades",
                "shop",
                "dynamicTreasuryPools",
                "dynamicTreasuryBreakpoints",
                "skillLevels",
                "leaderboards",
            ];
            for (const f of files) {
                writeFileSync(path.join(__dirname, '..', '..', 'src', 'assets', 'gamedata', `${f}.json`), JSON.stringify(gameData[f]));
                writeFileSync(path.join(gameDataDir, `${f}.json`), JSON.stringify(gameData[f]));
            }
            console.log("fetched latest data!");
        }
    }
    catch (error) {
        console.error(error);
    }
}
export const fetchPoolData = async () => {
    const filePath = path.join(__dirname, 'assets', 'poolcache.json');
    const maxCacheAge = 1000 * 60 * 10;
    let json;
    try {
        if (existsSync(filePath)) {
            json = JSON.parse(readFileSync(filePath, 'utf-8'));
            if (Date.now() > (new Date(json.updatedAt).getTime() + maxCacheAge)) {
                const res = await fetch('https://milliononmars.io/api/v1/2d/dynamic-treasury/pool-data');
                json = await res.json();
                writeFileSync(filePath, JSON.stringify(json));
            }
        }
        else {
            const res = await fetch('https://milliononmars.io/api/v1/2d/dynamic-treasury/pool-data');
            json = await res.json();
            writeFileSync(filePath, JSON.stringify(json));
        }
        //fetchedPoolData = Object.entries(json.data).map(d => ({ id: d[0], ...d[1] }))
    }
    catch (err) {
        console.error(err);
    }
};
fetchGameData();
fetchPoolData();
