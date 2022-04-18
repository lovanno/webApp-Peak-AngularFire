import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then((m) => m.LandingPageModule)
  },
  {
    path: 'explore/:name',
    loadChildren: () => import('./pages/explore-article-page/explore-article-page.module').then((m) => m.ExploreArticlePageModule)
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
