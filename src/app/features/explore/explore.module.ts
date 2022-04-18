import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreHomeComponent } from './components/explore-home/explore-home.component';
import { RouterModule } from '@angular/router';
import { ExploreArticleComponent } from './components/explore-article/explore-article.component';
import { ExplorePlansComponent } from './components/explore-plans/explore-plans.component';
import { ExploreEventsComponent } from './components/explore-events/explore-events.component';



@NgModule({
  declarations: [
    ExploreHomeComponent,
    ExploreArticleComponent,
    ExplorePlansComponent,
    ExploreEventsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ExploreHomeComponent,
    ExploreArticleComponent,
    ExplorePlansComponent,
    ExploreEventsComponent
  ]
})
export class ExploreModule { }
