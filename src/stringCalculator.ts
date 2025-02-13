export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    const delimiters = /,|\n/;
    const nums = numbers.split(delimiters).map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
  }
}
