"use client";
import { FC, PropsWithChildren, useMemo, useState } from "react";
import { Nationality, TableBook, TableWriter } from "@/app/types";

import Input from "@/app/components/Input";
import useTableBooks from "@/app/hooks/useTableBooks";
import NationalitySelect from "@/app/components/NationalitySelect";
import useTableWriters from "@/app/hooks/useTableWriters";
import WritersTable from "@/app/components/WritersTable";
import BooksTable from "@/app/components/BooksTable";

type Props = { writers: TableWriter[]; books: TableBook[] };

const Tables: FC<Props> = ({ writers, books }) => {
  const [writersSearch, setWritersSearch] = useState("");
  const [booksSearch, setBooksSearch] = useState("");
  const [authorBookId, setAuthorBookId] = useState<number | null>(null);
  const [nationality, setNationality] = useState<Nationality | null>(null);

  const filterAuthor = useMemo(
    () => writers.find((writer) => writer.id === authorBookId),
    [authorBookId, writers],
  );

  const tableBooks = useTableBooks(
    books,
    booksSearch,
    authorBookId,
    nationality,
  );
  const tableWriters = useTableWriters(writers, writersSearch, nationality);

  const handleWriterClick = (writerId: number) => {
    setWritersSearch("");
    setAuthorBookId(writerId);
  };
  const clearWriterFilter = () => {
    setAuthorBookId(null);
  };

  return (
    <div className="flex w-full items-start gap-4">
      <TableWrapper>
        <ControlsWrapper>
          <Input
            value={writersSearch}
            placeholder="Search writers..."
            onChange={(e) => {
              setWritersSearch(e.target.value);
            }}
          />
          <NationalitySelect value={nationality} onChange={setNationality} />
        </ControlsWrapper>

        <WritersTable
          tableWriters={tableWriters}
          onNumberOfBooksClick={handleWriterClick}
        />
      </TableWrapper>
      <TableWrapper>
        <ControlsWrapper>
          <Input
            value={booksSearch}
            placeholder="Search books..."
            onChange={(e) => {
              setBooksSearch(e.target.value);
            }}
          />
          <NationalitySelect value={nationality} onChange={setNationality} />
        </ControlsWrapper>

        {!!filterAuthor && (
          <p>
            Author: {filterAuthor.name}{" "}
            <button
              className="text-blue-700 hover:opacity-50"
              onClick={clearWriterFilter}
            >
              Clear
            </button>
          </p>
        )}

        <BooksTable tableBooks={tableBooks} />
      </TableWrapper>
    </div>
  );
};

const TableWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-1 flex-col gap-2">{children}</div>
);

const ControlsWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex items-center gap-2">{children}</div>
);

export default Tables;
