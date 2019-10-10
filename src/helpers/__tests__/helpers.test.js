import * as helpers from "../helpers";

jest.mock("uuid", () => {
  return () => "123";
});

describe("sum", () => {
  it("returns null if fed no arguments", () => {
    expect(helpers.sum()).toBe(null);
  });
  it("returns null if fed a single argument", () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it("adds positive number correctly", () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it("adds negative number correctly", () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it("throws if fed something which is not a number", () => {
    expect(() => helpers.sum("1", "2")).toThrow();
  });
  it("can add three positive numbers", () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe("multiply", () => {
  // write tests! <================================================
  it("should throw errror if fed with invalid parameters", () => {
    expect(() => helpers.multiply("a", "1")).toThrow();
  });
  it("should return the multiplication of two numbers", () => {
    expect(helpers.multiply(3, 7)).toBe(21);
  });
});

describe("personMaker", () => {
  it("makes a person with name and age", () => {
    expect(helpers.personMaker("peter", 4)).toMatchObject({
      id: "123",
      name: "peter",
      age: 4
    });
  });

  it("should throw an error if fed with invalid parameters", () => {
    expect(() => helpers.personMaker(5, 8)).toThrow();
  });

  // write more tests! <===========================================
});

describe("evenNumbers", () => {
  it("should print the even numbers between two numbers", () => {
    expect(helpers.evenNumbers(2, 16)).toBe(2, 4, 6, 8, 10, 12, 16);
  });
});
