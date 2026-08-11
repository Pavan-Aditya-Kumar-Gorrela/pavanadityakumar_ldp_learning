import formatNumber from "./formatNumber";

describe("formatNumber utility function", () => {
    it("formats number with two decimal places", () => {
        const formattedValue = formatNumber(1234.5);
        expect(formattedValue).toBe("1,234.50");
    });

    it("formats number with no decimal places", () => {
        const formattedValue = formatNumber(1000);
        expect(formattedValue).toBe("1,000.00");
    });
})