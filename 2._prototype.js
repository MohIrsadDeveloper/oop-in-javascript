function BankAccount(customerName, balance=0) {
    this.customerName = customerName,
    this.balance = balance,
    this.accountNumber = Date.now();

    // this.deposit = function (amount) {
    //     this.balance += amount;
    // }
    // this.widthdraw = function (amount) {
    //     this.balance -= amount;
    // }
};

const abdulAccount = new BankAccount("Abdul", 3000);
const asmaAccount = new BankAccount("Asma");
// console.log(abdulAccount, asmaAccount);

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

BankAccount.prototype.widthdraw = function (amount) {
    this.balance -= amount;
};
// abdulAccount.deposit(3000)
abdulAccount.widthdraw(2000)

console.log(abdulAccount);