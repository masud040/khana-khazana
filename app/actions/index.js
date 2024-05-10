"use server";

import { createUser, getUserByCredentials } from "@/db/queries";
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
export { performLogin, registerUser };
