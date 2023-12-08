import fetchWriters from "@/app/services/api/writers";
import fetchBooks from "@/app/services/api/books";
import buildTableData from "@/app/utils/buildTableData";
import WritersTable from "@/app/components/WritersTable";
import BooksTable from "@/app/components/BooksTable";

export default async function Home() {
  const [writers, books] = await Promise.all([fetchWriters(), fetchBooks()]);
  const { tableWriters, tableBooks } = buildTableData(writers, books);

  return (
    <main className="flex min-h-screen items-start justify-between p-12 space-x-4">
      <div className="flex-1">
        <WritersTable tableWriters={tableWriters} />
      </div>
      <div className="flex-1">
        <BooksTable tableBooks={tableBooks} />
      </div>
    </main>
  );
}
