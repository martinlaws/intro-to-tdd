const chai = require("chai");
const assert = chai.assert;

const subtract = require("../feb10_modules/subtract");

describe("subtract", () => {
  it("should return a Number", () => {
    const result = subtract(5, 2);
    assert.typeOf(result, "number");
  });

  it("should return num1 - num2", () => {
    const result = subtract(5, 2);
    assert.equal(result, 5 - 2);
  });
});
