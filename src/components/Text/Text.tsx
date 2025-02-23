import React from "react";
import { TextProps } from "./Text.types";
import { StyledText } from "./Text.styles";

const Text: React.FC<TextProps> = ({ content, size = "medium", color = "#333" }) => {
  return <StyledText size={size} color={color}>{content}</StyledText>;
};

export default Text;
