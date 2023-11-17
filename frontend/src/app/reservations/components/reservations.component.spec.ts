import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsComponent } from './reservations.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationsService } from '../services/reservations.service';
import { of } from 'rxjs';
import { IReservation } from '../model/ireservation';

describe('ReservationsComponent', () => {
  let component: ReservationsComponent;
  let fixture: ComponentFixture<ReservationsComponent>;
  let reservationService: ReservationsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        AppMaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [ ReservationsComponent ],
      providers: [
        ReservationsService
      ]
    })
    .compileComponents();
    reservationService = TestBed.inject(ReservationsService);
    fixture = TestBed.createComponent(ReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find all reservations', () => {
    const mockReservations: IReservation[] = [{
      id: '1',
      vehicleBrand: 'brandTest',
      vehicleModel: 'modelTest',
      beginning: '2024-02-02',
      end: '2024-02-10',
    }]

    spyOn(reservationService, 'findAllReservations').and.returnValue(of(mockReservations));
    fixture.detectChanges();

    component.getAllReservations();
    expect(component.reservations).toEqual(mockReservations);
  })
});
