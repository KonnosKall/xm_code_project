import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { InfiniteScrollComponent } from 'src/app/components/infinite-scroll/infinite-scroll.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MaterialBasicModule } from 'src/app/shared/material-basic/material-basic.module';
@NgModule({
  declarations: [
    PhotosComponent,
    InfiniteScrollComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    ScrollingModule,
    MaterialBasicModule
  ]
})
export class PhotosModule { }
