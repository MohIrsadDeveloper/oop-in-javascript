function BankAccount (customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    }
    this.widthdraw = function (amount) {
        this.balance -= amount;
    }
};

const abdulAccount = new BankAccount("Abdul", 1000);
const asmaAccount = new BankAccount("Asma");

// abdulAccount.widthdraw(300)
// asmaAccount.deposit(300)

// console.log(abdulAccount, asmaAccount);


// =========== Dom Manuplation ====================
const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.getElementById('balance');

// Deposit
const depositForm = document.getElementById("depositForm");
const depositAccount = document.getElementById("accountNumber");
const depositAmount = document.getElementById("amount");

// Widthdraw
const widthdrawForm = document.getElementById("widthdrawForm");
const widthdrawAccount = document.getElementById("accountNumber1")
const widthdrawAmount = document.getElementById("amount1")

accountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
})

depositForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let depositerAccount = accounts.find(
        (account) => account.accountNumber === +depositAccount.value
    )
    depositerAccount.deposit(+depositAmount.value);
    console.log(accounts);
})


widthdrawForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let widthdrawalAccount = accounts.find(
        (account) => account.accountNumber === +widthdrawAccount.value
    )
    widthdrawalAccount.widthdraw(+widthdrawAmount.value);
    console.log(accounts);
})