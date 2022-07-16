
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankDataComponent } from './bank-data/bank-data.component';
import { AgendaCalendarComponent } from './calendar/agenda-calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { TopbarComponent } from './topbar/topbar.component';

const routes: Routes = [
  { path: 'bankData', component: BankDataComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test1', component: TestComponent },
  { path: 'test2', component: Test2Component },
  { path: 'test3', component: Test3Component },
  { path: 'test4', component: Test4Component },
  { path: 'temp', component: TopbarComponent },
  { path: 'error404', component: Error404Component },
  { path: 'calendar', component: AgendaCalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
