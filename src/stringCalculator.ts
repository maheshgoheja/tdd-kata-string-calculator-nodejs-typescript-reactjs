export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    const { delimitersRegex, numberString } = this.extractDelimiters(numbers);
    const nums = this.parseNumbers(numberString, delimitersRegex);

    this.handleNegativeNumbers(nums);

    const validNums = this.filterOutLargeNumbers(nums);
    return this.calculateSum(validNums);
  }

  private extractDelimiters(numbers: string): {
    delimitersRegex: RegExp;
    numberString: string;
  } {
    let delimitersRegex: RegExp = /,|\n/; // Default delimiters
    let numberString = numbers;

    if (numbers.startsWith("//")) {
      const delimiterSectionEnd = numbers.indexOf("\n");
      if (delimiterSectionEnd === -1) {
        return { delimitersRegex, numberString: "" }; // Handle invalid format
      }

      let delimiterStr = numbers.substring(2, delimiterSectionEnd);
      numberString = numbers.substring(delimiterSectionEnd + 1);

      if (delimiterStr.startsWith("[") && delimiterStr.endsWith("]")) {
        // Step 8 & 9 & 10: Multiple delimiters of any length: // [delim1][delim2]...\n
        const customDelimiters = delimiterStr.slice(1, -1).split("][");
        const escapedDelimiters = customDelimiters.map((delimiter) =>
          this.escapeRegExp(delimiter)
        );
        delimitersRegex = new RegExp(escapedDelimiters.join("|") + "|\n");
      } else if (delimiterStr.includes("[")) {
        // Correctly handle multiple delimiters of any length like: //[*1*][%]\n (Step 10 - enhanced)
        const customDelimitersMatch = Array.from(
          delimiterStr.matchAll(/\[(.*?)\]/g)
        );
        if (customDelimitersMatch && customDelimitersMatch.length > 0) {
          const customDelimiters = customDelimitersMatch.map(
            (match) => match[1]
          );
          const escapedDelimiters = customDelimiters.map((delimiter) =>
            this.escapeRegExp(delimiter)
          );
          delimitersRegex = new RegExp(escapedDelimiters.join("|") + "|\n");
        } else {
          // Single delimiter of any length or character: // delimiter\n (Step 8 & 9)
          const escapedDelimiter = this.escapeRegExp(delimiterStr);
          delimitersRegex = new RegExp(escapedDelimiter + "|\n");
        }
      } else {
        // Single character delimiter (Step 5)
        const escapedDelimiter = this.escapeRegExp(delimiterStr);
        delimitersRegex = new RegExp(`${escapedDelimiter}|\n`);
      }
    }
    return { delimitersRegex, numberString };
  }

  private parseNumbers(
    numberString: string,
    delimitersRegex: RegExp
  ): number[] {
    return numberString.split(delimitersRegex).map(Number);
  }

  private handleNegativeNumbers(nums: number[]): void {
    const negativeNumbers = nums.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
    }
  }

  private filterOutLargeNumbers(nums: number[]): number[] {
    return nums.filter((num) => num <= 1000);
  }

  private calculateSum(validNums: number[]): number {
    return validNums.reduce((sum, num) => sum + num, 0);
  }

  private escapeRegExp(string: string): string {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
}
