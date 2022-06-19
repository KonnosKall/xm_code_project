import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPhoto } from 'src/app/interfaces/i-photo';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  public images: IPhoto[] = [];
  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.fetchFavourites();
  }

  fetchFavourites() {
    this.images = this.localStorageService.fetchFavouritesStorage();
  }

  viewPhoto(image: IPhoto) {
    let imageID: string = image.id;
    this.router.navigate(['/photos/' + imageID]);
  }

}
