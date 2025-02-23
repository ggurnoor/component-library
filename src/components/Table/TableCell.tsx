import React from "react";
import { StyledTd } from "./Table.styles";

type TableCellProps = {
  children: React.ReactNode;
};

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <StyledTd>{children}</StyledTd>;
};

export default TableCell;
