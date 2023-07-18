import {Multiplied} from "../src/multiplied.js";

describe("Test cases for Multiplied", () => {
  test("multiplied string in right format", () => {
    expect(
      new Multiplied(
        "12345678901234567890",
        "238970198210982190"
      ).value()
    ).toBe(
      "2950249334077165504737005057135879100"
    );
  });
  test("", () => {
    expect(
      new Multiplied(
        "11", "0"
      ).value()
    ).toBe("0");
  });
  test("", () => {
    expect(
      new Multiplied(
        "0",
        "11"
      ).value()
    ).toBe("0");
  });
});
