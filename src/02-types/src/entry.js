export function addValues(a, b) {
  if (typeof a === 'boolean' &&
    typeof b === 'boolean') {
    return a || b;
  }
  if (typeof a === 'object' &&
    typeof b === 'object') {
    throw new TypeError('objects are not allowed');
  }
  if (typeof a === 'undefined'
    || a === null) {
    throw new TypeError(
      "first value is undefined"
    );
  }
  if (typeof a === 'symbol') {
    a = a.description.toString();
  }
  if (typeof b === 'symbol') {
    b = b.description.toString();
  }
  if (typeof b === 'undefined'
    || b === null) {
    throw new TypeError(
      "second value is undefined"
    );
  }
  return a + b;
}

export function stringifyValue(value) {
  if (typeof value === 'object') {
    return JSON.stringify(
      value
    );
  }
  if (typeof value === 'undefined'
    || value === null) {
    throw new TypeError(
      "value is undefined"
    );
  }
  if (typeof value === 'symbol') {
    return value.description.toString();
  }
  return value.toString();
}

export function invertBoolean(value) {
  if (typeof value !== "boolean") {
    throw new TypeError(
      "value is not boolean"
    );
  }
  return !value;
}

export function convertToNumber(value) {
  if (isNaN(value)) {
    throw new TypeError(
      "value is not a number"
    );
  }
  return Number(value);
}

export function coerceToType(raw, type) {
  if (type === 'string') {
    return raw.toString();
  } else if (type === 'symbol') {
    return Symbol(raw);
  } else if (type === 'number') {
    if (isNaN(raw)) {
      throw new TypeError(
        "value is not a number"
      );
    }
    return Number(raw);
  } else if (type === 'bigint') {
    return BigInt(raw);
  } else {
    throw new TypeError("type is not supported");
  }
}
