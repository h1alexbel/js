import {Sum} from "../src/sum.js";

test("sum in right format", () => {
  expect(
    new Sum(
      "12345678901234567890",
      "238970198210982190"
    ).value()
  ).toBe(
    "12584649099445550080"
  );
});
