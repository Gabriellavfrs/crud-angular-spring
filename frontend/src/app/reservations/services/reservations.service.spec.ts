import { TestBed } from '@angular/core/testing';

import { ReservationsService } from './reservations.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ReservationsService', () => {
  let reservationService: ReservationsService;
  let httpController: HttpTestingController; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [ReservationsService]
    });
    reservationService = TestBed.inject(ReservationsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(reservationService).toBeTruthy();
  });
});
