import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

test("renders dropdown with label", () => {
  render(<Dropdown label="Test Dropdown" options={["Option 1", "Option 2"]} />);
  expect(screen.getByText("Test Dropdown")).toBeVisible();
});

test("selecting an option updates the dropdown", () => {
  render(<Dropdown options={["Option 1", "Option 2"]} />);
  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "Option 1" } });
  expect(select).toHaveValue("Option 1");
});

test("dropdown is disabled when the disabled prop is set", () => {
  render(<Dropdown options={["Option 1", "Option 2"]} disabled />);
  expect(screen.getByRole("combobox")).toBeDisabled();
});
