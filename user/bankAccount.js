class bankAccount {
    constructor(intRate, balance) { 
        this.balance = balance;
        this.intRate = intRate;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
    if (amount > this.balance)
    {
        console.log("Insufficient funds: Charging a $5 fee");
        this.balance -= 5; 
    }
    else
        this.balance -= amount;

    return this;
    }
    displayAccountInfo() {
        console.log("Balance:", this.balance);
    }
    yieldInterest() {
        if(this.balance >0)
        {
            this.balance += this.balance * (this.intRate/100);
        }
        return this;
    }
}

const account1 = new bankAccount(2, 1000);
const account2 = new bankAccount(1, 500);
account1.deposit(5000).deposit(1000).deposit(600).withdraw(500).yieldInterest().displayAccountInfo();
account2.deposit(5000).deposit(1000).withdraw(600).withdraw(500).withdraw(600).withdraw(500).yieldInterest().displayAccountInfo();