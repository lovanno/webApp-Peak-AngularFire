import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then((m) => m.LandingPageModule)
  },
  {
    path: 'explore/events/:article',
    loadChildren: () => import('./pages/explore-events-article-page/explore-events-article-page.module').then((m) => m.ExploreEventsArticlePageModule)
  },
  {
    path: 'explore/events',
    loadChildren: () => import('./pages/explore-events-page/explore-events-page.module').then((m) => m.ExploreEventsPageModule)
  },
  {
    path: 'explore/plans/:name',
    loadChildren: () => import('./pages/explore-article-page/explore-article-page.module').then((m) => m.ExploreArticlePageModule)
  },
  {
    path: 'explore/plans',
    loadChildren: () => import('./pages/explore-plans-page/explore-plans-page.module').then((m) => m.ExplorePlansPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore-page/explore-page.module').then((m) => m.ExplorePageModule)
  },
  {
    path: 'nearby',
    loadChildren: () => import('./pages/nearby-page/nearby-page.module').then((m) => m.NearbyPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then((m) => m.ProfilePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
