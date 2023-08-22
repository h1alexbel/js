import {intersection} from "../src/intersection.js";

describe("Test suite for intersection.js", () => {
  test("intersection in right format", () => {
    expect(
      intersection(
        [1, 2, 3, 4, 5],
        [3, 4, 5, 6, 7]
      )
    ).toEqual(
      [3, 4, 5]
    );
  });
});
