import { BUILDINGS } from "./entities/Building";
import { RECIPES } from "./entities/Recipe";

console.dir(BUILDINGS.filter(b => b.internalId.includes('recon_site_clue')).map(b => {
    const recipes = b.recipeRefs.map(rr => RECIPES.find(rec => rec.internalId === rr.id))
    return {
        name: b.displayName, chances: recipes.map(r => !!r && r.getConditionalLootPercentages())
    }
}
), { depth: null })