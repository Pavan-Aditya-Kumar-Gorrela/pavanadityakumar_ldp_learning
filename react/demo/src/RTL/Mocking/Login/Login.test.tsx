import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

test("navigates to dashboard", async () => {
  const user = userEvent.setup();

  render(<Login />);

  await user.click(
    screen.getByRole("button", {
      name: /login/i,
    })
  );

  expect(mockNavigate).toHaveBeenCalledTimes(1);

  expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
});