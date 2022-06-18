import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InfiniteScrollComponent } from 'src/app/components/infinite-scroll.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PhotosComponent,
    InfiniteScrollComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class PhotosModule { }
