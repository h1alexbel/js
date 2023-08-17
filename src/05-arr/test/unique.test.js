import {unique} from "../src/unique.js";

describe('Test suite for unique.js', () => {
  test('contains only unique', () => {
    expect(
      unique([1, 2, 3, 4, 4, 5])
    ).toEqual([1, 2, 3, 4, 5]);
  });
  test('contains the same elements', () => {
    expect(
      unique([1, 2, 3, 4, 5])
    ).toEqual([1, 2, 3, 4, 5]);
  });
});
