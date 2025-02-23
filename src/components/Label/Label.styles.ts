import styled from "styled-components";

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 16px;
  font-weight: bold;
  color: ${({ disabled }) => (disabled ? "#aaa" : "#333")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ disabled }) => (disabled ? "#aaa" : "#000")};
  }
`;
