import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeModuleRouting } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModuleRouting
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
