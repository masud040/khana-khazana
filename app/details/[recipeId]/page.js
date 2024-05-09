import PurchaseStep from "@/app/components/details/PurchaseStep";
import RecipeDetails from "@/app/components/details/RecipeDetails";
import { getRecipeById } from "@/db/queries";

export default async function RecipeDetailsPage({ params: { recipeId } }) {
  const recipeData = await getRecipeById(recipeId);
  console.log(recipeData);
  return (
    <main>
      <RecipeDetails />
      <PurchaseStep />
    </main>
  );
}
