const chai = require("chai");
const assert = chai.assert;

const repeatNumbers = require("../feb10_modules/repeatNumbers");

const input1 = [[1, 10]];
const input2 = [
  [1, 2],
  [2, 3]
];
const input3 = [
  [10, 4],
  [34, 6],
  [92, 2]
];

const expectedOutput1 = "1111111111";
const expectedOutput2 = "11, 222";
const expectedOutput3 = "10101010, 343434343434, 9292";

describe("repeatNumbers", () => {
  it("should return a string", () => {
    const result = repeatNumbers([[1, 2]]);
    assert.typeOf(result, "string");
  });
  it("should return expectedOutput1 when given input1", () => {
    const result = repeatNumbers(input1);
    assert.equal(result, expectedOutput1);
  });
  it("should return expectedOutput2 when given input2", () => {
    const result = repeatNumbers(input2);
    assert.equal(result, expectedOutput2);
  });
  it("should return expectedOutput3 when given input3", () => {
    const result = repeatNumbers(input3);
    assert.equal(result, expectedOutput3);
  });
});
