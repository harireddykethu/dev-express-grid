import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxDataGridModule, DxButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
