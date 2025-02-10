import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'faithflow';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
