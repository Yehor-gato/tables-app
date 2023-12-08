import { Nationality, TableBook, TableWriter } from "@/app/types";
import { useEffect, useState } from "react";
import useDebounce from "@/app/hooks/useDebounce";
import searchInArray from "@/app/utils/searchInArray";

const DEBOUNCE_DELAY = 200;

const useTableWriters = (
  tableWriters: TableWriter[],
  writerSearch: string,
  nationality: Nationality | null,
) => {
  const [writers, setWriters] = useState<TableWriter[]>(tableWriters);
  const debouncedSearchQuery = useDebounce(writerSearch, DEBOUNCE_DELAY);

  useEffect(() => {
    let newWriters = searchInArray(tableWriters, debouncedSearchQuery);

    if (nationality !== null) {
      newWriters = newWriters.filter(
        (writer) => writer.nationality === nationality,
      );
    }

    setWriters(newWriters);
  }, [debouncedSearchQuery, nationality, tableWriters]);

  return writers;
};

export default useTableWriters;
