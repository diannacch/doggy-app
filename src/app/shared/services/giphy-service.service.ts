import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gif } from '../models/gif';
import { ResponseData } from '../models/response-data';
import { InterceptorSkipHeader } from 'src/app/const/const';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient,
    @Inject('GIPHY_URL') private apiUrl: string,) { }

  private _controller = 'search';

  searchGifByFilterText(filterText: string): Observable<ResponseData<Gif[]>> {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, 'X-Api-Key');
    return this.http.get<ResponseData<Gif[]>>(`${this.apiUrl}${this._controller}?q=${filterText}`, { headers });
  }
}
