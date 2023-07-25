import {Or} from "../src/or.js";

describe("Test suite for Or.js", () => {
  test("returns true if both true", () => {
    expect(
      new Or(true, true)
        .value()
    ).toBe(true);
  });
  test("returns false if some false", () => {
    expect(
      new Or(true, false)
        .value()
    ).toBe(true);
  });
  test("returns false if all false", () => {
    expect(
      new Or(false, false)
        .value()
    ).toBe(false);
  });
});
