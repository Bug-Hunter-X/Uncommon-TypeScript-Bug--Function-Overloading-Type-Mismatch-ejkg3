# Uncommon TypeScript Bug: Function Overloading Type Mismatch

This repository demonstrates a subtle bug in TypeScript related to function overloading. The bug arises from insufficient type checking in an overloaded function, leading to unexpected behavior when types are mismatched.

## Bug Description
The `overloadedAdd` function attempts to handle numbers and strings. However, it doesn't explicitly prevent or handle a situation where one input is a number and the other a string. This results in a value of `null` being returned instead of throwing a compile-time error.  This is different from typical type errors that are immediately apparent. 

## How to Reproduce
1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler (tsc).
3. Run the compiled JavaScript code.
4. Observe the unexpected `null` output. 

## Solution
The provided `bugSolution.ts` file demonstrates a corrected version. The solution involves strict type guarding, ensuring that both inputs are of the same type.  This approach would catch the type mismatch at compile time.