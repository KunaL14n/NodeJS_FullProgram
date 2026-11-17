function createBankAccount(){
    let balance = 1000;
    return {
        deposit: function(amount){
            balance += amount;
            return `Balance: $${balance}`;
        },
        withdraw: function (amount){
            balance -= amount;
            return `Balance: $${balance}`;
        }
        };

    }
const account = createBankAccount();

console.log(account.withdraw(800));
console.log(account.balance);