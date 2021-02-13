class user{
    constructor(userName, emailAddress)
    {
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.accountBalance =0;

    }
    makeDeposit(amount){
        this.accountBalance += amount;
    }
    withDrawal(amount){
        this.accountBalance -= amount;
    }
    displayBalance(){
        console.log("username:", this.userName,"Balance:",this.accountBalance);
    }
    transferMoney(otherUser,amount){
        this.accountBalance -= amount;
        otherUser.makeDeposit(amount);
    }

}
 user1 = new user("user1","user1@email.com");
 user2 = new user("user2","user2@email.com");
 user3 = new user("user3","user3@email.com");
 user1.makeDeposit(500);
 user1.makeDeposit(100);
 user1.makeDeposit(25);
 user1.withDrawal(123);
 user1.displayBalance();
 user2.makeDeposit(1000);
 user2.makeDeposit(5200);
 user2.withDrawal(425);
 user2.withDrawal(700);
 user2.displayBalance();
 user3.makeDeposit(100000);
 user3.withDrawal(5000);
 user3.withDrawal(5000);
 user3.withDrawal(1500);
 user3.displayBalance();
 user1.transferMoney(user3,20);
 user1.displayBalance();
 user3.displayBalance();