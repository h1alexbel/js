import {chunk} from "../src/chunk.js";

describe('Test suite for chunk.js', () => {
  test('reads chunked in right format', () => {
    expect(
      chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
    ).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });
  test('handles not balanced', () => {
    expect(
      chunk([1, 2, 3, 4, 5], 2)
    ).toEqual([[1, 2], [3, 4], [5]]);
  });
});
