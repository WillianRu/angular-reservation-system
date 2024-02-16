import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationsModel } from '../../../core/models/reservations.model';
import { ReservationModel } from '../../../core/models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:8081/api/v1/reservation';

  constructor(private http: HttpClient) { }

  register(reservation: ReservationModel): Observable<string> {
    return this.http.post<string>(this.baseUrl , reservation);
  }

  getReservations(): Observable<ReservationsModel[]> {
    return this.http.get<ReservationsModel[]>(this.baseUrl);
  }

  deleteReservation(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`; // Asegúrate de usar el ID en la URL
    return this.http.delete(url);
  }
}
