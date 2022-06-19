import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/i-photo';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @ViewChild('anchor') public anchor!: ElementRef<HTMLElement>;
  public images: IPhoto[] = [];
  public isLoading: boolean = false;
  public isFetchingMore: boolean = false;
  public selectedFavourite: string = '';
  public options = {};

  constructor(private localStorageService: LocalStorageService) { }

  toggleLoading() {
    console.log(this.isLoading);
    this.isLoading = !this.isLoading;
  }

  ngOnInit(): void {
    setTimeout(this.toggleLoading.bind(this), 1000);
    this.fetchPhotos();
  }

  trackByFn(index: number) {
    return index;
  }

  addToFavourites(photo: IPhoto) {
    this.selectedFavourite = photo?.url;
    setTimeout(() => {
      this.selectedFavourite = '';
    }, 1500);
    let favouritesArray: IPhoto[] = [];
    if (this.localStorageService.fetchFavouritesStorage()) {
      favouritesArray = this.localStorageService.fetchFavouritesStorage();
    }
    favouritesArray.push(photo);
    this.updateFavouritesStorage(favouritesArray);
  }

  updateFavouritesStorage(favourites: IPhoto[]) {
    this.localStorageService.setFavouritesStorage(favourites);
  }

  onScroll(e: any) {
    this.isFetchingMore = true;
    setTimeout(() => {
      this.fetchPhotos();
      this.isFetchingMore = false;
    }, this.randomMS());
  }

  fetchPhotos() {
    for (let index = 0; index < 15; index++) {
      let imageUrl = "https://picsum.photos/450/450?" + index;
      fetch(imageUrl)
        .then(response => {
          this.images.push({ url: response.url, id: this.retrieveID(response.url) });
        });
    }
  }

  retrieveID(image: string) {
    let splitUrl: any[] = image.split('/');
    return splitUrl[4];
  }

  randomMS() {
    return Math.floor((Math.random() * 100) + 300);
  }

}
