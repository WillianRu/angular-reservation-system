import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FilmsComponent } from './pages/films/films.component';
import { SharedModule } from '../../shared/shared.module';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { FilmComponent } from './pages/film/film.component';


@NgModule({
  declarations: [
    FilmsComponent,
    BookingsComponent,
    FilmComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
