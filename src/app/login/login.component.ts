import { Component, OnInit } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  activeIndex: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
  }

}
