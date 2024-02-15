import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
