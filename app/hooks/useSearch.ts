import { useEffect, useState } from "react";
import { SearchableData, TableBook } from "@/app/types";
import useDebounce from "@/app/hooks/useDebounce";
import searchInArray from "@/app/utils/searchInArray";

const DEBOUNCE_DELAY = 300;

const useSearch = <T extends SearchableData>(
  data: T[],
  searchQuery: string,
) => {
  const [displayedData, setDisplayedData] = useState<T[]>(data);
  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_DELAY);

  useEffect(() => {
    setDisplayedData(() => searchInArray(data, debouncedSearchQuery));
  }, [data, debouncedSearchQuery]);

  return { displayedData, setDisplayedData };
};

export default useSearch;
