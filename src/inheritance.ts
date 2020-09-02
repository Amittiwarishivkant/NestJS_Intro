
// // Interface Inheritance

// export interface IHero {
//     id: string;
//     name: string;
//     photo?: string;
// }

// export interface IHuman extends IHero {
//     sex: string;
//     age: number;
//     health: number;
// }

// export interface ITransformer extends IHero {
//     wings: number;
//     wheels: number;
//     clan: string;
// }



// module Bank {
//    export class BankAccount { }
//     class SavingsAccount extends BankAccount { }

//     class CheckingAccount extends BankAccount { }
// }

// // Encapsulation

// export class InheritanceExample {
//     Withdraw(amount: number): boolean {
//         if (this._balance > amount) {
//             this._balance -= amount
//             return true;
//         }
//         return false;
//     }
//     private _balance: number;
//     get Balance(): number {
//         return this._balance;
//     }
// }


// // polymorphism
// export class SavingsAccount extends InheritanceExample
// {
//     ChargeFee(amount: number)
//     {
//         if (this.Balance > 1000) { amount = 0; }
//         else { amount += 1.00; } 
         
//         this.Balance =+ amount;
//     }
// }










// // Class Inheritance

// // Class inheritance works exactly the same as with interfaces, except that the children/descendants not only inherit properties, they also inherit functions and methods.

// // In a typical Angular application, you will very often create Components that will display a form to update/create data, then use a service, through dependency injection, to save those data to the database. But that’s not all!

// // What you also usually need, is a set of functions, inside each component that you call from the html template (the view) and which, in their turn, call the pertinent service function. Those functions tends to be extremely similar, if not the same, in all your components.