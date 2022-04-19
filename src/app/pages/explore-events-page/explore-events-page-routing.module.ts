import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreEventsPageComponent } from './explore-events-page.component';

const routes: Routes = [
  { path: '', component: ExploreEventsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreEventsPageRoutingModule { }
