import { render, screen } from "@testing-library/react";
import Text from "./Text";

test("renders text component", () => {
  render(<Text content="Test Text" />);
  expect(screen.getByText("Test Text")).toBeVisible();
});

test("applies correct size styling", () => {
  render(<Text content="Large Text" size="large" />);
  expect(screen.getByText("Large Text")).toHaveStyle("font-size: 20px");
});
