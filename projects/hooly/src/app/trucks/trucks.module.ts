import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrucksRoutingModule } from './trucks-routing.module';
import { CreateTrucksComponent } from './create-trucks/create-trucks.component';
import { ListTrucksComponent } from './list-trucks/list-trucks.component';
import { LibraryModule } from 'projects/library/src/public-api';


@NgModule({
  declarations: [
    CreateTrucksComponent,
    ListTrucksComponent
  ],
  imports: [
    CommonModule,
    TrucksRoutingModule,
    LibraryModule
  ]
})
export class TrucksModule { }
