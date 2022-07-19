import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCalendarComponent } from './agenda-calendar.component';

describe('AgendaCalendarComponent', () => {
  let component: AgendaCalendarComponent;
  let fixture: ComponentFixture<AgendaCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
