import { render, screen } from "@testing-library/react";
import Img from "./img";

test("renders image with src and alt text", () => {
  render(<Img src="https://via.placeholder.com/300" alt="Test Image" />);
  const image = screen.getByAltText("Test Image");
  expect(image).toHaveAttribute("src", "https://via.placeholder.com/300");
});

test("image is disabled when the disabled prop is set", () => {
  render(<Img src="https://via.placeholder.com/300" alt="Test Image" disabled />);
  const image = screen.getByAltText("Test Image");
  expect(image).toHaveStyle("opacity: 0.5");
  expect(image).toHaveStyle("pointer-events: none");
});
