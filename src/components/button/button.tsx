import React, { useState } from "react";
import { ButtonProps } from "./button.types";
import { StyledButton } from "./button.styles";

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setClicked(true);
      if (onClick) onClick();
    }
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled} clicked={clicked}>
      {label}
    </StyledButton>
  );
};

export default Button;
