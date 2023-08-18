import {union} from "../src/union.js";

describe("Test suite for intersection.js", () => {
  test("intersection in right format", () => {
    expect(
      union(
        [1, 2, 3, 3],
        [3, 4, 5]
      )
    ).toEqual(
      [1, 2, 3, 4, 5]
    );
  });
});
