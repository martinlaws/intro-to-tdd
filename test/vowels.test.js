const chai = require("chai");
const assert = chai.assert;

const countVowels = require("../feb10_modules/vowels");

describe("countVowels", () => {
  it("should return a number", () => {
    const result = countVowels("orange");
    assert.typeOf(result, "number");
  });
  it("should return 3 when given 'orange' as input", () => {
    const result = countVowels("orange");
    assert.equal(result, 3);
  });
  it("should return 5 when given 'lighthouse labs' as input", () => {
    const result = countVowels("lighthouse labs");
    assert.equal(result, 5);
  });
  it("should return 5 when given 'aeiou' as input", () => {
    const result = countVowels("aeiou");
    assert.equal(result, 5);
  });
});
