const repeatNumbers = inputArray => {
  const results = [];

  for (let subArray of inputArray) {
    // const [number, repeatNumber] = subArray;
    const number = subArray[0];
    const repeatNumber = subArray[1];

    results.push(`${number}`.repeat(repeatNumber));
  }

  return results.join(", ");
};

module.exports = repeatNumbers;
