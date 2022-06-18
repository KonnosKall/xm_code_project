import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  public images: any[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fetchFavourites();
  }

  fetchFavourites() {
    const favouritesStorage: any = localStorage.getItem('favourites');
    this.images = JSON.parse(favouritesStorage);
  }



  view(image: string) {
    let splitUrl: any[] = image.split('/');
    let imageID: string = splitUrl[4];
    this.router.navigate(['/photos/' + imageID]);
  }
}
