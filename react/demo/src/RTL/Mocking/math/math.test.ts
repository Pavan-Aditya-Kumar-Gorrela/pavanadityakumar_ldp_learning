import { math } from "./math";

describe("spyOn example", () => {

  it("should spy on add()", () => {

    const spy = jest.spyOn(math, "add");

    const result = math.add(10, 20);

    expect(result).toBe(30);

    expect(spy).toHaveBeenCalledTimes(1);

    expect(spy).toHaveBeenCalledWith(10, 20);
  });
  });

  describe("spyOn mockImplementation", () => {

  it("should replace add()", () => {

    const spy = jest.spyOn(math, "add");

    spy.mockImplementation(() => 100);

    const result = math.add(10, 20);

    expect(result).toBe(100);


  });

  });
