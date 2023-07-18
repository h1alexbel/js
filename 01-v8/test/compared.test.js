import {Compared} from "../src/compared.js";

describe("Test Cases for Compared.js", () => {
    test("compared result in right format", () => {
      expect(
        new Compared("1", "2")
          .value()
      ).toBe(-1);
    });
    test("compared in right format when diff digit levels", () => {
      expect(
        new Compared("123", "12")
          .value()
      ).toBe(1);
    });
    test("compared equal values in right format", () => {
      expect(
        new Compared("123", "123").value()
      ).toBe(0);
    });
  }
);
