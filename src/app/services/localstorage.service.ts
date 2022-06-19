import { Injectable } from '@angular/core';
import { IPhoto } from '../interfaces/i-photo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  fetchFavouritesStorage(){
    const favouritesStorage: any = localStorage.getItem('favourites');
    const favourites: IPhoto[] = JSON.parse(favouritesStorage);
    return favourites;
  }

  setFavouritesStorage(favourites: IPhoto[]){
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }
}
