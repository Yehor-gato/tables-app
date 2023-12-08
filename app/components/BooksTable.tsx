import { FC } from "react";
import { TableBook } from "@/app/types";
import { Table } from "rsuite-table";

type Props = {
  tableBooks: TableBook[];
};

const BooksTable: FC<Props> = ({ tableBooks }) => {
  return (
    <Table<TableBook, string>
      data={tableBooks}
      autoHeight
      cellBordered
      bordered
      virtualized
      hover={false}
    >
      {({ Column, HeaderCell, Cell }) => (
        <>
          <Column>
            <HeaderCell>Id</HeaderCell>
            <Cell>{(row) => row.id}</Cell>
          </Column>
          <Column flexGrow={2}>
            <HeaderCell>Title</HeaderCell>
            <Cell>{(row) => row.title}</Cell>
          </Column>
          <Column flexGrow={2}>
            <HeaderCell>Author</HeaderCell>
            <Cell>{(row) => row.writerName}</Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Year of Publication</HeaderCell>
            <Cell>{(row) => row.year}</Cell>
          </Column>
        </>
      )}
    </Table>
  );
};

export default BooksTable;
