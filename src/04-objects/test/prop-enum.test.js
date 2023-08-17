import {deleteNonConfigurable, product, total, valueOf} from "../src/prop-enum.js";

describe('Test suite for prop-enum.js', () => {
  test('total in right format', () => {
    expect(
      total(
        {
          name: "Laptop",
          price: 1000,
          quantity: 5
        }
      )
    ).toBe(5000);
  });
  test('value of in right format', () => {
    expect(
      valueOf(
        {
          name: "Laptop",
          price: 1000,
          quantity: 5
        },
        'price'
      )
    ).toBe(1000);
  });
  test('value of no such field', () => {
    expect(() =>
      valueOf(
        {
          name: "Laptop",
          price: 1000,
          quantity: 5
        },
        'notexists'
      )
    ).toThrow(Error);
  });
  test('immutable product in right format', () => {
    expect(
      product
    ).toStrictEqual(
      {name: "Laptop"}
    );
  });
  test('deletes field in right format', () => {
    deleteNonConfigurable(product, 'name');
    expect(
      product
    ).toStrictEqual({});
  });
  test('no such field on delete', () => {
    expect(() =>
      deleteNonConfigurable(
        {
          name: "Laptop",
          price: 1000,
          quantity: 5
        },
        'notexists'
      )
    ).toThrow(Error);
  });
  test('field is not configurable  on delete', () => {
    let prod = {
      name: "Laptop",
      price: 1000,
      quantity: 5
    };
    Object.defineProperties(prod, {
      name: {
        configurable: false
      }
    });
    expect(() =>
      deleteNonConfigurable(
        prod,
        'name'
      )
    ).toThrow(Error);
  });
});
