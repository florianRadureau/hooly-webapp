import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {}

  getReservations(page: number) {
    return this.http.get(`http://localhost:3000/reservations?_page=${page}&_limit=20`, {
      observe: 'response'
    });
  }

  postReservation(reservation: Reservation) {
    return this.http.post('http://localhost:3000/reservations', reservation);
  }
}
