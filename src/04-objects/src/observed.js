export function observed(object, callback) {
  return new Proxy(object, {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      callback(property, value, 'get');
      return value;
    },
    set(target, property, value, receiver) {
      const result = Reflect.set(target, property, value, receiver);
      callback(property, value, 'set');
      return result;
    },
  });
}
