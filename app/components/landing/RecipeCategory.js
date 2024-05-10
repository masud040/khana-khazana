import { getAllRecipeName } from "@/db/queries";
import Link from "next/link";

export default async function RecipeCategory() {
  const allRecipes = await getAllRecipeName();

  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="text-xl font-bold">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-sm text-gray-500">
        {allRecipes?.map((recipe) => (
          <li key={recipe.id} className="hover:text-gray-800">
            <Link href={`/recipe/${encodeURIComponent(recipe.category)}`}>
              {recipe.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
