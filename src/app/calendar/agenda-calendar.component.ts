import {Component,OnInit} from '@angular/core';
import {BankService} from '../service/bank.service';

@Component({
    templateUrl: './agenda-calendar.component.html',
    styles: [`
        :host ::ng-deep .fc-header-toolbar {
            display: flex;
            flex-wrap: wrap;
        }
    `]
})
export class AgendaCalendarComponent implements OnInit {
  /*

    events!: any[];

    options: any;

    header: any;

    constructor(private bankService: BankService) { }

    ngOnInit() {
        this.bankService.getEvents().then(events => {
            this.events = events;
            this.options = {...this.options, ...{events: events}};
        });

        this.options = {
                initialDate : '2019-01-01',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true,
                selectable:true,
                selectMirror: true,
                dayMaxEvents: true
        };
    }
    */
    ngOnInit() {}
}