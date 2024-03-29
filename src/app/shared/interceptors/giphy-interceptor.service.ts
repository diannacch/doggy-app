import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { AppConfig } from '../models/config';
import { Observable } from 'rxjs';
import { GiphyKey } from 'src/app/const/const';

@Injectable({
  providedIn: 'root'
})
export class GiphyInterceptorService implements HttpInterceptor {

  constructor(@Inject('CONFIGURATION') private config: AppConfig,) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      params: (req.params ? req.params : new HttpParams())
        .set(GiphyKey, this.config.apiKeys.giphyKey)
    });

    return next.handle(request);
  }
}
