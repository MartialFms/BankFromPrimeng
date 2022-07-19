import { Component, OnInit } from '@angular/core';
import { Bank, BankService } from '../service/bank.service';

@Component({
  selector: 'app-bank-data',
  templateUrl: './bank-data.component.html',
  styleUrls: ['./bank-data.component.css']
})
export class BankDataComponent implements OnInit {

  bankAccounts!: Bank[];

  constructor(private bankService: BankService) { }

  ngOnInit() {
    this.bankService.findAll().subscribe(data => {
      this.bankAccounts = data;});
    /*
      this.bankService.getBankAccounts().
      then(bankAccounts => this.bankAccounts = bankAccounts);
      */
  }

}
