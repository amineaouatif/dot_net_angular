import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(readonly authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const basicAuthHeader = this.authService.getAuthorizationHeader();
    if (!!basicAuthHeader) {
      request = request.clone({
        setHeaders: {
          Authorization: `basic ${basicAuthHeader}`,
        },
      });
    }
    return next.handle(request);
  }
}
