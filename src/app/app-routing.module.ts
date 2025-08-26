import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';

const routes: Routes = [
  {
    path: 'page',
    component: LandingPageComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(
          h => h.HomeModule
        )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
