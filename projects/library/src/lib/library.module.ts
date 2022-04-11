import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LibraryComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LibraryComponent,
    ButtonComponent
  ]
})
export class LibraryModule { }
