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
 * Compared result from two numbers.
 */
export class Compared {

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
   * Comparation result of two numbers.
   * Example 1: new Compared("5", "1").value() // 1
   * Example 2: new Compared("5", "5").value() // 0
   * Example 3: new Compared("5", "6").value() // -1
   * @return {number}
   */
  value() {
    if (this.str1 === this.str2) {
      return 0;
    }
    if (this.str1.length > this.str2.length) {
      return 1;
    }
    if (this.str2.length > this.str1.length) {
      return -1;
    }
    for (let i = 0; i < this.str1.length; i++) {
      const digit1 = Number(this.str1.charAt(i));
      const digit2 = Number(this.str2.charAt(i));
      if (digit1 > digit2) {
        return 1;
      }
      if (digit2 > digit1) {
        return -1;
      }
    }
  }
}
