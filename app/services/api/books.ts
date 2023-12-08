import fs from "fs";
import path from "path";
import { Book } from "@/app/types";

async function fetchBooks(): Promise<Book[]> {
  const filePath = path.resolve(".", "app/constants", "books.json");

  try {
    const data = await fs.promises.readFile(filePath, "utf-8");

    const books: Book[] = JSON.parse(data);

    return books;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default fetchBooks;
