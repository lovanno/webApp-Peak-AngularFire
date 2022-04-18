import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreArticlePageRoutingModule } from './explore-article-page-routing.module';
import { ExploreArticlePageComponent } from './explore-article-page.component';
import { ExploreModule } from 'src/app/features/explore/explore.module';
import { HeaderModule } from 'src/app/features/header/header.module';


@NgModule({
  declarations: [
    ExploreArticlePageComponent
  ],
  imports: [
    CommonModule,
    ExploreArticlePageRoutingModule,
    ExploreModule,
    HeaderModule
  ]
})
export class ExploreArticlePageModule { }
