import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event"
import Button from "./Button";


describe("Button Component", () =>{
    it("render with label", () =>{
        render(<Button label='Click me'/>);

        expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("should call onClick fn", async () =>{
        const user = userEvent.setup();
        const mockFn = jest.fn();
        render(<Button label='Click me' onClick={mockFn}/>)
        fireEvent.click(screen.getByText("Click me"));
        await user.click(screen.getByText("Click me"));
        expect(mockFn).toHaveBeenCalledTimes(2);
        
    })
})