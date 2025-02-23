import React, { useState } from "react";
import { DropdownProps } from "./Dropdown.types";
import { StyledSelect, StyledOption, StyledLabel } from "./Dropdown.styles";

const Dropdown: React.FC<DropdownProps> = ({ label, options, onChange, disabled }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect value={selectedValue} onChange={handleChange} disabled={disabled}>
        <StyledOption value="" disabled hidden>
          Select an option
        </StyledOption>
        {options.map((option, index) => (
          <StyledOption key={index} value={option}>
            {option}
          </StyledOption>
        ))}
      </StyledSelect>
    </div>
  );
};

export default Dropdown;
