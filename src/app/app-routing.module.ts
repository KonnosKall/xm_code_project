import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'photos'},
  { path: 'photos', loadChildren: () => import('./views/photos/photos.module').then(m => m.PhotosModule) },
  { path: 'favourites', loadChildren: () => import('./views/favourites/favourites.module').then(m => m.FavouritesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
