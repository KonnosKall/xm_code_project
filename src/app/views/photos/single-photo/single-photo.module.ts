import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePhotoRoutingModule } from './single-photo-routing.module';
import { SinglePhotoComponent } from './single-photo.component';
import { MaterialBasicModule } from 'src/app/shared/material-basic/material-basic.module';



@NgModule({
  declarations: [
    SinglePhotoComponent
  ],
  imports: [
    CommonModule,
    SinglePhotoRoutingModule,
    MaterialBasicModule
  ]
})
export class SinglePhotoModule { }
