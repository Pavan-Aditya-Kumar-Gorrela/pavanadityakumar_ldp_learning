export interface User {
    id: number;
    name: string;
    email: string;
}

export let users: User[] = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com"
    },
    {
        id: 2,
        name: "Alice",
        email: "alice@gmail.com"
    },
    {
        id: 3,
        name: "Bob",
        email: "bob@gmail.com"
    }
];