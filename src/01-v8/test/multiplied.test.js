/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2023 Aliaksei Bialiauski, EO-CQRS
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

import {Multiplied} from "../src/multiplied.js";

describe("Test suite for Multiplied.js", () => {
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
        "989898989898989898989898989899898989898989898989898989898998989898989898989898989898989989898989898989898989898989899898989898989898989898989898998989898989898989898989898988", "2"
      ).value()
    ).toBe("1979797979797979797979797979799797979797979797979797979797997979797979797979797979797979979797979797979797979797979799797979797979797979797979797997979797979797979797979797976");
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
