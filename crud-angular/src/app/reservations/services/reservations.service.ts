import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReservation } from '../model/ireservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private httpClient: HttpClient) { }

  // private url = './reservations.json';

  findAllReservations(): IReservation[] {
    // return this.httpClient.get<IReservation[]>(this.url)
    return [
      {
        id: 1,
        vehicleBrand: "Chevrolet",
        vehicleModel: "Ônix",
        beginning: "12/02/2024",
        end: "15/02/2024"
      }
    ]
  }
}
