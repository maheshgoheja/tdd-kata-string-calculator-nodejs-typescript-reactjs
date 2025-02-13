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

  it("should handle an unknown amount of numbers", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2,3,4,5")).toBe(15);
    expect(calculator.add("1,2,3,4,5,6,7,8,9,10,11,12")).toBe(78);
  });
});
