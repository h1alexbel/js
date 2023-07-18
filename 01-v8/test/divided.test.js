import {Divided} from "../src/divided.js";

describe("Test cases for Divided.js", () => {
  test("divided in right format", () => {
    expect(
      new Divided(
        "55", "11"
      ).value()
    ).toBe("5");
  });
  test("divided ", () => {
    expect(
      new Divided(
        "55",
        "10"
      ).value()
    ).toBe("5");
  });
  test("division of zero in right format", () => {
    expect(
      new Divided(
        "0",
        "1"
      ).value()
    ).toBe("0");
  });
});
