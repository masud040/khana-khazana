import RecipeCard from "@/app/components/landing/RecipeCard";
import { getRecipesByCategory } from "@/db/queries";

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
