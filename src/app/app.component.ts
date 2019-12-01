import { Component, ViewChild } from '@angular/core';
import { DataService, Order } from './data.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid: DxDataGridComponent;
  orders: Order[];
  saleAmountHeaderFilter: any;
  applyFilterTypes: any;
  currentFilter: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;

  constructor(service: DataService) {
    this.orders = service.getOrders();
    this.showFilterRow = true;
    this.showHeaderFilter = true;
    this.applyFilterTypes = [
      {
        key: 'auto',
        name: 'Immediately'
      },
      {
        key: 'onClick',
        name: 'On Button Click'
      }
    ];
    this.saleAmountHeaderFilter = [
      {
        text: 'Less than $3000',
        value: ['SaleAmount', '<', 3000]
      },
      {
        text: '$3000 - $5000',
        value: [
          ['SaleAmount', '>=', 3000],
          ['SaleAmount', '<', 5000]
        ]
      },
      {
        text: '$5000 - $10000',
        value: [
          ['SaleAmount', '>=', 5000],
          ['SaleAmount', '<', 10000]
        ]
      },
      {
        text: '$10000 - $20000',
        value: [
          ['SaleAmount', '>=', 10000],
          ['SaleAmount', '<', 20000]
        ]
      },
      {
        text: 'Greater than $20000',
        value: ['SaleAmount', '>=', 20000]
      }
    ];
    this.currentFilter = this.applyFilterTypes[0].key;
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
  }

  private static getOrderDay(rowData) {
    return new Date(rowData.OrderDate).getDay();
  }

  calculateFilterExpression(value, selectedFilterOperations, target) {
    let column = this as any;
    if (target === 'headerFilter' && value === 'weekends') {
      return [
        [AppComponent.getOrderDay, '=', 0],
        'or',
        [AppComponent.getOrderDay, '=', 6]
      ];
    }
    return column.defaultCalculateFilterExpression.apply(this, arguments);
  }

  orderHeaderFilter(data) {
    data.dataSource.postProcess = results => {
      results.push({
        text: 'Weekends',
        value: 'weekends'
      });
      return results;
    };
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }
}
