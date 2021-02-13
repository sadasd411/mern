class user{
    constructor(userName, emailAddress)
    {
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.accountBalance =0;

    }
    makeDeposit(amount){
        this.accountBalance += amount;
        return this;
    }
    withDrawal(amount){
        this.accountBalance -= amount;
        return this;
    }
    displayBalance(){
        console.log("username:", this.userName,"Balance:",this.accountBalance);
    }
    transferMoney(otherUser,amount){
        this.accountBalance -= amount;
        otherUser.makeDeposit(amount);
        return this;
    }

}
user1 = new user("user1","user1@email.com");
user2 = new user("user2","user2@email.com");
user3 = new user("user3","user3@email.com");
user1.makeDeposit(500).makeDeposit(100).makeDeposit(25).withDrawal(123).displayBalance();
user2.makeDeposit(1000).makeDeposit(2000).withDrawal(500).withDrawal(50).displayBalance();
user3.makeDeposit(50000).withDrawal(1000).withDrawal(3000).withDrawal(20000).displayBalance();
user1.transferMoney(user2,50).displayBalance();
user2.displayBalance();