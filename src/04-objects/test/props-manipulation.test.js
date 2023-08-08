import {addAddress, person, updateInfo} from "../src/props-manipulation.js";
import {product} from "../src/prop-enum.js";

describe('Test suite for props-manipulation.js', () => {
  test('person firstName is immutable', () => {
    expect(() =>
      person.firstName = 'new'
    ).toThrow(TypeError);
  });
  test('person lastName is immutable', () => {
    expect(() =>
      person.lastName = 'new'
    ).toThrow(TypeError);
  });
  test('person age is immutable', () => {
    expect(() =>
      person.age = 12
    ).toThrow(TypeError);
  });
  test('person email is immutable', () => {
    expect(() =>
      person.firstName = 'new@hey.com'
    ).toThrow(TypeError);
  });
  test('update info in right format', () => {
    expect(
      updateInfo({
        firstName: "Test",
        lastName: "Test",
        age: 12,
        email: "test@example.com"
      })
    ).toBe(person);
  });
});
