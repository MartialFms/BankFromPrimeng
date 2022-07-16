import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {AgendaCalendarComponent} from './agenda-calendar.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: AgendaCalendarComponent}
		])
	],
	exports: [
		RouterModule
	]
})
export class AgendaCalendarRoutingModule {}
