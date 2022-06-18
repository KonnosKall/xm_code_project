import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {
  public images: any[] = [];
  public isLoading: boolean = false;
  public selectedFavourite: string = '';
  @ViewChild('anchor')
  anchor!: ElementRef<HTMLElement>;
  options = {};


  constructor(private photosService: PhotosService, private http: HttpClient) { }




  toggleLoading() {
    console.log(this.isLoading);
    this.isLoading = !this.isLoading;
  }


  ngOnInit(): void {
    setTimeout(this.toggleLoading.bind(this), 1500);
    this.fetchPhotos();

  }

  addToFavourites(photo: string) {
    this.selectedFavourite = photo;
    setTimeout(() => {
      this.selectedFavourite = '';
    }, 1500);

    let favouritesStorage: any = localStorage.getItem('favourites');
    let favouritesArray: string[] = [];
    if (JSON.parse(favouritesStorage)) {
      favouritesArray = JSON.parse(favouritesStorage);
      favouritesArray.push(photo);
      localStorage.setItem('favourites', JSON.stringify(favouritesArray));
    } else {
      favouritesArray.push(photo);
      localStorage.setItem('favourites', JSON.stringify(favouritesArray));
    }
  }

  trackByFn(index: number) {
    return index;
  }


  onScroll(e: any) {
    this.fetchPhotos();
  }


  fetchPhotos() {
    for (let index = 0; index < 15; index++) {
      let imageUrl = "https://picsum.photos/450/450?" + index;
      fetch(imageUrl)
        .then(response => {
          this.images.push(response.url);
        });
    }
  }

  ngOnDestroy() {

  }
}
