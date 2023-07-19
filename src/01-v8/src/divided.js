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

import {Multiplied} from "./multiplied.js";
import {Compared} from "./compared.js";
import {Sum} from "./sum.js";
import {SubOf} from "./sub-of.js";

/**
 * Scalar value that represents divided result of two numbers as string.
 */
export class Divided {

  /**
   * Ctor.
   * @param str1 Number as String
   * @param str2 Number as String
   */
  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
  }

  /**
   * Divided string.
   * @returns {string} divided string
   */
  value() {
    let value = 0;
    let i = "0";
    while (-1 === new Compared(
      new Multiplied(
        this.str2, i
      ).value(),
      this.str1
    ).value()) {
      value =
        new Compared(
          new Multiplied(
            this.str2,
            i
          ).value(),
          this.str1
        ).value();
      i = new Sum(i, "1").value();
    }
    if (
      1 === new Compared(
        new Multiplied(
          this.str2,
          i
        ).value(),
        this.str1
      ).value()
    ) {
      i = new SubOf(i, "1").value();
    }
    return i;
  }
}
