export let account = {
  inside: 1000,
  get usd() {
    return `$${this.inside}`;
  },
  set balance(amount) {
    this.inside = amount;
  }
};
export let account2 = {
  inside: 1000,
  get usd() {
    return `$${this.inside}`;
  },
  set balance(amount) {
    this.inside = amount;
  }
};

export function transfer(from, to, amount) {
  if (from.inside > amount) {
    from.balance = from.inside - amount;
    to.balance = to.inside + amount;
  } else {
    throw Error(
      `account: ${from.inside} cannot handle transaction ${amount}`
    );
  }
}
