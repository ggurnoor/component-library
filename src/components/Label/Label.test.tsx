import { render, screen } from "@testing-library/react";
import Label from "./Label";

test("renders label with text", () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText("Test Label")).toBeVisible();
});

test("changes color when disabled", () => {
  render(<Label text="Disabled Label" disabled />);
  expect(screen.getByText("Disabled Label")).toHaveStyle("color: #aaa");
});
