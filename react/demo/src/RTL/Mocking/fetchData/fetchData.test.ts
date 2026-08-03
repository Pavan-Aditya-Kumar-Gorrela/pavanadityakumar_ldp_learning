import { fetchData } from "./fetchData";

jest.mock('./fetchData');

const mockedFetchData = fetchData as jest.MockedFunction<typeof fetchData>;
afterEach(() => {
        jest.clearAllMocks();
    });

test("should return mock data", async()=>{
    

    mockedFetchData.mockResolvedValue({
        data: 'mockData'
    });
    const data = await fetchData();
    expect(data).toEqual({data:'mockData'})

})