import { Book, Nationality, TableBook, TableWriter, Writer } from "@/app/types";

const AUTHOR_NAME_FALLBACK = "Unknown";
const AUTHOR_NATIONALITY_FALLBACK = Nationality.American;

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
    let writerName = AUTHOR_NAME_FALLBACK;
    let writerNationality = AUTHOR_NATIONALITY_FALLBACK;
    if (book.author_id in writersMap) {
      const writer = writersMap[book.author_id];
      writerName = `${writer.first_name} ${writer.last_name}`;
      writerNationality = writer.nationality;
      bookCountByAuthor[book.author_id]++;
    }

    return {
      id: book.id,
      title: book.title,
      writerId: book.author_id,
      writerName,
      writerNationality,
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
