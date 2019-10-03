import uuid from "uuid";

export function sum(...numbers) {
  const enoughArgs = numbers.length > 1;
  if (!enoughArgs) return null;

  const somethingNotNumber = numbers.some(number => {
    return typeof number !== "number";
  });

  if (somethingNotNumber) {
    throw new Error("I want numbers");
  }

  return numbers.reduce((acc, currentNumber) => {
    return acc + currentNumber;
  });
}

export function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("numbers required");
  }
  return a * b;
}

export function personMaker(name, age) {
  if (typeof name !== "string" || typeof age !== "number") {
    throw new Error("Invalid name or age");
  }
  return {
    id: uuid(),
    name,
    age
  };
}

// BUILD YOUR OWN UTILITY FUNCTIONS AND TEST THEM OUT!

export function evenNumbers(a, b) {
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) return i;
    else return i;
  }
}
