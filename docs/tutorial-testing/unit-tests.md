---
sidebar_position: 1
---

# Unit Tests

Unit testing is a fundamental aspect of ensuring the quality and reliability of your dApp's TypeScript code. In your React dApp project, Jest is already configured to handle unit testing for pure TypeScript files. This allows you to write tests to verify the correctness of your functions, classes, and utilities.

## Writing Unit Tests

To create unit tests for your TypeScript code, follow these steps:

1. **Folder Structure:** Place your test files alongside the code they are testing, typically in the same directory with a `.test.ts` or `.spec.ts` file extension.

2. **Writing Tests:** Write test cases using Jest's testing framework. You can use `describe` to group related tests and `it` to define individual test cases.

Example:

```typescript
// src/utils/math.ts
export function add(a: number, b: number): number {
  return a + b;
}
// src/utils/math.test.ts
import { add } from "./math";

describe("add function", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should handle negative numbers", () => {
    expect(add(-1, 1)).toBe(0);
  });
});
```

**Running Tests**: Execute your tests using the following command:

```bash
npm run test
```

Jest will automatically discover and run your test files, providing feedback on test success or failure.

## Benefits of Unit Testing

Unit testing with Jest offers several benefits for your dApp development:

- Code Reliability: Ensure that your functions and utilities perform as expected, reducing the risk of functional bugs.
- Regression Testing: Detect regressions early to prevent the introduction of new issues while making code changes.
- Documentation: Unit tests serve as documentation, showcasing how functions and classes should be used.
- Improved Collaboration: Tests help developers understand code behavior, facilitating collaboration within your development team.

By incorporating unit testing into your dApp development workflow, you can increase code reliability and maintainability, leading to a more robust and dependable application.
