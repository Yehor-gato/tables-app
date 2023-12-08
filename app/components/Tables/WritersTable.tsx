import { FC } from "react";
import { Table } from "rsuite-table";
import { TableWriter } from "@/app/types";

type Props = {
  tableWriters: TableWriter[];
  onNumberOfBooksClick: (writerId: number) => void;
};

const WritersTable: FC<Props> = ({ tableWriters, onNumberOfBooksClick }) => {
  return (
    <Table<TableWriter, string>
      data={tableWriters}
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
            <HeaderCell>Name</HeaderCell>
            <Cell>{(row) => row.name}</Cell>
          </Column>
          <Column flexGrow={2}>
            <HeaderCell>Nationality</HeaderCell>
            <Cell>{(row) => row.nationality}</Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Number of Books</HeaderCell>
            <Cell>
              {(row) => (
                <div
                  onClick={() => onNumberOfBooksClick(row.id)}
                  className="h-wull w-full cursor-pointer underline hover:opacity-50"
                >
                  {row.numberOfBooks}
                </div>
              )}
            </Cell>
          </Column>
        </>
      )}
    </Table>
  );
};

export default WritersTable;
