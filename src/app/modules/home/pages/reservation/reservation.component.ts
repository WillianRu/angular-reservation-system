import { Component } from '@angular/core';
import { FilmModel } from '../../../../core/models/film.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  film : FilmModel [] = [];
}
