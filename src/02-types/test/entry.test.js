/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2023 Aliaksei Bialiauski
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {addValues, coerceToType, convertToNumber, invertBoolean, stringifyValue} from "../src/entry.js";

describe("Test suite for Sum.js", () => {
  test("sums ints in right format", () => {
    expect(
      addValues(1, 1)
    ).toBe(2);
  });
  test("sums strings in right format", () => {
    expect(
      addValues("1", "1")
    ).toBe("11");
  });
  test("sums string with int in right format", () => {
    expect(
      addValues(1, "1")
    ).toBe("11");
  });
  test("sums boolean with string in right format", () => {
    expect(
      addValues(true, "some")
    ).toBe("truesome");
  });
  test("sums objects in right format", () => {
    expect(() =>
      addValues(
        {
          "name": "cactoos"
        },
        {
          "version": "0.124.2"
        }
      )
    ).toThrow(TypeError);
  });
  test("sums booleans in right format", () => {
    expect(
      addValues(true, true)
    ).toBe(true);
  });
  test("prints number in right format", () => {
    expect(
      stringifyValue(1)
    ).toBe("1");
  });
  test("prints boolean in right format", () => {
    expect(
      stringifyValue(true)
    ).toBe("true");
  });
  test("prints JSON in right format", () => {
    const json = {
      "test": "true"
    };
    expect(
      stringifyValue(json)
    ).toBe(
      "{\"test\":\"true\"}"
    );
  });
  test("prints array in JSON in right format", () => {
    expect(
      stringifyValue(
        [
          "test"
        ]
      )
    ).toBe("[\"test\"]");
  });
  test("inverts false in right format", () => {
    expect(
      invertBoolean(false)
    ).toBe(true);
  });
  test("inverts true in right format", () => {
    expect(
      invertBoolean(true)
    ).toBe(false);
  });
  test("prints int in right format", () => {
    expect(
      convertToNumber("1")
    ).toBe(1);
  });
  test("prints float in right format", () => {
    expect(
      convertToNumber("1.27")
    ).toBe(1.27);
  });
  test("prints string in right format", () => {
    expect(
      coerceToType(1, "string")
    ).toBe("1");
  });
  test("prints int in right format", () => {
    expect(
      coerceToType("12", "number")
    ).toBe(12);
  });
  test("throws in case of unsupported in right format", () => {
    expect(() =>
      coerceToType("value", "unsupported")
    ).toThrow(TypeError);
  });
});
