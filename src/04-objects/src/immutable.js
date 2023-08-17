export function immutable(object) {
  const immu = {};
  let ds = Object.getOwnPropertyDescriptors(object);
  delete ds.value;
  for (const field in object) {
    const value = object[field];
    if (typeof value === 'object') {
      immu [field] = immutable(value);
    } else {
      Object.defineProperty(immu, field, {
        value: value,
        writable: false,
        enumerable: true,
        configurable: false
      });
    }
  }
  return immu;
}
