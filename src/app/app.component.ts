import { Component } from '@angular/core';
import { DataService, Company } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource: Company[];

  constructor(private dataService: DataService) {
    this.dataSource = this.dataService.getCompanies();
  }
}
