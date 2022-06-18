import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePhotoRoutingModule } from './single-photo-routing.module';
import { SinglePhotoComponent } from './single-photo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SinglePhotoComponent
  ],
  imports: [
    CommonModule,
    SinglePhotoRoutingModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SinglePhotoModule { }
