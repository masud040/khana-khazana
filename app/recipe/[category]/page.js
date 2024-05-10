export default function RecipeDetails({ params: { category } }) {
  console.log(decodeURI(category));
  return <div>Hello I am from recipe details</div>;
}
