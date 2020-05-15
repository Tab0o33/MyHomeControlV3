import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HistoryComponent } from './history-component/history.component';
import { TabsModule  } from 'ngx-bootstrap/tabs';
import { ChartWrapperComponent } from './chart-wrapper/chart-wrapper.component';
import { HistoryDataComponent } from './history-data/history-data.component';
import { HistoryService } from './history.service';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TabsModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [
    HistoryComponent,
    ChartWrapperComponent,
    HistoryDataComponent
  ],
  exports: [
    HistoryComponent
  ],
  providers: [
    HistoryService
  ]
})
export class HistoryModule { }
