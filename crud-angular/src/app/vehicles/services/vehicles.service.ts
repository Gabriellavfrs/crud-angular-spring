import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVehicle } from '../model/ivehicle';
import { Observable } from 'rxjs';
import { Vehicle } from '../vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private httpClient: HttpClient) { }

  private urlVehicles = "api/vehicles";

  findAllVehicles(): Observable<IVehicle[]> {
    return this.httpClient.get<IVehicle[]>(this.urlVehicles);
  }

  insertVehicle(vehicle: Vehicle) {
    return this.httpClient.post<Vehicle>(`${this.urlVehicles}/insert`, vehicle);
  }
}