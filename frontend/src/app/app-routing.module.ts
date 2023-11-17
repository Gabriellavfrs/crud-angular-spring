import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './reservations/components/reservations.component';
import { VehiclesComponent } from './vehicles/componentes/vehicles.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'reservas', component: ReservationsComponent},
  { path: 'veiculos', component: VehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
