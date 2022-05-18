import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NearbyPlacesPageRoutingModule } from './nearby-places-page-routing.module';
import { NearbyPlacesPageComponent } from './nearby-places-page.component';
import { NearbyModule } from 'src/app/features/nearby/nearby.module';


@NgModule({
  declarations: [
    NearbyPlacesPageComponent
  ],
  imports: [
    CommonModule,
    NearbyPlacesPageRoutingModule,
    NearbyModule
  ]
})
export class NearbyPlacesPageModule { }
