import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bank {
  id : number;
  accountName : string;
  ref : number;
  totalBalance : number;
}

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private accountsUrl: string;

  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://localhost:8080/accounts';
  }

  public findAll(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.accountsUrl);
  }

  public save(account: Bank) {
    return this.http.post<Bank>(this.accountsUrl, account);
  }

/*
  constructor(private http: HttpClient) {}

  getBankAccounts() {
    return this.http.get<any>('assets/bank.json')
      .toPromise()
      .then(res => <Bank[]>res.accounts)
      .then(accounts => { return accounts; });
    }
 */
    getEvents() {
      return this.http.get<any>('assets/calendar.json')
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => { return data; });
      }

}
