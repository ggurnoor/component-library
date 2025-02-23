import { render, screen } from "@testing-library/react";
import Table from "./Table";

test("renders table with headers", () => {
  render(<Table headers={["Name", "Age"]} data={[["John", "25"]]} />);
  expect(screen.getByText("Name")).toBeVisible();
  expect(screen.getByText("Age")).toBeVisible();
});

test("renders table with data", () => {
  render(<Table headers={["Name"]} data={[["John"]]} />);
  expect(screen.getByText("John")).toBeVisible();
});

test("renders table footer", () => {
  render(<Table headers={["Name"]} data={[["John"]]} footer="Footer Text" />);
  expect(screen.getByText("Footer Text")).toBeVisible();
});
