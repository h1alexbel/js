import {immutable} from "../src/immutable.js";

describe('Test suite for immutable.js', () => {
  test('object is immutable', () => {
    expect(() =>
      immutable(
        {
          test: true,
          version: 0.55
        }
      ).version =  0.56
    ).toThrow(TypeError);
  });
});
