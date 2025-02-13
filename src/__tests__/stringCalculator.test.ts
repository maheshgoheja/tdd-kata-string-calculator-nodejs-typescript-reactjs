import { StringCalculator } from "../stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    const Calculator = new StringCalculator();
    expect(Calculator.add("")).toBe(0);
  });

  it("should return the number itself if it is a single number", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("5")).toBe(5);
  });

  it("should return the sum of two numbers when comma delimited", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2")).toBe(3);
    expect(calculator.add("5,5")).toBe(10);
  });
});
