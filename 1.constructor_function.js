function BankAccount(customerName, balance = 0) {
    this.customerName = customerName,
        this.balance = balance,
        this.accountNumber = Date.now();

    this.deposit = function (amount) {
        this.balance += amount;
    }

    this.widthdraw = function (amount) {
        this.balance -= amount;
    }
}

// let AbdulAccount = new BankAccount("Abdul")
// const AsmaAccount = new BankAccount("Asma", 5000)
// AbdulAccount.deposit(400)
// console.log(AbdulAccount, AsmaAccount);


// Bank Account
let accounts = [];
let accountForm = document.getElementById('accountForm');
let customerName = document.getElementById('customerName');
let initialBalance = document.getElementById('balance');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let createAccount = new BankAccount(customerName.value, +initialBalance.value)
    accounts.push(createAccount)
    console.log(accounts);
})

// Deposit in Account
const depositForm = document.getElementById('depositForm')
const accountNumber = document.getElementById('accountNumber');
const amount = document.getElementById('amount');

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let findAccount = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    )
    findAccount.deposit(+amount.value)
    console.log(accounts);
})



// Widthdraw from Account
const widthdrawForm = document.getElementById('widthdrawForm')
const accountNumber1 = document.getElementById('accountNumber1');
const amount1 = document.getElementById('amount1');

widthdrawForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let findAccount = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    )
    findAccount.widthdraw(+amount1.value)
    console.log(accounts);
})