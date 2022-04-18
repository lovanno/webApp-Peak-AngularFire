import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreHomeComponent } from './components/explore-home/explore-home.component';
import { RouterModule } from '@angular/router';
import { ExploreArticleComponent } from './components/explore-article/explore-article.component';



@NgModule({
  declarations: [
    ExploreHomeComponent,
    ExploreArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ExploreHomeComponent,
    ExploreArticleComponent
  ]
})
export class ExploreModule { }
