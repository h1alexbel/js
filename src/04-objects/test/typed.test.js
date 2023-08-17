import {typed} from "../src/typed.js";
import {immutable} from "../src/immutable.js";

describe('Test suite for typed.js', () => {
  test('types safe', () => {
    let build = {
      test: true,
      status: "failed"
    };
    expect(
      typed(
        build,
        () => immutable(build)
      )
    ).toStrictEqual(build);
  });
  test('type error raised', () => {
    expect(
      () =>
        typed(
          0,
          immutable(0)
        )
    ).toThrow(TypeError);
  });
});
