import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { LoginFormService } from './services/login-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  get formGroup() {
    return this.loginFormService.formGroup;
  }

  constructor(
    private loginService: LoginService,
    private loginFormService: LoginFormService,
    private readonly router: Router
  ) { }

  initiateLogin() {
    if (!this.loginFormService.isValid) {
      return; 
    }

    this.loginService.login(this.loginFormService.value).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
  }
}
