import { Component, OnInit } from '@angular/core';
import { IReservation } from '../model/ireservation';
import { ReservationsService } from '../services/reservations.service';
import { IVehicle } from '../../vehicles/model/ivehicle';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: IReservation[] = [];
  availableVehicles: IVehicle[] = [];
  dateRange:String = '';

  displayedColumns = ['id', 'vehicleModel', 'vehicleBrand', 'beginning', 'end'];
  displayedColumnsVehicles = ['id', 'vehicleModel', 'vehicleBrand', 'color', 'year', 'licensePlate', 'actions'];

  loading: boolean = true;

  constructor( private reservationsService: ReservationsService) { }
  
  ngOnInit(): void {
    this.getAllReservations();
    this.getAvailableVehicles();
  }

  getAllReservations(): void {
    this.reservationsService.findAllReservations().subscribe({
      next: (resposta) => {
        this.reservations = resposta;
        this.loading = false;
      },
      error: (erro) => {
        this.loading = false;
        alert("Erro ao consultar reservas");
        console.log(erro);
      }
    });
  }

  getAvailableVehicles(): void {
    this.reservationsService.findAvailableVehicles('2024-01-01', '2024-02-10').subscribe({
      next: (resposta) => {
        this.availableVehicles = resposta;
        console.log(this.availableVehicles);
      },
      error: (erro) => {
        alert("Erro ao consultar veículos");
        console.log(erro);
      }
    });
  }

  onReserve(): void {
    console.log(this.dateRange);
  }
}
