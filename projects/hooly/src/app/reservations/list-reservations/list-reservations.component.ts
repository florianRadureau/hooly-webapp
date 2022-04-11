import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'projects/hooly/src/models/reservation';
import { ReservationService } from 'projects/hooly/src/services/reservation.service';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss']
})
export class ListReservationsComponent implements OnInit {
  reservations: Reservation[]|undefined;
  currentPage = 1;
  pages: number[] = [];
  count = 0;

  constructor(private route: ActivatedRoute, private reservationService: ReservationService) { }

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      this.setData(data['response']['reservations'], data['response']['count']);
    });
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    this.reservationService.getReservations(page).subscribe(
      response => {
        this.setData(<Reservation[]> response.body, Number.parseInt(<string> response.headers.get('X-Total-Count')))
      }
    )
  }

  setData(reservations: Reservation[], count: number) {
    this.reservations = reservations;
      this.count = count;
      this.pages = [];
      for (let i = 1; i <= Math.ceil(<number> this.count / 20); i++) {
        this.pages.push(i);
      }
  }
}
