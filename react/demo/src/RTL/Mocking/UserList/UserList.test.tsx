import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';


globalThis.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: async () => [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Jane Doe" },
  ],
});

describe("UserList Component", () => {
    afterEach(()=>{
        jest.clearAllMocks();
    });
    it("display loading intially",  () =>{
        render(<UserList/>);

        expect(screen.getByText("Loading…")).toBeInTheDocument();
    }); 

    it("display a list of users after fetching data", async() =>{
        render(<UserList/>);
        await waitFor(()=> expect(screen.getByText('John Smith')).toBeInTheDocument());
        await waitFor(()=> expect(screen.getByText('Jane Doe')).toBeInTheDocument());

        expect(screen.getByText('John Smith')).toBeInTheDocument();
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    }); 
})