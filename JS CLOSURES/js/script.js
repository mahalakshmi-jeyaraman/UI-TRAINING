function BankAccount(accountNumber,cardNumber,pin,balance){
    let AccountNumber = accountNumber;
    let CardNumber = cardNumber;
    let Pin = pin;
    let Balance = balance;

    function withdraw(cardNumber,pin,amount){
        if(cardNumber === CardNumber && pin === Pin){
            if(amount <= balance){
                balance -= amount;
                console.log("Withdrawn amount = "+amount);
                console.log("Balance = "+balance);
            }
            else{
                console.log("Insufficient balance..");
            }
        }
        else{
            console.log("invalid card number or pin number..");
        }
    }

    function deposit(cardNumber,pin,amount){
        if(cardNumber === CardNumber && pin === Pin){
            if(amount <= balance){
                balance += amount;
                console.log("Deposited amount = "+amount);
                console.log("Balance = "+balance);
            }
            else{
                console.log("Insufficient balance..");
            }
        }
        else{
            console.log("invalid card number or pin number..");
        }
    }

    return {
        withdraw,
        deposit
    };
}

const BankAccounts = [
    new BankAccount(1,"1","123",10000),
    new BankAccount(2,"2","234",5000),
    new BankAccount(3,"3",345,2500),
    new BankAccount(4,"4",456,1250),
    new BankAccount(5,"5",567,625),
];

BankAccounts[0].withdraw("1","123",1000);
BankAccounts[1].deposit("2","234",2000);
BankAccounts[2].withdraw("3",345,1000);
BankAccounts[3].deposit("4",456,1000);
BankAccounts[4].withdraw("5",567,100);