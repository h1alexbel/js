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

/**
 * Lazy Map.
 * @param arr array
 * @param func function to apply
 * @return applied status
 */
export function lazyMap(arr, func) {
  if (typeof arr !== 'object') {
    throw new TypeError("parameter is not object");
  }
  if (typeof func !== 'function') {
    throw new TypeError("parameter is not function");
  }
  let index = 0;
  return {
    next: function () {
      if (index < arr.length) {
        let mapped = func(arr[index]);
        index++;
        return {
          value: mapped,
          done: false
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
}
