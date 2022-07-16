import { Component, OnInit } from '@angular/core';
import { Bank, BankService } from '../service/bank.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})

export class BankAccountComponent implements OnInit {

  bankAccounts!: Bank[];

  constructor(private bankService: BankService) { }

  ngOnInit() {
      this.bankService.getBankAccounts().
      then(bankAccounts => this.bankAccounts = bankAccounts);
  }

}
