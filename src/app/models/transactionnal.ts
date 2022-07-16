import { BankAccount } from "./bankAccount.model";

export class Transaction {
  transactionId: number;
  type : string;
  transactionDate: Date;
  amount: number;
  account : BankAccount;

  constructor(  transactionId: number, type : string, transactionDate: Date, amount: number, account : BankAccount) {
    this.transactionId = transactionId;
    this.type=type;
    this.transactionDate = transactionDate;
    this.amount = amount;
    this.account = account;
  }
}
