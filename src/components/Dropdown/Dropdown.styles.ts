import styled from "styled-components";

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export const StyledOption = styled.option`
  font-size: 16px;
`;
