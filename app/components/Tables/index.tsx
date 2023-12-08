"use client";
import { FC, PropsWithChildren, useState } from "react";
import { TableBook, TableWriter } from "@/app/types";

import WritersTable from "./WritersTable";
import BooksTable from "./BooksTable";
import Input from "@/app/components/Input";
import useSearch from "@/app/hooks/useSearch";

type Props = { tableWriters: TableWriter[]; tableBooks: TableBook[] };

const Tables: FC<Props> = ({ tableWriters, tableBooks }) => {
  const [writersSearch, setWritersSearch] = useState("");
  const { displayedData: writers } = useSearch(tableWriters, writersSearch);

  const [booksSearch, setBooksSearch] = useState("");
  const { displayedData: books } = useSearch(tableBooks, booksSearch);

  return (
    <div className="flex w-full gap-4 items-start">
      <TableWrapper>
        <Input
          value={writersSearch}
          placeholder="Search writers..."
          onChange={(e) => {
            setWritersSearch(e.target.value);
          }}
        />

        <WritersTable tableWriters={writers} />
      </TableWrapper>
      <TableWrapper>
        <Input
          placeholder="Search books..."
          onChange={(e) => {
            setBooksSearch(e.target.value);
          }}
        />

        <BooksTable tableBooks={books} />
      </TableWrapper>
    </div>
  );
};

const TableWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-1 flex-col gap-2">{children}</div>
);

export default Tables;
