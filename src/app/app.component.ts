import { Component } from '@angular/core';
import { DataService, Employee, State } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource: Employee[];
  states: State[];
  events: Array<string> = [];

  constructor(service: DataService) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
  }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }
}
