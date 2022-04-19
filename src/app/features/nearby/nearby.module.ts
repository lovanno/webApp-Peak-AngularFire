import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NearbyMapComponent } from './components/nearby-map/nearby-map.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { NearbySwitchcityComponent } from './components/nearby-switchcity/nearby-switchcity.component';
import { NearbyViewMapComponent } from './components/nearby-view-map/nearby-view-map.component';


@NgModule({
  declarations: [
    NearbyMapComponent,
    NearbySwitchcityComponent,
    NearbyViewMapComponent
  ],
  imports: [
    CommonModule,
    NgxMapLibreGLModule,
  ],
  exports: [
    NearbyViewMapComponent
  ]
})
export class NearbyModule { }
