import styled from "styled-components";

// Define the types for the props used by the StyledHeroImage component
export const StyledHeroImage = styled.div<{
  height?: string | number;
  disabled?: boolean;
  src: string;
  overlayColor?: string;  // Add overlayColor to the types
}>`
  position: relative;
  width: 100%;
  height: ${({ height }) => (height ? height : "500px")};
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  transition: filter 0.3s ease;

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
    background-color: ${({ overlayColor }) => overlayColor || "rgba(0, 0, 0, 0.5)"};
    padding: 10px;
    border-radius: 5px;
  }
`;
