import React from "react";
import { StyledTr } from "./Table.styles";

type TableRowProps = {
  children: React.ReactNode;
};

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledTr>{children}</StyledTr>;
};

export default TableRow;
