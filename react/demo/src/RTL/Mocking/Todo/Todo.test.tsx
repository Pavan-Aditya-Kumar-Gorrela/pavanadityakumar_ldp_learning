import { render , screen , cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

beforeAll(()=>{
    console.log("Download Mock data");
})

afterAll(() => {
    console.log("Destoy mock server")
})

beforeEach(()=>{
    render(<Todo/>);
})

afterEach(()=>{
    cleanup();
})

describe("Todo Component", () => {

  test("should render heading", () => {
    expect(
      screen.getByText("Todo List")
    ).toBeInTheDocument();
  });

  test("should display initial todos", () => {

    expect(
      screen.getByText("Learn React")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Learn Testing")
    ).toBeInTheDocument();

  });

  test("should mark todo completed", async () => {

    const checkbox = screen.getAllByRole("checkbox")[0];

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();

  });

  test("should keep tests isolated", () => {

    const checkbox = screen.getAllByRole("checkbox")[0];

    expect(checkbox).not.toBeChecked();

  });

});