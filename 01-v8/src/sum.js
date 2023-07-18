/**
 * Scalar value that represents sum of two numbers as string.
 */
export class Sum {

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
   * Sum of two numbers.
   * @returns {string} sum of two numbers
   */
  value() {
    const len = Math.max(this.str1.length, this.str2.length);
    const output = [];
    let carry = 0;
    for (let i = 0; i < len; i++) {
      let digit1 = 0;
      if (i < this.str1.length) {
        digit1 = Number(this.str1[this.str1.length - 1 - i]);
      } else {
        digit1 = 0;
      }
      let digit2 = 0;
      if (i < this.str2.length) {
        digit2 = Number(this.str2[this.str2.length - 1 - i]);
      } else {
        digit2 = 0;
      }
      const sum = digit1 + digit2 + carry;
      const newDigit = sum % 10;
      if (sum >= 10) {
        carry = 1;
      } else {
        carry = 0;
      }
      output.unshift(newDigit);
    }
    if (carry > 0) {
      output.unshift(carry);
    }
    return output.join('');
  }
}
