import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpHelperService } from './http-helper.service';
import { TokenModel } from '../models/token.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: string | null = null; // Access token stored in memory
  private refreshTokenKey = 'refreshToken'; // Key to store the refresh token

  constructor(
    private readonly httpService: HttpHelperService,
    private readonly router: Router
  ) {}

  refreshAccessToken(): Observable<{ accessToken: string }> {
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
      console.error('No refresh token found -- redirecting to login');
      this.router.navigate(['/auth/login']);
    }

    return this.httpService.post<TokenModel>('auth/refresh', { refreshToken }).pipe(
      tap((response) => {
        this.setAccessToken(response.accessToken);
        this.setRefreshToken(response.refreshToken);
      })
    );
  }

  // Save the refresh token to localStorage or sessionStorage
  setRefreshToken(refreshToken: string): void {
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  // Get the refresh token
  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  // Remove the refresh token (on logout)
  clearTokens(): void {
    this.accessToken = null;
    localStorage.removeItem(this.refreshTokenKey);
  }

  // Set the access token in memory
  setAccessToken(token: string): void {
    sessionStorage.setItem('accessToken', token);
  }

  // Get the access token from memory
  getAccessToken(): string | null {
    return sessionStorage.getItem('accessToken');
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!this.getRefreshToken();
  }
}