import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);

    // Act
    // (No action needed for this test)

    // Assert
    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
