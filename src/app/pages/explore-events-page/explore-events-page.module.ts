import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreEventsPageRoutingModule } from './explore-events-page-routing.module';
import { ExploreModule } from 'src/app/features/explore/explore.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { ExploreEventsPageComponent } from './explore-events-page.component';


@NgModule({
  declarations: [
    ExploreEventsPageComponent
  ],
  imports: [
    CommonModule,
    ExploreEventsPageRoutingModule,
    ExploreModule,
    HeaderModule
  ]
})
export class ExploreEventsPageModule { }
