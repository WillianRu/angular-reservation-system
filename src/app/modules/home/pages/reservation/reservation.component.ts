import { ReservationService } from './../../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { FilmModel } from '../../../../core/models/film.model';
import { FilmService } from '../../services/film.service';
import { ReservationModel } from '../../../../core/models/reservation.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {
  film: FilmModel | null = null;

  reservationData: ReservationModel = {
    movieId: 1,
    userAccountId: 1,
    reservationDate: '',
    seatsNumber: 0
  }

  constructor(private filmService: FilmService, private reservationService: ReservationService) { }

  ngOnInit() {
    this.filmService.currentFilm.subscribe(film => {
      if (film && typeof film.id === 'number') {
        this.film = film;
        this.reservationData.movieId = film.id;
        this.reservationData.reservationDate = new Date().toISOString().slice(0, 16);
      } else {
        console.error('La película no está definida o no tiene un ID válido.');
      }
    });
  }



  onSubmit(){
    //this.reservationData.reservationDate = new Date(this.reservationData.reservationDate);
    console.log(this.reservationData);
    this.reservationService.register(this.reservationData).subscribe({
      next: (response) => {
        console.log('Usuario creado', response);
      },
      error: (error) => {
        console.error('Error al crear el usuario', error);
      }
    });
  }
}

