import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NearbyPageRoutingModule } from './nearby-page-routing.module';
import { NearbyPageComponent } from './nearby-page.component';
import { HeaderModule } from 'src/app/features/header/header.module';
import { NearbyModule } from 'src/app/features/nearby/nearby.module';

@NgModule({
  declarations: [
    NearbyPageComponent
  ],
  imports: [
    CommonModule,
    NearbyPageRoutingModule,
    HeaderModule,
    NearbyModule
  ]
})
export class NearbyPageModule { }
