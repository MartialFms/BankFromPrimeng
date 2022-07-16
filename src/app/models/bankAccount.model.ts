import { Customer } from "./customer.model";

export class BankAccount {
  title: string;
  ref: number;
  creationDate: Date;
  balance : number;
  customer : Customer;
  transactionsList : number[]

  constructor(title: string, ref: number, creationDate : Date, balance : number, customer : Customer, transactionsList : number[]) {
    this.title = title;
    this.ref = ref;
    this.creationDate = creationDate;
    this.balance = balance;
    this.customer = customer;
    this.transactionsList = transactionsList;
  }
}
