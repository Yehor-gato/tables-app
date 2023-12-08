import { SearchableData } from "@/app/types";

function searchInArray<T extends SearchableData>(
  array: T[],
  search: string,
): T[] {
  if (!search) return array;

  const searchLower = search.toLowerCase();

  return array.filter((item) =>
    Object.entries(item).some(([key, value]) => {
      if (typeof value !== "string" && typeof value !== "number") {
        console.warn(
          `Skipped search on property ${key}. Unexpected value received: ${value}`,
        );
        return false;
      }

      return value.toString().toLowerCase().includes(searchLower);
    }),
  );
}

export default searchInArray;
