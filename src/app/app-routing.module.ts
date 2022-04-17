import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then((m) => m.LandingPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/explore-page/explore-page.module').then((m) => m.ExplorePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/nearby-page/nearby-page.module').then((m) => m.NearbyPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then((m) => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
