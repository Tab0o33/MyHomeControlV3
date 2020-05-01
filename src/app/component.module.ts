import { NgModule } from '@angular/core';

import { CurrentMeasuresModule } from './current/current-measures.module';


@NgModule({
    exports: [
        CurrentMeasuresModule
    ]
})
export class ComponentModule { }
