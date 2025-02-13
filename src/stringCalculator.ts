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
    return nums.reduce((sum, num) => sum + num, 0);
  }
}
