import { Component, OnInit } from '@angular/core';
import { IReservation } from '../model/ireservation';
import { ReservationsService } from '../services/reservations.service';
import { IVehicle } from '../../vehicles/model/ivehicle';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: IReservation[] = [];
  availableVehicles: IVehicle[] = [];
  reservation: Reservation = new Reservation;

  displayedColumns = ['id', 'vehicleModel', 'vehicleBrand', 'beginning', 'end', 'actions'];
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
    if(this.reservation.beginning > this.reservation.end) {
      return alert("A data de término deve ser maior do que a data de início!");
    }
    this.reservationsService.findAvailableVehicles(this.reservation.beginning, this.reservation.end).subscribe({
      next: (resposta) => {
        this.availableVehicles = resposta;
      },
      error: (erro) => {
        alert("Erro ao consultar veículos");
        console.log(erro);
      }
    });
  }

  insertReservation(id: string): void {
    this.reservation.vehicleId = id;
    this.reservationsService.insertReservation(this.reservation).subscribe({
      next: (resposta) => {
        alert("Reserva realizada com sucesso!");
        this.getAllReservations();
        this.clearInputs();
      },
      error: (erro) => {
        alert("Erro ao realizar reserva");
        console.log(erro);
      }
    })
  }

  deleteReservation(id: string): void {
    this.reservationsService.deleteReservaion(id).subscribe({
      next: (resposta) => {
        alert("Reserva concluída com sucesso!");
        this.getAllReservations();
      },
      error: (erro) => {
        alert("Erro ao concluir reserva");
        console.log(erro);
      }
    })
  }

  clearInputs(): void {
    this.reservation = new Reservation;
  }
}
