import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreHomeComponent } from './components/explore-home/explore-home.component';
import { RouterModule } from '@angular/router';
import { ExploreArticleComponent } from './components/explore-article/explore-article.component';
import { ExplorePlansComponent } from './components/explore-plans/explore-plans.component';
import { ExploreEventsComponent } from './components/explore-events/explore-events.component';
import { ExploreEventsArticleComponent } from './components/explore-events-article/explore-events-article.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ExploreHomeComponent,
    ExploreArticleComponent,
    ExplorePlansComponent,
    ExploreEventsComponent,
    ExploreEventsArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    ExploreHomeComponent,
    ExploreArticleComponent,
    ExplorePlansComponent,
    ExploreEventsComponent,
    ExploreEventsArticleComponent
  ]
})
export class ExploreModule { }
