import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReservationsComponent } from './create-reservations/create-reservations.component';
import { CreateReservationsResolver } from './create-reservations/create-reservations.resolver';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { ReservationsListResolver } from './list-reservations/reservations-list.resolver';

const routes: Routes = [
  {
    path: 'create',
    component: CreateReservationsComponent,
    resolve: {
      response: CreateReservationsResolver
    }
  },
  {
    path: '',
    component: ListReservationsComponent,
    resolve: {
      response: ReservationsListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
