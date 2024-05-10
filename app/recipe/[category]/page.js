import RecipeCard from "@/app/components/landing/RecipeCard";
import { getRecipesByCategory } from "@/db/queries";
export async function generateMetadata({ params: { category } }) {
  return {
    title: `Khana Khazana - ${decodeURIComponent(category)} | Category`,
    description: `Explore the Finest Culinary Creations at Khana Khazana - Indulge in Delectable ${decodeURIComponent(
      category
    )} Dishes! From traditional favorites to innovative delights, our menu offers a tantalizing array of flavors. Experience the essence of [Category] cuisine with every bite. Order now for a culinary journey like no other!`,
  };
}
export default async function RecipeDetails({ params: { category } }) {
  const recipes = await getRecipesByCategory(decodeURIComponent(category));

  return (
    <main>
      <section className="container py-8">
        <div>
          <h3 className="text-xl font-semibold">
            {decodeURIComponent(category)}
          </h3>
          <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {recipes?.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
