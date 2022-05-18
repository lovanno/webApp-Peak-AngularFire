import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NearbyPlacesPageComponent } from './nearby-places-page.component';

const routes: Routes = [
  { path: '', component: NearbyPlacesPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NearbyPlacesPageRoutingModule { }
