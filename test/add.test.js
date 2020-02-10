const chai = require("chai");
const assert = chai.assert;

const add = require("../feb10_modules/add");

describe("add", () => {
  it("should return a number", () => {
    const result = add(1, 2);
    assert.typeOf(result, "number");
  });

  it("should return the sum of num1 and num2", () => {
    const result = add(1, 2);
    assert.equal(result, 3);
  });
});
