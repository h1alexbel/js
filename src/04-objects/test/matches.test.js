import {matches} from "../src/matches.js";

describe('Test suite for matches.js', () => {
  test('object matches schema', () => {
    const schema = {
      timestamp: Number,
      test: Boolean,
      version: String,
      module: {
        id: Number,
        name: String,
      }
    };
    const object = {
      timestamp: 1691485356,
      test: true,
      version: "0.55.1",
      module: {
        id: 1,
        name: "src/"
      }
    };
    expect(
      matches(
        object,
        schema
      )
    ).toBe(true);
  });
  test('object does not matches schema', () => {
    const schema = {
      timestamp: Number,
      test: Boolean,
      version: String,
      module: {
        id: Number,
        name: String,
      }
    };
    const object  = {
      test: true,
      version: 0.55,
      module: {
        id: 1,
        name: "src/"
      }
    };
    expect(
      matches(
        object,
        schema
      )
    ).toBe(false);
  });
});
