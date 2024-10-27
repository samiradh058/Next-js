import fs from "node:fs";
// It allows us to work with file system

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

// We use run instead of all if we need to insert data (changing data). All is used for fetching all rows data. For fetching single row, use get

export async function getMeals() {
  // For extra delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed");

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug =?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}${Math.floor(
    Math.random() * 100
  )}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email,image, slug) VALUES (
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug)`
  ).run(meal); // Passing meal object
}
