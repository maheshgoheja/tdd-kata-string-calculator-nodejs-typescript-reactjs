# **String Calculator TDD Kata**

This project implements a String Calculator based on the [String Calculator Kata](https://osherove.com/tdd-kata-1). It includes a NodeJS/TypeScript backend for the core calculation logic and a ReactJS frontend for interactive use. Developed using Test-Driven Development (TDD), this calculator is designed to add numbers from a string input, adhering to a specific set of rules for delimiters, negative numbers, and large numbers.

## **Features**

- **Empty String Handling:** Returns 0 when the input string is empty.

- **Single Numbers:** Returns the number itself if the input string contains only a single number.

- **Comma Delimited:** Calculates the sum of numbers separated by commas.

- **Newline Delimiter:** Supports new lines as delimiters in addition to commas.

- **Custom Delimiters:** Allows users to define custom delimiters at the beginning of the input string using the format `//[delimiter]\n[numbers]` or `//delimiter\n[numbers]`.

- **Delimiters of Any Length:** Handles custom delimiters of any length, for example, `//[***]\n1***2***3`.

- **Multiple Delimiters:** Supports multiple custom delimiters, such as `//[*][%]\n1*2%3`.

- **Negative Number Exception:** Throws an exception with a message listing all negative numbers if they are present in the input.

- **Ignore Numbers > 1000:** Numbers greater than 1000 are ignored in the sum calculation.

- **Handles Unknown Amounts:** The `Add` method can handle any number of inputs separated by valid delimiters.

<br>

![result](/assets/tdd_result.png)

---

## Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

- NodeJS and npm (Node Package Manager)
- TypeScript (Globally installed: `npm install -g typescript`)
- Git (Optional, for cloning the repository)

#### Installation

1. Clone the repository (if you have Git):

```bash
git clone <repository-url>
cd <repository>
```

2. Install Backend Dependencies:

```bash
npm install
```

#### Running the Backend (NodeJS/TypeScript)

1. Build TypeScript:

```bash
npm run build
```

This compiles the TypeScript code in the `src` directory to JavaScript files in the `dist` directory.

2. Run Tests:

```bash
npm test
```

Executes the Jest unit tests located in `src/__tests__`.

3. Start (Example):

You can create or modify `src/index.ts` to include example usage and run it:

```bash
npm start
```

This will run the compiled `dist/index.js` and output to the console.

---

## Usage

#### Backend Programmatically

You can import and use the StringCalculator class in your NodeJS/TypeScript projects:

> **TypeScript**

```typescript
import { StringCalculator } from "./dist/stringCalculator";
const calculator = new StringCalculator();
const result = calculator.add("//[*][%]\n1*2%3");
console.log(`Result: ${result}`); // Output: Result: 6
```

#### Testing

Unit tests are written using Jest for the backend logic. Run tests using:

```bash
npm test
```

This command runs all test files in the `src/__tests__` directory.

---

## Git Commits - TDD Steps

This project was developed using Test-Driven Development, with each step reflected in Git commits:

1. `feat: Setup NodeJS/TypeScript project with Jest`
2. `feat: Implement Step 1 - Empty string returns 0`
3. `feat: Implement Step 2 - Single number returns itself`
4. `feat: Implement Step 3 - Sum of two comma delimited numbers`
5. `test: Add test case for handling unknown amount of numbers in Add method`
6. `feat: Implement Step 4 - Handle new lines as delimiters`
7. `feat: Implement Step 5 - Handle different delimiters`
8. `feat: Implement Step 6 - Throw error for negative numbers`
9. `feat: Implement Step 7 - Ignore numbers greater than 1000`
10. `feat: Implement Step 8 & 9 - Handle delimiters of any length and multiple delimiters`
11. `feat: Implement Step 10 - Handling of multiple delimiters with length longer than one char`
12. `feat: Enhance delimiter handling to support multiple delimiters of varying lengths and refactor extraction logic`
