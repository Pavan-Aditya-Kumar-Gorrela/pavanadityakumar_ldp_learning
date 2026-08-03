import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Input from './Input';

describe("Input Component", () =>{
    it("types value ", async ()=>{
        const user = userEvent.setup();
        render(<Input/>);

        await user.type(
            screen.getByPlaceholderText(/enter your name/i),
            "Aditya"
        );
        await user.clear(
            screen.getByPlaceholderText(/enter your name/i)
        );

        expect(screen.getByPlaceholderText(/enter your name/i)).toHaveValue("");
    });

    // it("file upload", async () =>{
    //     const user = userEvent.setup();
    //     render(<Input/>);
    //     const file = new File(["hello"],"hello.png",{ type: "image/png"});
    //     await user.upload(
    //         screen.getByRole("textbox",{ name: /file/i}),
    //         file
    //     );
    //     expect(screen.getByRole("textbox",{ name: /file/i})).toHaveValue("C:\\fakepath\\hello.png");
    // });
});