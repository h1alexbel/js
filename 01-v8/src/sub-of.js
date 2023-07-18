/**
 * Scalar value that represents sub of two numbers as string.
 */
export class SubOf {

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
   * Sub of two numbers.
   * @returns {string} sub of two numbers
   */
  value() {
    const len = Math.max(this.str1.length, this.str2.length);
    const output = [];
    let borrow = 0;
    for (let i = 0; i < len; i++) {
      const digit1 = i < this.str1.length ? Number(this.str1[this.str1.length - 1 - i]) : 0;
      const digit2 = i < this.str2.length ? Number(this.str2[this.str2.length - 1 - i]) : 0;
      let diff = digit1 - digit2 - borrow;
      if (diff < 0) {
        diff += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }
      output.unshift(diff);
    }
    while (output.length > 1 && output[0] === 0) {
      output.shift();
    }
    return output.join('');
  }
}
