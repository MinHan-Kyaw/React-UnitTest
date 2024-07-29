import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // (No action needed for this test)

  // Assert
  const helloWorldElement = screen.getByText("Hello World!");
  expect(helloWorldElement).toBeInTheDocument();
});