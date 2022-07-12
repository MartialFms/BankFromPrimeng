
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankDataComponent } from './bank-data/bank-data.component';

const routes: Routes = [
  { path: 'bankData', component: BankDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
