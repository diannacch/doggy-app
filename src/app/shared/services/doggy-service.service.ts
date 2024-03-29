import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog';
import { InterceptorSkipHeader } from 'src/app/const/const';

@Injectable({
  providedIn: 'root'
})
export class DoggyService {

  constructor(private http: HttpClient,
    @Inject('DOGS_URL') private apiUrl: string,) { }

  private _controller = 'dogs';

  getDogByBreed(breed: string): Observable<Dog[]> {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, 'SkipKey');
    return this.http.get<Dog[]>(`${this.apiUrl}${this._controller}?name=${breed}`, { headers });
  }
}
