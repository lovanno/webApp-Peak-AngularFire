import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorePageRoutingModule } from './explore-page-routing.module';
import { ExplorePageComponent } from './explore-page.component';
import { ExploreModule } from 'src/app/features/explore/explore.module';
import { HeaderModule } from 'src/app/features/header/header.module';

@NgModule({
  declarations: [
    ExplorePageComponent
  ],
  imports: [
    CommonModule,
    ExplorePageRoutingModule,
    ExploreModule,
    HeaderModule
  ]
})
export class ExplorePageModule { }
