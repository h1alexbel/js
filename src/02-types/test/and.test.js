import {And} from "../src/and.js";

describe("Test suite for And.js", () => {
  test("returns true if both true", () => {
    expect(
      new And(true, true)
        .value()
    ).toBe(true);
  });
  test("returns false if some false", () => {
    expect(
      new And(true, false)
        .value()
    ).toBe(false);
  });
  test("returns false if all false", () => {
    expect(
      new And(false, false)
        .value()
    ).toBe(false);
  });
});
