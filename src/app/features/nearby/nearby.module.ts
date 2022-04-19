import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NearbyMapComponent } from './components/nearby-map/nearby-map.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { NearbySwitchcityComponent } from './components/nearby-switchcity/nearby-switchcity.component';


@NgModule({
  declarations: [
    NearbyMapComponent,
    NearbySwitchcityComponent
  ],
  imports: [
    CommonModule,
    NgxMapLibreGLModule,
  ],
  exports: [
    NearbyMapComponent,
    NearbySwitchcityComponent
  ]
})
export class NearbyModule { }
