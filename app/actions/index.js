"use server";

import { createUser } from "@/db/queries";
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

export { registerUser };
