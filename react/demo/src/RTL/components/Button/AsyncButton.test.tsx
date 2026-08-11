import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AsyncButton from "./AsyncButton";

test("findByRole example", async () => {
  render(<AsyncButton />);
  screen.debug();
  await new Promise((resolve) => setTimeout(resolve, 1500));

  screen.debug(); 

  const button = await screen.findByText("Click me");

  expect(button).toBeInTheDocument();
});