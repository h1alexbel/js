let account = {
  inside: 1000,
  get usd() {
    return `$${this.inside}`;
  },
  set balance(amount) {
    this.inside = amount;
  }
};
let account2 = {
  inside: 1000,
  get usd() {
    return `$${this.inside}`;
  },
  set balance(amount) {
    this.inside = amount;
  }
};

function transfer(from, to, amount) {
  from.balance = from.inside - amount;
  to.balance = to.inside + amount;
}

transfer(account, account2, 100);

console.log(account);
console.log(account2);
