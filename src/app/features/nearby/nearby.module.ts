import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NearbyMapComponent } from './components/nearby-map/nearby-map.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { NearbyViewMapComponent } from './components/nearby-view-map/nearby-view-map.component';
import { NearbyPlaceDetailsComponent } from './components/nearby-place-details/nearby-place-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { NearbyUpdateMapComponent } from './components/nearby-update-map/nearby-update-map.component';
import { NearbyHomepinComponent } from './components/nearby-homepin/nearby-homepin.component';
@NgModule({
  declarations: [
    NearbyMapComponent,
    NearbyViewMapComponent,
    NearbyPlaceDetailsComponent,
    NearbyUpdateMapComponent,
    NearbyHomepinComponent,
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
