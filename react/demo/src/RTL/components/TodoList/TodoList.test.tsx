import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";

describe("TodoList", () => {

  test("renders todos", () => {
    render(<TodoList />);

    expect(screen.getByTestId("todo-1")).toBeInTheDocument();
    expect(screen.getByTestId("todo-2")).toBeInTheDocument();

    expect(screen.getByTestId("title-1"))
      .toHaveTextContent("Learn RTL");

    expect(screen.getByTestId("title-2"))
      .toHaveTextContent("Learn Jest");
  });

  test("toggles todo status", async () => {
    const user = userEvent.setup();

    render(<TodoList />);

    expect(screen.getByTestId("status-1"))
      .toHaveTextContent("Pending");

    await user.click(
      screen.getByTestId("toggle-1")
    );

    expect(screen.getByTestId("status-1"))
      .toHaveTextContent("Completed");
  });

  test("deletes todo", async () => {
    const user = userEvent.setup();

    render(<TodoList />);

    expect(screen.getByTestId("todo-1"))
      .toBeInTheDocument();

    await user.click(
      screen.getByTestId("delete-1")
    );

    expect(screen.queryByTestId("todo-1"))
      .not.toBeInTheDocument();
  });

});