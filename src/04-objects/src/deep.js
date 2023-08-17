export function deep(object) {
  const clone = {};
  let ds = Object.getOwnPropertyDescriptors(object);
  delete ds.value;
  for (const field in object) {
    const value = object[field];
    if (typeof value === 'object') {
      clone [field] = deep(value);
    } else {
      clone[field] = value;
    }
  }
  return clone;
}
