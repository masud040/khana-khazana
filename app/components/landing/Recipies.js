import RecipeList from "./RecipeList";
import RecipeName from "./RecipeName";

export default function Recipes() {
  return (
    <section className="container py-8">
      <div className="grid grid-cols-12 py-4">
        <RecipeName />
        <RecipeList />
      </div>
    </section>
  );
}
