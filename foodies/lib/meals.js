import sql from "better-sqlite3";

const db = sql("meals.db");

// We use run instead of all if we need to insert data (changing data). All is used for fetching all rows data. For fetching single row, use get

export async function getMeals() {
  // For extra delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare("SELECT * FROM meals").all();
}
