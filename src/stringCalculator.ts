export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    let delimitersRegex = /,|\n/;
    if (numbers.startsWith("//")) {
      let delimiterStr = numbers.substring(2, numbers.indexOf("\n"));
      numbers = numbers.substring(numbers.indexOf("\n") + 1);

      if (delimiterStr.startsWith("[") && delimiterStr.endsWith("]")) {
        const customDelimiters = delimiterStr.slice(1, -1).split("][");
        // Escape special regex chars
        const regexDelimiters = customDelimiters
          .map((delimiter) =>
            delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
          )
          .join("|");

        delimitersRegex = new RegExp(`[${regexDelimiters}]|\n`);
      } else if (delimiterStr.includes("[")) {
        // Multiple delimiters of any length
        const customDelimitersMatch = delimiterStr.matchAll(/\[(.*?)\]/g);
        if (customDelimitersMatch) {
          const customDelimiters = Array.from(
            customDelimitersMatch,
            (match) => match[1]
          );
          const regexDelimiters = customDelimiters
            .map((delimiter) =>
              delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            )
            .join("|");
          delimitersRegex = new RegExp(`${regexDelimiters}|\n`);
        } else {
          // Single delimiter of any length
          delimitersRegex = new RegExp(`[${delimiterStr}]|\n`);
        }
      } else {
        // Single character delimiter
        delimitersRegex = new RegExp(`[${delimiterStr}]|\n`);
      }
    }

    const nums = numbers.split(delimitersRegex).map(Number);

    const negativeNumbers = nums.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
    }

    const validNums = nums.filter((num) => num <= 1000);
    return validNums.reduce((sum, num) => sum + num, 0);
  }
}
