import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPhoto } from 'src/app/interfaces/i-photo';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  public images: IPhoto[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fetchFavourites();
  }

  fetchFavourites() {
    const favouritesStorage: any = localStorage.getItem('favourites');
    this.images = JSON.parse(favouritesStorage);
  }

  viewPhoto(image: IPhoto) {
    let imageID: string = image.id;
    this.router.navigate(['/photos/' + imageID]);
  }

}
