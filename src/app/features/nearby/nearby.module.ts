import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NearbyMapComponent } from './components/nearby-map/nearby-map.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { NearbyViewMapComponent } from './components/nearby-view-map/nearby-view-map.component';

@NgModule({
  declarations: [
    NearbyMapComponent,
    NearbyViewMapComponent,
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
