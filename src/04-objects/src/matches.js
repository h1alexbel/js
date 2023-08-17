export function matches(object, schema) {
  if (typeof object === 'object') {
    if (Object.keys(schema).length !== Object.keys(object).length) {
      return false;
    } else {
      return Object.keys(schema)
        .every(k => matches(object[k], schema[k]));
    }
  } else {
    return object.constructor === schema;
  }
}
