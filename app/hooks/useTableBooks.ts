import { Nationality, TableBook } from "@/app/types";
import { useEffect, useState } from "react";
import useDebounce from "@/app/hooks/useDebounce";
import searchInArray from "@/app/utils/searchInArray";

const DEBOUNCE_DELAY = 200;

const useTableBooks = (
  tableBooks: TableBook[],
  booksSearch: string,
  writerId: number | null,
  nationality: Nationality | null,
) => {
  const [books, setBooks] = useState<TableBook[]>(tableBooks);
  const debouncedSearchQuery = useDebounce(booksSearch, DEBOUNCE_DELAY);

  useEffect(() => {
    let newBooks = searchInArray(tableBooks, debouncedSearchQuery);

    if (writerId !== null || nationality !== null) {
      newBooks = newBooks.filter(
        (book) =>
          (!writerId || book.writerId === writerId) &&
          (!nationality || book.writerNationality === nationality),
      );
    }

    setBooks(newBooks);
  }, [tableBooks, debouncedSearchQuery, writerId, nationality]);

  return books;
};

export default useTableBooks;
