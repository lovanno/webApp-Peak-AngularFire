import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreArticlePageComponent } from './explore-article-page.component';

const routes: Routes = [
  {
    path: '', component: ExploreArticlePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreArticlePageRoutingModule { }
