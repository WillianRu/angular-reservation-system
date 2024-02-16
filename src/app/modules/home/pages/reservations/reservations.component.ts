import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { ReservationsModel } from '../../../../core/models/reservations.model';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {

  reservations: ReservationsModel[] = [];
  constructor(private reservationservice: ReservationService){}

  ngOnInit() {
    this.loadReservations();
    console.log(this.reservations);

  }

  loadReservations() {
    this.reservationservice.getReservations().subscribe(data => {
      this.reservations = data;
      console.log('datos:', this.reservations);

    }, error => {
      console.error('Error al obtener las reservaciones', error);
    });
  }

  deleteReservation(id : number){
    this.reservationservice.deleteReservation(id).subscribe(data => {
      this.loadReservations();
    }, error => {
      console.error('Error al eliminar la reservación', error);
    });
  }
}
