import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './componentes/vehicles.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ]
})
export class VehiclesModule { }
