import React from "react";
import { StyledTh, StyledTr } from "./Table.styles";

type TableHeaderProps = {
  headers: string[];
};

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <StyledTr>
      {headers.map((header, index) => (
        <StyledTh key={index}>{header}</StyledTh>
      ))}
    </StyledTr>
  );
};

export default TableHeader;
