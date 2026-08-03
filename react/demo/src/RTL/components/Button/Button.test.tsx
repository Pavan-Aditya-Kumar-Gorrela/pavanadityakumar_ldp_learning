import { render, screen} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () =>{
    it("renders text", () =>{
        render(<Button label="Click me"/>);

        expect(
            screen.getByRole("button",{ name: /click me/i})
        ).toBeInTheDocument();
    });

    it("checking a button", () =>{
        render(<Button label="Login"/>);
        const btn =  screen.getByRole("button",{ name: /login/i});
        expect(
           btn
        ).toBeVisible();
        expect(
           btn
        ).toBeEnabled();
        expect(
           btn
        ).toHaveTextContent("Login");
    });

    it("calls click handler", async () => {
        const user = userEvent.setup();
        const handleClick = jest.fn();
        render(<Button label="Click me" onClick={handleClick} />);

        await user.click(
            screen.getByRole("button",{ name: /click me/i})
        );

        expect(handleClick).toHaveBeenCalled();
    })

    it("testing queryByRole", () =>{
        render(<Button label="Click me"/>);
        const btn = screen.queryByRole("heading",{ name: /click me/i});
        expect(btn).toBe(null);
    })
});