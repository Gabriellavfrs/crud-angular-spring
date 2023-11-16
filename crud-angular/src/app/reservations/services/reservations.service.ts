import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReservation } from '../model/ireservation';
import { IVehicle } from '../../vehicles/model/ivehicle';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private httpClient: HttpClient) { }

  private urlReservations = "api/reservations";
  private urlAvailable = "api/vehicles";

  findAllReservations(): Observable<IReservation[]> {
    return this.httpClient.get<IReservation[]>(this.urlReservations);
  }

  findAvailableVehicles(b: String, e: String): Observable<IVehicle[]> {
    return this.httpClient.get<IVehicle[]>(`${this.urlAvailable}?b=${b}&e=${e}`);
  }
}
