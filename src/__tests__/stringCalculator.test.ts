import { StringCalculator } from "../stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    const Calculator = new StringCalculator();
    expect(Calculator.add("")).toBe(0);
  });
});
