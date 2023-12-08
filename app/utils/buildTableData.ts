import { Book, TableBook, TableWriter, Writer } from "@/app/types";

const AUTHOR_NAME_FALLBACK = "Unknown";

function buildTableData(
  writers: Writer[],
  books: Book[],
): { tableWriters: TableWriter[]; tableBooks: TableBook[] } {
  const writersMap: Record<number, Writer> = {};
  const bookCountByAuthor: Record<number, number> = {};

  for (let writer of writers) {
    writersMap[writer.id] = writer;
    bookCountByAuthor[writer.id] = 0;
  }

  const tableBooks: TableBook[] = books.map((book) => {
    let authorName = AUTHOR_NAME_FALLBACK;
    if (book.author_id in writersMap) {
      const writer = writersMap[book.author_id];
      authorName = `${writer.first_name} ${writer.last_name}`;
      bookCountByAuthor[book.author_id]++;
    }

    return {
      id: book.id,
      title: book.title,
      authorId: book.author_id,
      authorName,
      year: book.year,
    };
  });

  const tableWriters: TableWriter[] = writers.map((writer) => ({
    id: writer.id,
    name: `${writer.first_name} ${writer.last_name}`,
    nationality: writer.nationality,
    numberOfBooks: bookCountByAuthor[writer.id],
  }));

  return {
    tableBooks,
    tableWriters,
  };
}

export default buildTableData;
