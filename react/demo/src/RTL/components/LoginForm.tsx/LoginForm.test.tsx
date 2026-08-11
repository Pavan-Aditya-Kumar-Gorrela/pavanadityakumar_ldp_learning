import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";


test("find login button", () => {
  render(<LoginForm />);

  expect(
    screen.getByRole("button", {
      name: /login/i,
    })
  ).toBeInTheDocument();
});


test("find username input", () => {
  render(<LoginForm />);

  expect(
    screen.getByLabelText("Username")
  ).toBeInTheDocument();
});

test("find placeholder", () => {
  render(<LoginForm />);

  expect(
    screen.getByPlaceholderText(
      "Enter username"
    )
  ).toBeInTheDocument();
});

test("find heading", () => {
  render(<LoginForm />);

  expect(
    screen.getByText("Login Page")
  ).toBeInTheDocument();
});



test("find image", () => {
  render(<LoginForm />);

  expect(
    screen.getByAltText(
      "Company Logo"
    )
  ).toBeInTheDocument();
});


test("find test id", () => {
  render(<LoginForm />);

  expect(
    screen.getByTestId(
      "container"
    )
  ).toBeInTheDocument();
});


