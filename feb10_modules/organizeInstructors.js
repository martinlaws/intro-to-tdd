const organizeInstructors = instructorsArray => {
  const result = {};

  for (let instructor of instructorsArray) {
    const { name, course } = instructor;
    if (result[course]) {
      result[course].push(name);
    } else {
      result[course] = [name];
    }
  }

  return result;
};

module.exports = organizeInstructors;
