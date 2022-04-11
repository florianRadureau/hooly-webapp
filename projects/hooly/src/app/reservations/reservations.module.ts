import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { CreateReservationsComponent } from './create-reservations/create-reservations.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { LibraryModule } from 'projects/library/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateReservationsComponent,
    ListReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    LibraryModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReservationsModule { }
