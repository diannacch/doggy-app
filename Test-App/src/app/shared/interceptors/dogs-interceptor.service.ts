import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AppConfig } from '../models/config';
import { Observable } from 'rxjs';
import { WINDOWS_ROOT_OBJECT } from 'src/app/const/const';

@Injectable({
  providedIn: 'root'
})
export class DogsInterceptorService implements HttpInterceptor {

  constructor(@Inject('CONFIGURATION') private config: AppConfig, @Inject(WINDOWS_ROOT_OBJECT) private window: Window) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const request = req.clone({
      headers: req.headers.set('X-Api-Key', this.config.apiKeys.dogsKey)
    });

    return next.handle(request);
  }
}
