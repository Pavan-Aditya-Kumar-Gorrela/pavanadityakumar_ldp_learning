import axios from "axios";
import getUsers from "./api";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.get.mockResolvedValue({
    data: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
    ],
});



test("should fetch users using getUsers function", async () => {
    const users = await getUsers();
    expect(users).toEqual([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
    ]);
});