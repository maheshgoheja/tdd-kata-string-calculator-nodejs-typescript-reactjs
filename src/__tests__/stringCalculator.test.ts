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
    expect(calculator.add("10\n20,30,40\n50,60")).toBe(210);
  });

  it("should handle new lines as delimiters", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1\n2")).toBe(3);
    expect(calculator.add("1,2\n3")).toBe(6);
  });

  it("should handle different delimiters defined at the start", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//$\n1$2$3")).toBe(6);
  });

  it("should throw an error for negative numbers", () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("-1,2")).toThrow("Negatives not allowed: -1");
    expect(() => calculator.add("2,-4,3,-5")).toThrow(
      "Negatives not allowed: -4,-5"
    );
  });

  it("should ignore numbers greater than 1000", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1001,2")).toBe(2);
    expect(calculator.add("2,1005,3")).toBe(5);
  });

  it("should handle delimiters of any length", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });

  it("should handle multiple delimiters", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
    expect(calculator.add("//[**][%%]\n1**2%%3")).toBe(6);
  });

  it("should handle multiple delimiters with length longer than one char", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//[**][%%]\n1**2%%3")).toBe(6);
    expect(calculator.add("//[abc][def][ghi]\n1abc2def3ghi4")).toBe(10);
    expect(calculator.add("//[--][;;;]\n1--2;;;3")).toBe(6);
  });
});
