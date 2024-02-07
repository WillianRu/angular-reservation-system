import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FilmsComponent } from './pages/films/films.component';
import { SharedModule } from '../../shared/shared.module';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    FilmsComponent,
    ReservationComponent,
    ReservationsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
