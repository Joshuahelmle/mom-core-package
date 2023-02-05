"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPoolData = exports.fetchGameData = void 0;
const lzutf8_1 = require("lzutf8");
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const gameDataDir = path_1.default.join(__dirname, 'assets', 'gamedata');
function fetchAndSaveVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('https://milliononmars.io/api/v1/2d/game-data/version');
            if (!res.ok)
                throw new Error(`Got Status: ${res.status} while fetching version`);
            const data = yield res.json();
            yield fs_1.promises.writeFile(path_1.default.join(gameDataDir, 'version.json'), JSON.stringify(data));
        }
        catch (error) {
            console.error(error);
        }
    });
}
function fetchGameData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let initialFetch = false;
            if (!(0, fs_1.existsSync)(path_1.default.join(gameDataDir, 'version.json'))) {
                yield fetchAndSaveVersion();
                initialFetch = true;
            }
            const { version: currVersion } = JSON.parse((0, fs_1.readFileSync)(path_1.default.join(gameDataDir, 'version.json'), 'utf8'));
            const res = yield fetch('https://milliononmars.io/api/v1/2d/game-data/version');
            if (!res.ok)
                throw new Error(`Got Status: ${res.status} while fetching version`);
            const versionData = yield res.json();
            if (initialFetch || versionData.version !== currVersion) {
                yield fs_1.promises.writeFile(path_1.default.join(gameDataDir, 'version.json'), JSON.stringify(versionData));
                const resGD = yield fetch(versionData.url);
                if (!resGD.ok)
                    throw new Error(`Got Status: ${res.status} while fetching GameData`);
                const buffer = Buffer.from(yield resGD.arrayBuffer());
                const gameData = JSON.parse((0, lzutf8_1.decompress)(buffer));
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
                    (0, fs_1.writeFileSync)(path_1.default.join(__dirname, '..', '..', 'src', 'assets', 'gamedata', `${f}.json`), JSON.stringify(gameData[f]));
                    (0, fs_1.writeFileSync)(path_1.default.join(gameDataDir, `${f}.json`), JSON.stringify(gameData[f]));
                }
                console.log("fetched latest data!");
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.fetchGameData = fetchGameData;
const fetchPoolData = () => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = path_1.default.join(__dirname, 'assets', 'poolcache.json');
    const maxCacheAge = 1000 * 60 * 10;
    let json;
    try {
        if ((0, fs_1.existsSync)(filePath)) {
            json = JSON.parse((0, fs_1.readFileSync)(filePath, 'utf-8'));
            if (Date.now() > (new Date(json.updatedAt).getTime() + maxCacheAge)) {
                const res = yield fetch('https://milliononmars.io/api/v1/2d/dynamic-treasury/pool-data');
                json = yield res.json();
                (0, fs_1.writeFileSync)(filePath, JSON.stringify(json));
            }
        }
        else {
            const res = yield fetch('https://milliononmars.io/api/v1/2d/dynamic-treasury/pool-data');
            json = yield res.json();
            (0, fs_1.writeFileSync)(filePath, JSON.stringify(json));
        }
        //fetchedPoolData = Object.entries(json.data).map(d => ({ id: d[0], ...d[1] }))
    }
    catch (err) {
        console.error(err);
    }
});
exports.fetchPoolData = fetchPoolData;
fetchGameData();
(0, exports.fetchPoolData)();
