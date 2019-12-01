import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  DxDataGridModule,
  DxButtonModule,
  DxSelectBoxModule,
  DxCheckBoxModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxCheckBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
