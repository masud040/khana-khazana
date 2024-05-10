import PurchaseStep from "@/app/components/details/PurchaseStep";
import RecipeDetails from "@/app/components/details/RecipeDetails";
import { getRecipeById } from "@/db/queries";
export async function generateMetadata({ params: { recipeId } }) {
  const recipeDetails = await getRecipeById(recipeId);
  return {
    title: `${"Khana Khazana" - recipeDetails?.name}`,
    description: recipeDetails?.description,
    openGraph: {
      images: [recipeDetails?.thumbnail],
    },
  };
}
export default async function RecipeDetailsPage({ params: { recipeId } }) {
  const recipeData = await getRecipeById(recipeId);

  return (
    <main>
      <RecipeDetails recipeData={recipeData} />
      <PurchaseStep steps={recipeData?.steps} />
    </main>
  );
}
