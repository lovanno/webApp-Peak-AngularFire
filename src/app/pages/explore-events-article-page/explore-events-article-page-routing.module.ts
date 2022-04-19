import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreEventsArticlePageComponent } from './explore-events-article-page.component';

const routes: Routes = [
  { path: '', component: ExploreEventsArticlePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreEventsArticlePageRoutingModule { }
