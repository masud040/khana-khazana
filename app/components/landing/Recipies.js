import RecipeCategory from "./RecipeCategory";
import RecipeList from "./RecipeList";

export default function Recipes() {
  return (
    <section className="container py-8">
      <div className="grid grid-cols-12 py-4">
        <RecipeCategory />
        <RecipeList />
      </div>
    </section>
  );
}
