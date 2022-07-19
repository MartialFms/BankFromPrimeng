import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TabViewModule} from 'primeng/tabview';
import { AppComponent } from './app.component';
import { BankDataComponent } from './bank-data/bank-data.component';
import { AppRoutingModule } from './app-routing.module';
import { ColumnFilter, TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ReactiveFormsModule, FormsModule, NgControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TestComponent } from './test/test.component';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from "primeng/divider";
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from "primeng/inputswitch";
import { DropdownModule } from "primeng/dropdown";
import { TagModule } from 'primeng/tag';
import { Error404Component } from './error404/error404.component';
import { Test4Component } from './test4/test4.component';
import { AgendaCalendarComponent, } from './calendar/agenda-calendar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from "primeng/dialog";
import { ToastModule } from "primeng/toast";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { AgendaCalendarRoutingModule } from './calendar/agenda-calendar-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TempComponent } from './temp/temp.component';
import {CardModule} from 'primeng/card';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    BankDataComponent,
    IndexComponent,
    LoginComponent,
    DashboardComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    Test4Component,
    Error404Component,
    AgendaCalendarComponent,
    TopbarComponent,
    SidemenuComponent,
    TempComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    BrowserAnimationsModule,
    MenuModule,
    TabMenuModule,
    ToastModule,
    DropdownModule,
    RadioButtonModule,
    FileUploadModule,
    InputSwitchModule,
    AppRoutingModule,
    TagModule,
    TableModule,
    TabViewModule,
    AgendaCalendarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CheckboxModule,
    DividerModule,
    CommonModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    CardModule,
    DialogModule,
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    FullCalendarModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

