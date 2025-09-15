// ✅ Rename the function to avoid name clash
function localShuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ✅ Export the function so it can be tested (if needed by other files too)
module.exports = localShuffle;

// ✅ Test cases using Jest
const { test, expect, describe } = require('@jest/globals');
const shuffle = require('./shuffle.test.js'); // Importing from this same file

describe("shuffle", () => {
  it("should shuffle an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle([...arr]);

    // Note: This can rarely fail if shuffle returns same order
    expect(shuffledArr).not.toEqual(arr);
    expect(shuffledArr.sort()).toEqual(arr.slice().sort());
  });

  it("should maintain the same array length", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle([...arr]);
    expect(shuffledArr.length).toEqual(arr.length);
  });
});
