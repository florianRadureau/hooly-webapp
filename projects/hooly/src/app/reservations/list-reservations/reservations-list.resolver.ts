import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ReservationService } from 'projects/hooly/src/services/reservation.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsListResolver implements Resolve<Object> {
  reservationService: ReservationService;

  constructor(reservationService: ReservationService) {
    this.reservationService = reservationService;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object> {
    return this.reservationService.getReservations(1).pipe(
      map((response: any) => {
        return {
          count: response.headers.get('X-Total-Count'),
          reservations: response.body
        };
      })
    );
  }
}
