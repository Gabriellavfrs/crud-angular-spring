import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { VehiclesComponent } from './vehicles.component';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Vehicle } from '../vehicle';
import { VehiclesService } from '../services/vehicles.service';
import { of } from 'rxjs';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;
  let vehicleService: VehiclesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        AppMaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [ 
        VehiclesComponent 
      ],
      providers: [
        VehiclesService
      ]
    })
    .compileComponents();
    vehicleService = TestBed.inject(VehiclesService);
    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find all vehicles', () => {
    const mockVehicles: Vehicle[] = [{
      id: '1',
      vehicleBrand:'brandTest',
      vehicleModel: 'modelTest',
      color: 'red',
      year:'1111',
      licensePlate:'AAAA',
    }]

    spyOn(vehicleService, 'findAllVehicles').and.returnValue(of(mockVehicles));
    fixture.detectChanges();

    component.getAllVehicles();
    expect(component.vehicles).toEqual(mockVehicles);
  })
});
