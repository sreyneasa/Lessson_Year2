// class BankAccount{
//     name:string;
//     balance: number;
//     constructor(name:string, balance: number){
//         this.name = name;
//         this.balance = balance;
//     }
//     debit(value:number){
//         this.balance += value;
//     }
//     credit(value:number){
//         this.balance -= value;
//     }
// }
// let myAccount = new BankAccount("ny",0.12);
// let HisAcc = new BankAccount("hunii",1000);
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    return person;
}());
var ny = new person("ny");
