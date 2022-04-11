import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrucksComponent } from './create-trucks/create-trucks.component';
import { ListTrucksComponent } from './list-trucks/list-trucks.component';

const routes: Routes = [
  { path: 'create', component: CreateTrucksComponent},
  { path: '', component: ListTrucksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrucksRoutingModule { }
