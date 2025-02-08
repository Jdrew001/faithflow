import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isCollapsed = true; // Single variable to control the sidebar

  sidebarItems = [
    { label: 'Dashboard', routerLink: '/dashboard', icon: 'pi pi-home' },
    { label: 'Settings', routerLink: '/settings', icon: 'pi pi-cog' },
    // Add more items here
  ];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUserInformation();
  }

  // Check if the current screen is mobile
  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    console.log('Logout clicked');
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (!this.isMobile()) {
      // Ensure the sidebar is expanded when moving to desktop
      this.isCollapsed = false;
    }
  }
}