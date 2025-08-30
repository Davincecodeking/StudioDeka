import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeModuleRouting } from './home-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  imports: [
    CommonModule,
    HomeModuleRouting,
    NgImageSliderModule,  
  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }
