import React from "react";
import { LabelProps } from "./Label.types";
import { StyledLabel } from "./Label.styles";

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;
