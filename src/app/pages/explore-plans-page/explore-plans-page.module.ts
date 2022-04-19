import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorePlansPageRoutingModule } from './explore-plans-page-routing.module';
import { ExplorePlansPageComponent } from './explore-plans-page.component';
import { ExploreModule } from 'src/app/features/explore/explore.module';

@NgModule({
  declarations: [
    ExplorePlansPageComponent
  ],
  imports: [
    CommonModule,
    ExplorePlansPageRoutingModule,
    ExploreModule
  ]
})
export class ExplorePlansPageModule { }
