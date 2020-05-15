import { NgModule } from '@angular/core';

import { CurrentMeasuresModule } from './current/current-measures.module';
import { HistoryModule } from './history/history.module';


@NgModule({
    exports: [
        CurrentMeasuresModule,
        HistoryModule
    ]
})
export class ComponentModule { }
