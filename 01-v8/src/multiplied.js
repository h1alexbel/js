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
