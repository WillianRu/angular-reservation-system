import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FilmsComponent } from './pages/films/films.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
