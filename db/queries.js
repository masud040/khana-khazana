import replaceMongoIdInArray from "@/utils/replaceMongoIdInArray";
import replaceMongoIdInObject from "@/utils/replaceMongoIdInObject";
import RecipesModel from "../model/recipe-model";

async function getAllRecipes() {
  const allRecipes = await RecipesModel?.find(
    {},
    { _id: 1, name: 1, description: 1, author: 1, thumbnail: 1, rating: 1 }
  ).lean();
  return replaceMongoIdInArray(allRecipes);
}
async function getAllRecipeName() {
  const allRecipeName = await RecipesModel?.find({}, { category: 1 }).lean();

  let recipeNames = [];
  allRecipeName.forEach((recipe) => {
    const existingObj = recipeNames?.find(
      (item) => item?.category === recipe?.category
    );

    if (!existingObj) {
      recipeNames.push(recipe);
    }
  });

  return replaceMongoIdInArray(recipeNames);
}
async function getRecipeById(recipeId) {
  const recipe = await RecipesModel.findById(recipeId).lean();
  return replaceMongoIdInObject(recipe);
}
export { getAllRecipeName, getAllRecipes, getRecipeById };
