import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorePlansPageComponent } from './explore-plans-page.component';

const routes: Routes = [{ path: '', component: ExplorePlansPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorePlansPageRoutingModule { }
