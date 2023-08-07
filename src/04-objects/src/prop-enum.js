let product = {
  name: "Laptop",
  price: 1000,
  quantity: 5
};

Object.defineProperties(product, {
  price: {
    writable: false,
    enumerable: false
  },
  quantity: {
    writable: false,
    enumerable: false
  }
});

function total(prod) {
  return valueOf(prod, 'price') * valueOf(prod, 'quantity');
}

function valueOf(prod, field) {
  if (typeof prod !== "object" || typeof field !== "string") {
    throw new TypeError('prod must be an object, field must be string');
  }
  if (!prod.hasOwnProperty(field)) {
    throw Error('no such field:' + field);
  }
  return Object.getOwnPropertyDescriptor(prod, field).value;
}

function deleteNonConfigurable(prod, field) {
  if (typeof prod !== "object" || typeof field !== "string") {
    throw new TypeError('prod must be an object, field must be string');
  }
  if (!prod.hasOwnProperty(field)) {
    throw Error('no such field:' + field);
  }
  if (!Object.getOwnPropertyDescriptor(prod, field).configurable) {
    throw Error('field is not configurable');
  }
  delete prod[field];
}

function typed(object, field) {
  if (typeof object !== "object" || typeof field !== "string") {
    throw new TypeError('prod must be an object, field must be string');
  }
}
