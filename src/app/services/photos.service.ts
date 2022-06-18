import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPicsumImage } from '../interfaces/i-image';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private baseUrl: string = 'https://picsum.photos/id/';
  constructor(private http: HttpClient) { }

  getPhoto(id:string | null){
    return this.http.get<IPicsumImage>(`${this.baseUrl}/${id}/info`);
  }
}
