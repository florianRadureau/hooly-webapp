import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsModule } from './reservations/reservations.module';

const routes: Routes = [
  { path: 'reservations', loadChildren: () => ReservationsModule},
  {
    path: 'trucks',
    loadChildren: () => import('./trucks/trucks-routing.module').then(m => m.TrucksRoutingModule)
  },
  { path:'', redirectTo: 'reservations', pathMatch: 'full' },
  { path: '**', redirectTo: 'reservations' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
