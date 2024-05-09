import PurchaseStep from "@/app/components/details/PurchaseStep";
import RecipeDetails from "@/app/components/details/RecipeDetails";

export default function RecipeDetailsPage({ params: { recipeId } }) {
  return (
    <main>
      <RecipeDetails />
      <PurchaseStep />
    </main>
  );
}
