class BankAccount {
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
console.log(abdulAccount);