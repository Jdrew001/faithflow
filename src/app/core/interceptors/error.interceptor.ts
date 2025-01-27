import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle client-side or network errors
        if (error.error instanceof ErrorEvent) {
          console.error('Client-side error:', error.error.message);
          this.messageService.add({ severity: 'error', summary: 'Client-side error', detail: error.error.message });
        } else {
          // Handle server-side errors
          console.error(`Server-side error: ${error.status} - ${error.message}`);
          this.messageService.add({ severity: 'error', summary: 'Server-side error', detail: `${error.status} - ${error.message}` });
        }

        // Optionally, display an error message or take action
        // Example: Redirect to login page if status is 401
        if (error.status === 401) {
          console.warn('Unauthorized access. Redirecting to login...');
          // Redirect to login or show a modal here
        }

        // Return a user-friendly error message
        return throwError(() => new Error('An unexpected error occurred. Please try again later.'));
      })
    );
  }
}