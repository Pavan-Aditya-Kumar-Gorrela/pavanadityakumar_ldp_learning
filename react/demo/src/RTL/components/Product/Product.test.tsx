import { render, screen } from "@testing-library/react";
import Products from "./Product";

test("renders all products", () => {
  render(<Products />);

  const cards = screen.getAllByTestId("product-card");

  expect(cards).toHaveLength(3);

  expect(cards[0]).toHaveTextContent("Laptop");
  expect(cards[1]).toHaveTextContent("Mouse");
  expect(cards[2]).toHaveTextContent("Keyboard");
});