import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() collapsed = false;
  @Output() toggleCollapse = new EventEmitter<void>();
  @Output() closeMobile = new EventEmitter<void>();

  user: User | null = null;
  generalSetupOpen = true;
  private readonly menuPermissionMap: Record<string, string[]> = {
    dashboard: [], // all authenticated users
    injection: [
      'admin:injection:view',
      'admin:injection:read',
      'admin:injection:create',
      'admin:injection:edit',
      'admin:injection:delete',
      'admin:injection:write',
      'admin:*',
      '*',
    ],
    analyse: [], // all authenticated users
    workflow: [], // all authenticated users
    users: [
      'admin:users:view',
      'admin:users:read',
      'admin:users:create',
      'admin:users:edit',
      'admin:users:delete',
      'admin:users:write',
      'admin:*',
      '*',
    ],
    roles: [
      'admin:roles:view',
      'admin:roles:read',
      'admin:roles:create',
      'admin:roles:edit',
      'admin:roles:delete',
      'admin:roles:write',
      'admin:*',
      '*',
    ],
    departments: [
      'admin:departments:view',
      'admin:departments:read',
      'admin:departments:create',
      'admin:departments:edit',
      'admin:departments:delete',
      'admin:departments:write',
      'admin:*',
      '*',
    ],
  };
  private readonly fallbackRoleMenuMap: Record<string, Set<string>> = {
    super_admin: new Set(['dashboard', 'injection', 'analyse', 'workflow', 'users', 'roles', 'departments']),
    admin: new Set(['dashboard', 'injection', 'analyse', 'workflow', 'users', 'roles', 'departments']),
    company_owner: new Set(['dashboard', 'injection', 'analyse', 'workflow', 'users', 'roles', 'departments']),
    owner: new Set(['dashboard', 'injection', 'analyse', 'workflow', 'users', 'roles', 'departments']),
    manager: new Set(['dashboard', 'analyse', 'workflow', 'users', 'roles', 'departments']),
    user: new Set(['dashboard', 'analyse', 'workflow']),
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.currentUser;
  }

  get canSeeGeneralSetup(): boolean {
    return this.canAccess('users') || this.canAccess('roles') || this.canAccess('departments');
  }

  get userInitials(): string {
    if (!this.user?.name) return 'U';
    const parts = this.user.name.split(' ');
    return parts.map(p => p[0]).join('').substring(0, 2).toUpperCase();
  }

  onToggle() {
    this.toggleCollapse.emit();
  }

  onClose() {
    this.closeMobile.emit();
  }

  toggleGeneralSetup() {
    this.generalSetupOpen = !this.generalSetupOpen;
  }

  canAccess(menu: string): boolean {
    const requiredPermissions = this.menuPermissionMap[menu] || [];
    if (!requiredPermissions.length) {
      return true;
    }

    const granted = (this.user?.permissions || [])
      .map((p) => String(p || '').trim().toLowerCase())
      .filter((p) => !!p);

    if (!granted.length) {
      const role = this.normalizeRole(this.user?.role || '');
      return !!this.fallbackRoleMenuMap[role]?.has(menu);
    }

    return requiredPermissions.some((required) => this.hasPermission(granted, required.toLowerCase()));
  }

  private hasPermission(grantedPermissions: string[], required: string): boolean {
    return grantedPermissions.some((granted) => {
      if (granted === '*' || granted === required) {
        return true;
      }
      if (granted.endsWith('*')) {
        return required.startsWith(granted.slice(0, -1));
      }
      return false;
    });
  }

  private normalizeRole(role: string): string {
    return role.trim().toLowerCase().replace(/[\s-]+/g, '_');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
