import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";

test("renders radio button with label", () => {
  render(<RadioButton label="Test Radio" name="group1" value="test" onChange={() => {}} />);
  expect(screen.getByLabelText("Test Radio")).toBeVisible();
});

test("clicking on the radio button changes checked state", () => {
  const handleChange = jest.fn();
  render(
    <RadioButton label="Test Radio" name="group1" value="test" checked={false} onChange={handleChange} />
  );
  const radioButton = screen.getByLabelText("Test Radio");
  fireEvent.click(radioButton);
  expect(handleChange).toHaveBeenCalledWith("test");
});

test("radio button is disabled when the disabled prop is set", () => {
  render(
    <RadioButton label="Disabled Radio" name="group1" value="disabled" checked={false} onChange={() => {}} disabled />
  );
  expect(screen.getByLabelText("Disabled Radio")).toBeDisabled();
});
