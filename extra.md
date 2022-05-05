0. What is OOP ?
=> OOP stands for Object Oriented Programming.

1. Constructor Function
=> Constructor function name must be Start with Capital letter.
<!-- function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

const abdulAccount = new BankAccount("Abdul Bari", 1000);
const ayeshaAccount = new BankAccount("Ayesha");

abdulAccount.balance = 20000; ===> not do in real project.
console.log(abdulAccount); -->

2. _prototype
=> prototype save memory usage.
<!-- function BankAccount(customerName, balance=0) {
    this.customerName = customerName,
    this.balance = balance,
    this.accountNumber = Date.now();
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

console.log(abdulAccount); -->

3. Classes 
=> Classes will manage code in a best way and professional way.
    property in contructor method
    method as define function
    1. Classes will work on both expression function and define function
    2. In Classes hoisting will not work
    
    <!-- class BankAccount {
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance=0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }
    
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

}

const abdulAccount = new BankAccount("Abdul", 3000);
abdulAccount.deposit(3000)
abdulAccount.withdraw(1000)
console.log(abdulAccount); -->

4. Inheritance
=> 