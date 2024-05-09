import { getAllRecipes } from "@/db/queries";
import RecipeCard from "./RecipeCard";

export default async function RecipeList() {
  const allRecipe = await getAllRecipes();

  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {allRecipe?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
