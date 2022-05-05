const BankAccount = class {
    accountName;
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

class SavingAccount extends BankAccount {
    transactionLimit = 10000;
    constructor(customerName, balance=0) {
        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.log("Taking Personal loan : "+ amount);
    }

}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;
    constructor(customerName, balance=0) {
        super(customerName, balance);
    }
    
    takeBusinessLoan(amount) {
        console.log("Taking Business Loan : "+ amount);
    }
}


// const abdulAccount = new BankAccount("Abdul", 500);
const abdulAccount = new CurrentAccount("Abdul", 2000)
abdulAccount.deposit(500);
abdulAccount.withdraw(1500);
abdulAccount.takeBusinessLoan(40000)
console.log(abdulAccount);