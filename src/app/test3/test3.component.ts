import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
  providers: [MessageService]
})
export class Test3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
