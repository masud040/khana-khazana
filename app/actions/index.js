"use server";

import {
  createUser,
  getUserByCredentials,
  updateFavourites,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  try {
    const user = Object.fromEntries(formData);
    await createUser(user);
  } catch (error) {
    console.log(error);
  }
  redirect("/login");
}

async function performLogin(formData) {
  try {
    let credentials = {};
    if (formData) {
      credentials.email = formData.get("email");
      credentials.password = formData.get("password");
    }
    return await getUserByCredentials(credentials);
  } catch (error) {
    throw error;
  }
}
async function handleToggleFavourite(userId, recipeId) {
  try {
    await updateFavourites(userId, recipeId);
    revalidatePath(`/details/${recipeId}`, "page");
  } catch (error) {
    throw error;
  }
}
export { handleToggleFavourite, performLogin, registerUser };
