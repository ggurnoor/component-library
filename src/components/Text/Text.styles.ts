import styled from "styled-components";

export const StyledText = styled.p<{ size: string; color: string }>`
  font-size: ${({ size }) =>
    size === "small" ? "12px" : size === "large" ? "20px" : "16px"};
  color: ${({ color }) => color};
  margin: 8px 0;
`;