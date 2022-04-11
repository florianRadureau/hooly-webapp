import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from 'projects/hooly/src/models/location';
import { Reservation } from 'projects/hooly/src/models/reservation';
import { Truck } from 'projects/hooly/src/models/truck';
import { ReservationService } from 'projects/hooly/src/services/reservation.service';

@Component({
  selector: 'app-create-reservations',
  templateUrl: './create-reservations.component.html',
  styleUrls: ['./create-reservations.component.scss']
})
export class CreateReservationsComponent implements OnInit {
  form: FormGroup;
  public locations: Location[] = [];
  public trucks: Truck[] = [];

  constructor(private route: ActivatedRoute, private reservationService: ReservationService, private toastr: ToastrService) {
    this.form = new FormGroup({
      date: new FormControl(null, Validators.required),
      truck: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required)
    });
   }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.trucks = data['response']['trucks'];
      this.locations = data['response']['locations'];
    });
  }

  submit() {
    this.form.markAsDirty();
    if (this.form.invalid) {
      return;
    }
    this.reservationService.postReservation(this.form.value).subscribe(
      _ => {
        this.form.reset();
        this.toastr.success('Success', 'Reservation created!');
      }
    );
  }
}
