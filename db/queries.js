import { UserModel } from "@/model/user-model";
import connectMongo from "@/services/mongo";
import replaceMongoIdInArray from "@/utils/replaceMongoIdInArray";
import replaceMongoIdInObject from "@/utils/replaceMongoIdInObject";
import RecipesModel from "../model/recipe-model";

async function getAllRecipes() {
  await connectMongo();
  const allRecipes = await RecipesModel?.find(
    {},
    { _id: 1, name: 1, description: 1, author: 1, thumbnail: 1, rating: 1 }
  ).lean();
  return replaceMongoIdInArray(allRecipes);
}
async function getAllRecipeName() {
  await connectMongo();
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
  await connectMongo();
  const recipe = await RecipesModel.findById(recipeId).lean();
  return replaceMongoIdInObject(recipe);
}
async function createUser(user) {
  await connectMongo();
  return await UserModel.create(user);
}
async function getUserByCredentials(credentials) {
  await connectMongo();
  const user = await UserModel.findOne(credentials).lean();
  return replaceMongoIdInObject(user);
}
async function getRecipesByCategory(categoryName) {
  await connectMongo();
  const recipes = await RecipesModel.find({
    category: categoryName,
  }).lean();
  return replaceMongoIdInArray(recipes);
}
export {
  createUser,
  getAllRecipeName,
  getAllRecipes,
  getRecipeById,
  getRecipesByCategory,
  getUserByCredentials,
};
