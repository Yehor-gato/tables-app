import fetchWriters from "@/app/services/api/writers";
import fetchBooks from "@/app/services/api/books";
import buildTableData from "@/app/utils/buildTableData";
import Tables from "@/app/components/Tables";

export default async function Home() {
  const [writers, books] = await Promise.all([fetchWriters(), fetchBooks()]);
  const { tableWriters, tableBooks } = buildTableData(writers, books);

  return (
    <main className="flex min-h-screen p-12">
      <Tables writers={tableWriters} books={tableBooks} />
    </main>
  );
}
