"use server";
import { redirect } from "next/navigation";
// Guarantees it will be executed only in the server

import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"), // it should be same as in name
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
}
