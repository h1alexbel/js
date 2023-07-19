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

/**
 * Scalar value that represents multiplied result of two numbers as string.
 */
export class Multiplied {

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
   * Multiplied string.
   * @returns {string} multiplied string
   */
  value() {
    const prod = Array(this.str1.length + this.str2.length).fill(0);
    for (let i = this.str1.length; i--;) {
      let carry = 0;
      for (let j = this.str2.length; j--;) {
        prod[1 + i + j] += carry + this.str1[i] * this.str2[j];
        carry = Math.floor(prod[1 + i + j] / 10);
        prod [1 + i + j] = prod [1 + i + j] % 10;
      }
      prod[i] += carry;
    }
    return prod.join("").replace(/^0+(?=\d)/, '');
  }
}
