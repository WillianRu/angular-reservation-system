import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class injectSessionInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const excludedRoutes = ['/auth/login', '/auth/register'];
    const requiresAuth = !excludedRoutes.some(url => request.url.includes(url));

    if (requiresAuth) {
      const authToken = localStorage.getItem('token');

      if (authToken) {
        request = request.clone({
          setHeaders: {
            'Authorization': `Bearer ${authToken}`
          }
        });
      } else {
        console.log('No auth token available.');
      }
    } else {
      console.log('Request does not require auth:', request);
    }

    return next.handle(request);
  }
}
