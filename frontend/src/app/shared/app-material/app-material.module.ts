import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
