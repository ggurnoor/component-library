import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders card with title and content", () => {
  render(<Card title="Test Card" content="This is a test card" />);
  expect(screen.getByText("Test Card")).toBeInTheDocument();
  expect(screen.getByText("This is a test card")).toBeInTheDocument();
});

test("renders card without image", () => {
  render(<Card title="Test Card" content="This is a test card" />);
  const image = screen.queryByAltText("Test Card");
  expect(image).not.toBeInTheDocument();
});
