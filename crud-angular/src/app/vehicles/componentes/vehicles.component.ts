import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehiclesService } from '../services/vehicles.service';
import { IVehicle } from '../model/ivehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  constructor(private vehicleService: VehiclesService) { }

  vehicles: IVehicle[] = [];
  vehicle: Vehicle = new Vehicle;

  displayedColumnsVehicles = ['id', 'vehicleModel', 'vehicleBrand', 'color', 'year', 'licensePlate', 'actions'];
  
  ngOnInit(): void { 
    this.getAllVehicles();
   } 


  getAllVehicles():void {
    this.vehicleService.findAllVehicles().subscribe({
      next: (resposta) => {
        this.vehicles = resposta;

      },
      error: (erro) => {
        alert("Erro ao consultar veículos");
        console.log(erro);
      }
    })
  }

  insertVehicle(): void {
    console.log(this.vehicle)
    this.vehicleService.insertVehicle(this.vehicle).subscribe({
      next: (resposta) => {
        alert("Veículo inserido com sucesso!");
        this.getAllVehicles();
      },
      error: (erro) => {
        alert("Erro ao consultar veículos");
        console.log(erro);
      }
    })
  }

}
