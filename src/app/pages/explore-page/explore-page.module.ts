import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorePageRoutingModule } from './explore-page-routing.module';
import { ExplorePageComponent } from './explore-page.component';


@NgModule({
  declarations: [
    ExplorePageComponent
  ],
  imports: [
    CommonModule,
    ExplorePageRoutingModule
  ]
})
export class ExplorePageModule { }
