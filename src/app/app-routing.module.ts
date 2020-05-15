import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentMeasuresComponent } from './current/current-measures/current-measures.component';
import { HistoryComponent } from './history/history-component/history.component';

const routes: Routes = [
  { path: 'currentMeasures', component: CurrentMeasuresComponent },
  { path: 'analyzes', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
