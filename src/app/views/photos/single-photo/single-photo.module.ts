import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePhotoRoutingModule } from './single-photo-routing.module';
import { SinglePhotoComponent } from './single-photo.component';


@NgModule({
  declarations: [
    SinglePhotoComponent
  ],
  imports: [
    CommonModule,
    SinglePhotoRoutingModule
  ]
})
export class SinglePhotoModule { }
