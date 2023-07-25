import {Coerced} from "./coerced.js";
import {Inverted} from "./inverted.js";
import {CheckedBoolean} from "./checked-boolean.js";
import {TextAsNumber} from "./text-as-number.js";
import {Sum} from "./sum.js";
import {Textified} from "./textified.js";
import {ObjectAsText} from "./object-as-text.js";

function addValues(a, b) {
  return new Sum(
    a, b
  ).value();
}

function stringifyValue(value) {
  if (typeof value === 'object') {
    return new ObjectAsText(value).value();
  }
  return new Textified(value)
    .value();
}

function invertBoolean(value) {
  return new Inverted(
    new CheckedBoolean(value).value()
  ).value();
}

function convertToNumber(value) {
  return new TextAsNumber(value).value();
}

function coerceToType(raw, type) {
  return new Coerced(raw, type).value();
}
