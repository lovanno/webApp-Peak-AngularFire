import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NearbyPageComponent } from './nearby-page.component';

const routes: Routes = [
  { path: 'nearby', component: NearbyPageComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NearbyPageRoutingModule { }
