let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com"
};

Object.defineProperties(person, {
  firstName: {
    writable: false
  },
  lastName: {
    writable: false
  },
  age: {
    writable: false
  },
  email: {
    writable: false
  }
});

function updateInfo(info) {
  if (typeof info !== 'object') {
    throw new TypeError('info is not an object');
  }
  Object.getOwnPropertyNames(info)
    .forEach(name => {
      if (Object.getOwnPropertyDescriptor(person, name).writable) {
        person[name] = info[name];
      }
    });
  return person;
}

function address() {
  Object.defineProperty(person, 'address', {
    value: {},
    writable: true,
    enumerable: false,
    configurable: false
  });
}
