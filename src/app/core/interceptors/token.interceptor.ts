import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private hasRedirected = false; // Prevents multiple redirects
  private handlingError = false; // Prevents re-entrance

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAccessToken();

    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && this.handlingError) {
          return this.redirectToLogin(); // Redirect to login if already handling an error
        }
        if (error.status === 401) {
          return this.handle401Error(req, next);
        }
        return throwError(() => error);
      })
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.handlingError = true;
    return this.authService.refreshAccessToken().pipe(
      switchMap(response => {
        this.authService.setAccessToken(response.accessToken);
        req = req.clone({ setHeaders: { Authorization: `Bearer ${response.accessToken}` } });
        return next.handle(req);
      }),
      catchError((refreshError: HttpErrorResponse) => {
        console.error('Refresh token failed:', refreshError);
        return this.redirectToLogin(); // Refresh failed → Redirect to login
      })
    );
  }

  private redirectToLogin(): Observable<never> {
    if (!this.hasRedirected) {
      this.hasRedirected = true; // Ensure we redirect only once
      this.authService.logout();
      this.router.navigate(['/auth/login']);
    }
    return throwError(() => new Error('Redirecting to login...'));
  }
}
