import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreEventsArticlePageRoutingModule } from './explore-events-article-page-routing.module'
import { ExploreEventsArticlePageComponent } from './explore-events-article-page.component';
import { ExploreModule } from 'src/app/features/explore/explore.module';
import { HeaderModule } from 'src/app/features/header/header.module';

@NgModule({
  declarations: [
    ExploreEventsArticlePageComponent,
  ],
  imports: [
    CommonModule,
    ExploreEventsArticlePageRoutingModule,
    ExploreModule,
    HeaderModule
  ]
})
export class ExploreEventsArticlePageModule { }
