import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentMeasuresComponent } from './current/current-measures/current-measures.component';

const routes: Routes = [
  { path: 'currentMeasures', component: CurrentMeasuresComponent },
  { path: 'analyzes', component: CurrentMeasuresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
