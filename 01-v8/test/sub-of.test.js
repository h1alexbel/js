import {SubOf} from "../src/sub-of.js";

test("subtract string in right format", () => {
  expect(
    new SubOf(
      "12345678901234567890",
      "238970198210982190"
    ).value()
  ).toBe(
    "12106708703023585700"
  );
});
