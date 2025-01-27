import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Check if the user has a valid access token
    const token = this.authService.getAccessToken();
    if (token) {
      return true; // Allow navigation
    }

    // No token found, redirect to login
    this.router.navigate(['/auth/login']);
    return false;
  }
}