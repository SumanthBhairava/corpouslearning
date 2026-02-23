import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidebarCollapsed = false;
  @Output() openMobileMenu = new EventEmitter<void>();

  user: User | null = null;
  searchQuery = '';
  userMenuOpen = false;
  notifOpen = false;
  currentPageTitle = 'Dashboard';

  private routeTitles: Record<string, string> = {
    '/app/dashboard': 'Dashboard',
    '/app/general-setup/users': 'Users',
    '/app/general-setup/roles': 'Roles',
    '/app/general-setup/departments': 'Departments',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.currentUser;
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.currentPageTitle = this.routeTitles[e.urlAfterRedirects] || 'Page';
      this.userMenuOpen = false;
      this.notifOpen = false;
    });
  }

  get userInitials(): string {
    if (!this.user?.name) return 'U';
    return this.user.name.split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase();
  }

  onOpenMenu() {
    this.openMobileMenu.emit();
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
    this.notifOpen = false;
  }

  toggleNotifications() {
    this.notifOpen = !this.notifOpen;
    this.userMenuOpen = false;
  }

  markAllRead() {
    this.notifOpen = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.closest('.header-user') && !target.closest('.user-dropdown')) {
      this.userMenuOpen = false;
    }
    if (!target.closest('.notification-btn') && !target.closest('.notif-panel')) {
      this.notifOpen = false;
    }
  }
}
