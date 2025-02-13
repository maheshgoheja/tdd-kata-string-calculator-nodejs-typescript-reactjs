import { StringCalculator } from "./stringCalculator";

const calculator = new StringCalculator();
const result = calculator.add("//[**][%%]\n1**2%%3");
console.log(`Result: ${result}`); // Expected output: Result: 6
