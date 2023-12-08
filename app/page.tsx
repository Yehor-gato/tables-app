import fetchWriters from "@/app/services/api/writers";
import fetchBooks from "@/app/services/api/books";
import buildTableData from "@/app/utils/buildTableData";

export default async function Home() {
  const [writers, books] = await Promise.all([fetchWriters(), fetchBooks()]);
  const { tableWriters, tableBooks } = buildTableData(writers, books);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      App
    </main>
  );
}
