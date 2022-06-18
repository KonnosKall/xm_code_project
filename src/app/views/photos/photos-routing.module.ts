import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: ':id', loadChildren: () => import('./single-photo/single-photo.module').then(m => m.SinglePhotoModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
