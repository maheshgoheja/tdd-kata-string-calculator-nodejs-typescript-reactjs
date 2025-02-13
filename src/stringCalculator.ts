export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    let delimiters = /,|\n/;
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      const customDelimiter = numbers.substring(2, delimiterEndIndex);
      delimiters = new RegExp(`[${customDelimiter}]|\n`);
      numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const nums = numbers.split(delimiters).map(Number);

    const negativeNumbers = nums.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
    }

    const validNums = nums.filter((num) => num <= 1000);
    return validNums.reduce((sum, num) => sum + num, 0);
  }
}
