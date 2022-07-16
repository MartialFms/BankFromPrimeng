export class Customer {
  customerId: number;
  firstName: string;
  lastName: string;
  email : string;
  accountsList : number[];

  constructor(  customerId: number, firstName: string, lastName: string, email : string, accountsList : number[]) {
    this.customerId = customerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.accountsList = accountsList;
  }
}
