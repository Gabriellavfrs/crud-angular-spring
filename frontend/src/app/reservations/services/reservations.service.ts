import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReservation } from '../model/ireservation';
import { IVehicle } from '../../vehicles/model/ivehicle';
import { Reservation } from '../reservation';

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

  insertReservation(reservation: Reservation) {
    return this.httpClient.post<Reservation>(`${this.urlReservations}/insert`, reservation);
  }

  deleteReservaion(id: string): Observable<Reservation> {
    return this.httpClient.delete<Reservation>(`${this.urlReservations}?id=${id}`)
  }
}
