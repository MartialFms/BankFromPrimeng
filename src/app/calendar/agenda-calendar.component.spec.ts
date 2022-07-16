import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCalendar } from './agenda-calendar.component';

describe('AgendaCalendarComponent', () => {
  let component: AgendaCalendar;
  let fixture: ComponentFixture<AgendaCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaCalendar ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
