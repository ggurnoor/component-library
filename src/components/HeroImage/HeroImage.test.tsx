import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

test("renders hero image with overlay text", () => {
  render(
    <HeroImage
      src="https://via.placeholder.com/1500x500"
      alt="Hero Image"
      overlayText="Welcome"
      overlayColor="rgba(0, 0, 0, 0.7)"
    />
  );
  expect(screen.getByText("Welcome")).toBeVisible();
});

test("hero image is disabled when the disabled prop is set", () => {
  render(
    <HeroImage
      src="https://via.placeholder.com/1500x500"
      alt="Hero Image"
      overlayText="Welcome"
      disabled={true}
    />
  );
  const image = screen.getByAltText("Hero Image");
  expect(image).toHaveStyle("filter: grayscale(100%)");
});
