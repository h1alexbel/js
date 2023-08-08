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
    transfer(account, account2, 1);
    expect(account.usd)
      .toBe("$0");
    expect(account2.usd)
      .toBe("$1001");
  });
});
