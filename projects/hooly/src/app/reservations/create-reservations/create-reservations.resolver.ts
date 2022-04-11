import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { LocationService } from 'projects/hooly/src/services/location.service';
import { TruckService } from 'projects/hooly/src/services/truck.service';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateReservationsResolver implements Resolve<Object> {
  constructor(private truckService: TruckService, private locationService: LocationService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object> {
    let calls = [
      this.truckService.getAllTrucks(),
      this.locationService.getLocations()
    ];
    return forkJoin(calls).pipe(
      map(([trucks, locations]) => {
        return {
          trucks: trucks,
          locations: locations
        };
      })
    );
  }
}
