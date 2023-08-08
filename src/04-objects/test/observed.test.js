import {observed} from "../src/observed.js";

describe('Test suite for observed.js', () => {
  test('', () => {
    const origin = { x: 42, y: 84 };
    const access = jest.fn();
    const mod = jest.fn();
    const observedObject = observed(origin, (property, value, action) => {
      if (action === 'get') {
        access(property, value);
      } else if (action === 'set') {
        mod(property, value);
      }
    });
    observedObject.x;
    observedObject.y = 100;
    expect(access).toHaveBeenCalledWith('x', 42);
    expect(mod).toHaveBeenCalledWith('y', 100);
  });
});
