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

import {CheckedNumber} from "./checked-number.js";

/**
 * Coerced.
 */
export class Coerced {

  /**
   * Ctor.
   * @param raw Raw value
   * @param type Type
   */
  constructor(raw, type) {
    this.raw = raw;
    this.type = type;
  }

  /**
   * Coerces value to a given type.
   * @return Coerced value to a given type
   */
  value() {
    if (this.type === 'string') {
      return this.raw.toString();
    } else if (this.type === 'symbol') {
      return Symbol(this.raw);
    } else if (this.type === 'number') {
      return new CheckedNumber(
        Number(this.raw)
      ).value();
    } else if (this.type === 'bigint') {
      return BigInt(this.raw);
    } else {
      throw new TypeError("type is not supported");
    }
  }
}
