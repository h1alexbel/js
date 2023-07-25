import {Coerced} from "./coerced.js";
import {Inverted} from "./inverted.js";
import {CheckedBoolean} from "./checked-boolean.js";
import {TextAsNumber} from "./text-as-number.js";
import {Sum} from "./sum.js";
import {Textified} from "./textified.js";
import {ObjectAsText} from "./object-as-text.js";

export function addValues(a, b) {
  return new Sum(
    a, b
  ).value();
}

export function stringifyValue(value) {
  if (typeof value === 'object') {
    return new ObjectAsText(value).value();
  }
  return new Textified(value)
    .value();
}

export function invertBoolean(value) {
  return new Inverted(
    new CheckedBoolean(value).value()
  ).value();
}

export function convertToNumber(value) {
  return new TextAsNumber(value).value();
}

export function coerceToType(raw, type) {
  return new Coerced(raw, type).value();
}
