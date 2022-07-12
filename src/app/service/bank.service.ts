import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bank {
  name : string;
  ref : number;
  balance : number;
}

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) {}

  getBankAccounts() {
    return this.http.get<any>('assets/bank.json')
      .toPromise()
      .then(res => <Bank[]>res.accounts)
      .then(accounts => { return accounts; });
    }
}
