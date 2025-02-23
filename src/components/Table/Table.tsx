import React from "react";
import { TableProps } from "./Table.types";
import { StyledTable } from "./Table.styles";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";

const Table: React.FC<TableProps> = ({ headers, data, footer }) => {
  return (
    <StyledTable>
      <thead>
        <TableHeader headers={headers} />
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <TableFooter>{footer}</TableFooter>
        </tfoot>
      )}
    </StyledTable>
  );
};

export default Table;
