import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NearbyPageRoutingModule } from './nearby-page-routing.module';
import { NearbyPageComponent } from './nearby-page.component';


@NgModule({
  declarations: [
    NearbyPageComponent
  ],
  imports: [
    CommonModule,
    NearbyPageRoutingModule
  ]
})
export class NearbyPageModule { }
