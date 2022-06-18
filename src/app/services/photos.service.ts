import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IImage } from '../interfaces/i-image';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private baseUrl: string = 'https://picsum.photos/v2/list';
  private limit: string = 'limit';
  private page: string = 'page';
  constructor(private http: HttpClient) { }

  getPhotos(page: number, limit: number) {
    return this.http.get<IImage[]>(`${this.baseUrl}?${this.limit}=${limit}&${this.page}=${page}`);
  }
}
