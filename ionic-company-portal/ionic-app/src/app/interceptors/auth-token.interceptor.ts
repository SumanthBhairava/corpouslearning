import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = (localStorage.getItem('authToken') || '')
      .trim()
      .replace(/^"+|"+$/g, '')
      .replace(/^bearer\s+/i, '');
    const isAuthRoute = req.url.includes('/auth/login') || req.url.includes('/auth/register');

    if (!token || isAuthRoute) {
      return next.handle(req);
    }

    const requestWithToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(requestWithToken);
  }
}
