export function typed(object, origin) {
  if (typeof object !== 'object') {
    throw new TypeError('input parameter is not an object');
  }
  return origin(object);
}
