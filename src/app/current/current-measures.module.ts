import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrentMeasuresComponent } from './current-measures/current-measures.component';
import { MeasureComponent } from './measure/measure.component';
import { CurrentMeasuresService } from './current-measures.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CurrentMeasuresComponent,
    MeasureComponent
  ],
  exports: [
    CurrentMeasuresComponent
  ],
  providers: [
    CurrentMeasuresService
  ]
})
export class CurrentMeasuresModule { }
