export class Compared {

  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
  }

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
