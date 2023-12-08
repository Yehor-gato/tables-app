import fs from "fs";
import path from "path";
import { Writer } from "@/app/types";

async function fetchWriters(): Promise<Writer[]> {
  const filePath = path.resolve(".", "app/constants", "writers.json");

  try {
    const data = await fs.promises.readFile(filePath, "utf-8");

    const authors: Writer[] = JSON.parse(data);

    return authors;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default fetchWriters;
