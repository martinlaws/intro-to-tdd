const chai = require("chai");
const assert = chai.assert;

const organizeInstructors = require("../feb10_modules/organizeInstructors");

const array1 = [
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
];

const array2 = [
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
];

const array1ExpectedOutput = {
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
};
const array2ExpectedOutput = {
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
};

describe("organizeInstructors", () => {
  it("should return an Object", () => {
    const result = organizeInstructors(array1);
    assert.typeOf(result, "object");
  });

  it("should return array1ExpectedOutput when given array1 as input", () => {
    const result = organizeInstructors(array1);
    assert.deepEqual(result, array1ExpectedOutput);
  });

  it("should return array2ExpectedOutput when given array2 as input", () => {
    const result = organizeInstructors(array2);
    assert.deepEqual(result, array2ExpectedOutput);
  });
});

// Output
// {
//   CourseName: [instructors]
// }
