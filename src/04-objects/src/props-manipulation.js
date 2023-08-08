export let person = {
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

export function updateInfo(info) {
  Object.getOwnPropertyNames(info)
    .forEach(name => {
      if (Object.getOwnPropertyDescriptor(person, name).writable) {
        person[name] = info[name];
      }
    });
  return person;
}

function addAddress() {
  Object.defineProperty(person, 'address', {
    value: {},
    writable: true,
    enumerable: false,
    configurable: false
  });
}
