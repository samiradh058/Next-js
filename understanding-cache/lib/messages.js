import { cache } from "react";
import { unstable_cache } from "next/cache";

import sql from "better-sqlite3";

const db = new sql("messages.db");

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare("INSERT INTO messages (text) VALUES (?)").run(message);
}

// export function getMessages() {
//   console.log("Fetching messages from db");
//   return db.prepare("SELECT * FROM messages").all();
// }

// export const getMessages = cache(function getMessages() {
//   console.log("Fetching messages from db");
//   return db.prepare("SELECT * FROM messages").all();
// });

// Outer is for caching the data returned by function
export const getMessages = unstable_cache(
  // Inner is for request de-duplication
  cache(function getMessages() {
    console.log("Fetching messages from db");
    return db.prepare("SELECT * FROM messages").all();
  }),
  ["messages"],
  {
    // revalidate:5
    tags: ["msg"],
  }
);
