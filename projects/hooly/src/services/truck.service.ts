import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  constructor(private http: HttpClient) {}

  getTrucks(page: number) {
    return this.http.get(`http://localhost:3000/trucks?_page=${page}&_limit=15`, {
      observe: 'response'
    });
  }

  getAllTrucks() {
    return this.http.get(`http://localhost:3000/trucks`);
  }
}
