import { BUILDINGS } from "./entities/Building";
import { RECIPES } from "./entities/Recipe";

console.dir(BUILDINGS.filter(b => b.internalId.includes('recon_site_clue')).map(b => {
    const recipes = b.recipeRefs.map(rr => RECIPES.find(rec => rec.internalId === rr.id))
    return {
        name: b.displayName,
        percentages: recipes.filter(r => !!r && r.outputConditional.length > 0).map(r => r!.getConditionalLootPercentages()),
        loot: recipes.filter(r => !!r && r.outputConditional.length > 0).map(r => r!.getConditionalLootAverage())
    }
}
), { depth: null })