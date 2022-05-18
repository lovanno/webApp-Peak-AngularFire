import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NearbyMapComponent } from './components/nearby-map/nearby-map.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { NearbyViewMapComponent } from './components/nearby-view-map/nearby-view-map.component';
import { NearbyPlaceDetailsComponent } from './components/nearby-place-details/nearby-place-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
  declarations: [
    NearbyMapComponent,
    NearbyViewMapComponent,
    NearbyPlaceDetailsComponent,
  ],
  imports: [
    CommonModule,
    NgxMapLibreGLModule,
    RouterModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    NearbyViewMapComponent,
    NearbyPlaceDetailsComponent
  ]
})
export class NearbyModule { }
