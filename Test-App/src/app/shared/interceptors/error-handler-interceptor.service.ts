import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const skipValue = request.headers.get('SkipKey') ?? '';
    if (request.headers && request.headers.has(skipValue)) {
      const headers = request.headers
        .delete(skipValue)
        .delete('SkipKey');
      return next.handle(request.clone({ headers }));
    }
    return next.handle(request).pipe(catchError(error => {
      throw (error);
    }));
  }
}
