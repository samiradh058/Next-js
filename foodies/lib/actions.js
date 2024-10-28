"use server";
import { redirect } from "next/navigation";
// Guarantees it will be executed only in the server

import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

// 1st parameter is pervious(initial state) and second is the sent data
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"), // it should be same as in name
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid input");
    return { message: "Invalid input!" };
  }

  await saveMeal(meal);
  // Revalidate the cache that belongs to certain route path
  revalidatePath("/meals");

  // revalidatePath("/meals", "layout");
  // If set to page, only that page will revalidate but not routes. layout revalidates all the nested pages
  redirect("/meals");
}
