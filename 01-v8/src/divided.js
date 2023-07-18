import {Multiplied} from "./multiplied.js";
import {Compared} from "./compared.js";
import {Sum} from "./sum.js";
import {SubOf} from "./sub-of.js";

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
