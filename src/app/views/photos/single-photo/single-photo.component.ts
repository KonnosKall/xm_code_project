import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPicsumImage } from 'src/app/interfaces/i-image';
import { IPhoto } from 'src/app/interfaces/i-photo';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss']
})
export class SinglePhotoComponent implements OnInit {
  public photoID!: string | null;
  public photo!: IPicsumImage;
  public isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotosService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initSinglePhoto();
  }

  async initSinglePhoto() {
    await this.retrieveParamPhotoIDs();
    await this.fetchPhotoInfo();
  }

  toggleLoading() {
    console.log(this.isLoading);
    this.isLoading = !this.isLoading;
  }

  async retrieveParamPhotoIDs() {
    this.route.paramMap.subscribe(params => {
      this.photoID = params.get('id');
    });
  }

  async fetchPhotoInfo() {
    this.toggleLoading();
    this.photoService.getPhoto(this.photoID).subscribe(res => {
      console.log(res);
      this.photo = res;
      this.toggleLoading();
    })
  }

  removeFromFavourites() {
    this.checkFavouriteStorage();
  }

  checkFavouriteStorage() {
    const favourites: IPhoto[] = this.localStorageService.fetchFavouritesStorage();
    const foundFavouriteIndex: number = favourites.findIndex(favourite => favourite.id === this.photoID);
    if (foundFavouriteIndex > -1) {
      favourites.splice(foundFavouriteIndex, 1);
      this.storeUpdatedFavourites(favourites);
      this.returnToFavourites();
    }
  }

  storeUpdatedFavourites(updatedFavourites: IPhoto[]) {
    this.localStorageService.setFavouritesStorage(updatedFavourites);
  }

  returnToFavourites() {
    this.router.navigate(['favourites']);
  }

}
