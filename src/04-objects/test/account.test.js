import {account, account2, transfer} from "../src/account.js";

describe('Test suite for account.js', () => {
  test('accounts balance in right format', () => {
    expect(
      account.usd
    ).toBe("$1000");
  });
  test('account balance can be set', () => {
    account.balance = 1;
    expect(
      account.usd
    ).toBe("$1");
  });
  test('transfer in right format', () => {
    const from = {
      inside: 1000,
      get usd() {
        return `$${this.inside}`;
      },
      set balance(amount) {
        this.inside = amount;
      }
    };
    const to = {
      inside: 1000,
      get usd() {
        return `$${this.inside}`;
      },
      set balance(amount) {
        this.inside = amount;
      }
    };
    transfer(
      from,
      to,
      100
    );
    expect(from.usd)
      .toBe("$900");
    expect(to.usd)
      .toBe("$1100");
  });
  test('from less than amount raise exception', () => {
    const from = {
      inside: 100,
      get usd() {
        return `$${this.inside}`;
      },
      set balance(amount) {
        this.inside = amount;
      }
    };
    expect(() =>
      transfer(
        from,
        account2,
        1000)
    ).toThrow(Error);
  });
});
