import { Component, OnInit } from '@angular/core';
import { IReservation } from '../model/ireservation';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: IReservation[] = [];

  displayedColumns = ['id', 'vehicleModel', 'vehicleBrand', 'beginning', 'end'];

  loading: boolean = true;

  constructor( private reservationsService: ReservationsService) { }
  
  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations(): void {
    // this.reservationsService.findAllReservations().subscribe(
    //   resposta => {
    //     this.reservations = resposta;
    //       this.loading = false;
    //   },
    //   erro => {
    //     this.loading = false;
    //     alert("Erro ao consultar reservas");
    //     console.log(erro);
    //   }
    // );

    this.reservations = this.reservationsService.findAllReservations();
    this.loading = false;

  }
}
