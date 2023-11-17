import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VehiclesComponent } from './vehicles/componentes/vehicles.component';
import { ReservationsComponent } from './reservations/components/reservations.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppMaterialModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        VehiclesComponent,
        ReservationsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
