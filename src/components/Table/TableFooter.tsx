import React from "react";
import { StyledTd, StyledTr } from "./Table.styles";

type TableFooterProps = {
  children: React.ReactNode;
};

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return (
    <StyledTr>
      <StyledTd colSpan={100}>{children}</StyledTd>
    </StyledTr>
  );
};

export default TableFooter;
