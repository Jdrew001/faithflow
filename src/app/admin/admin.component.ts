import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  isCollapsed = true; // Single variable to control the sidebar

  sidebarItems = [
    { label: 'Dashboard', routerLink: '/dashboard', icon: 'pi pi-home' },
    { label: 'Settings', routerLink: '/settings', icon: 'pi pi-cog' },
    // Add more items here
  ];

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