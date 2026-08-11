import { render, screen } from '@testing-library/react';
import Card from './Card';

describe("Card Component", () => {
    it("renders title", () =>{
        render(<Card title="Student Card"/>);
        const card = screen.getByRole("heading",{ name: /student card/i});
        expect(card).toHaveTextContent("Student Card");
    });

    it("have exactly 2 buttons", () =>{
        render(<Card title="Student Card"/>);
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(2);
    });

    it("edit button exists?",()=>{
        render(<Card title="Student Card"/>);
        const editBtn = screen.getByRole("button",{ name: /edit/i});
        expect(editBtn).toBeInTheDocument();
    });

    it("delete button exists?",()=>{
        render(<Card title="Student Card"/>);
        const deleteBtn = screen.getByRole("button",{ name: /delete/i});
        expect(deleteBtn).toBeInTheDocument();
    });

    it("Is heading is h2?", () =>{
        render(<Card title="Student Card"/>);
        const heading = screen.getByRole("heading", { level : 2});
        expect(heading).toBeInTheDocument();
    })
})