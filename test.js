let BankAccount = require('./bankaccount');

var account = new BankAccount();

account.deposit(10);
console.log(account.balance());

account.deposit(-10);