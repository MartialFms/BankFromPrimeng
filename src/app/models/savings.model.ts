import { Customer } from "./customer.model";

export class Savings {
  accountId: number;
  creationDate: Date;
  balance: number;
  rate : number;
  customer : Customer;

  constructor(accountId: number, creationDate : Date, balance : number, rate : number,customer : Customer) {
    this.accountId = accountId;
    this.creationDate = creationDate;
    this.balance = balance;
    this.rate = rate;
    this.customer = customer;
  }
}

