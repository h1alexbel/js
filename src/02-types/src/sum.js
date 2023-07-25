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

import {UndefinedFree} from "./undefined-free.js";
import {IgnoreSymbol} from "./ignore-symbol.js";
import {Or} from "./or.js";
import {ObjectAsText} from "./object-as-text.js";

/**
 * Sum of two values.
 */
export class Sum {

  /**
   * Ctor.
   * @param a First value
   * @param b Second value
   */
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  /**
   * Summarize values.
   * @return sum of two values.
   */
  value() {
    if (typeof this.a === 'boolean' &&
      typeof this.b === 'boolean') {
      return new Or(this.a, this.b).value();
    }
    if (typeof this.a === 'object' &&
      typeof this.b === 'object') {
      return new ObjectAsText(this.a).value()
        + new ObjectAsText(this.b).value();
    }
    return new UndefinedFree(
        new IgnoreSymbol(this.a)
          .value()
      ).value()
      + new UndefinedFree(
        new IgnoreSymbol(
          this.b
        ).value()
      ).value();
  }
}
