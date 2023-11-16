import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsComponent } from './components/reservations.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class ReservationsModule { }
