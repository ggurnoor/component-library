import React from "react";
import { RadioButtonProps } from "./RadioButton.types";
import { StyledRadioButton, StyledLabel } from "./RadioButton.styles";

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange, disabled }) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      <StyledRadioButton
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <StyledLabel>{label}</StyledLabel>
    </div>
  );
};

export default RadioButton;
