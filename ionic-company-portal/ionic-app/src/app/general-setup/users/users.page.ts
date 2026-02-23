import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RoleApiItem, RolesApiService } from '../../services/roles-api.service';
import { DepartmentApiItem, DepartmentsApiService } from '../../services/departments-api.service';
import { UserApiItem, UsersApiService } from '../../services/users-api.service';

interface User {
  id: string; name: string; username: string; role: string; dept: string;
  active: boolean; lastLogin: string; initials: string; avatarBg: string;
}

@Component({ selector: 'app-users', templateUrl: './users.page.html', styleUrls: ['./users.page.scss'] })
export class UsersPage implements OnInit {
  tenantId = 'default';
  searchQuery = ''; roleFilter = ''; statusFilter = '';
  showModal = false; editMode = false;
  isLoading = false;
  errorMessage = '';

  form = { name: '', username: '', role: '', dept: '', password: '' };
  formErrors = { name: '', username: '', role: '', dept: '', password: '' };
  submitted = false;
  editingId: string | null = null;

  roleOptions: string[] = [];
  deptOptions: string[] = [];

  avatarBgs = ['linear-gradient(135deg,#3B82F6,#60A5FA)', 'linear-gradient(135deg,#10B981,#34D399)',
    'linear-gradient(135deg,#8B5CF6,#A78BFA)', 'linear-gradient(135deg,#EF4444,#F87171)',
    'linear-gradient(135deg,#E8A020,#F5B942)', 'linear-gradient(135deg,#EC4899,#F472B6)'];

  users: User[] = [];

  filtered: User[] = [];

  constructor(
    private authService: AuthService,
    private usersApi: UsersApiService,
    private rolesApi: RolesApiService,
    private departmentsApi: DepartmentsApiService
  ) {}

  ngOnInit() {
    this.tenantId = this.resolveTenantId();
    this.loadUsers();
    this.loadRoleOptions();
    this.loadDepartmentOptions();
  }

  get canManageUsers(): boolean {
    const role = (this.authService.currentUser?.role || '').toLowerCase();
    return role === 'super admin' || role === 'admin';
  }

  get totalUsers(): number {
    return this.users.length;
  }

  get activeUsers(): number {
    return this.users.filter((u) => u.active).length;
  }

  get inactiveUsers(): number {
    return this.users.filter((u) => !u.active).length;
  }

  loadUsers() {
    this.errorMessage = '';
    this.isLoading = true;
    this.usersApi.listUsers(this.tenantId.trim()).subscribe({
      next: (res) => {
        this.isLoading = false;
        const visibleUsers = (res.users || []).filter((u) => !this.isCompanyLoginUser(u) && !this.isCurrentLoginUser(u));
        this.users = visibleUsers.map((u, idx) => this.mapFromApi(u, idx));
        this.filter();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.detail || 'Failed to load users.';
      }
    });
  }

  loadRoleOptions() {
    this.rolesApi.listRoles(this.tenantId.trim()).subscribe({
      next: (res) => {
        const names = (res.roles || []).map((r: RoleApiItem) => r.name).filter(Boolean);
        this.roleOptions = Array.from(new Set(names));
      }
    });
  }

  loadDepartmentOptions() {
    this.departmentsApi.listDepartments(this.tenantId.trim()).subscribe({
      next: (res) => {
        const names = (res.departments || []).map((d: DepartmentApiItem) => d.name).filter(Boolean);
        this.deptOptions = Array.from(new Set(names));
      }
    });
  }

  filter() {
    this.filtered = this.users.filter(u => {
      const matchSearch = !this.searchQuery || u.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || u.username.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchRole = !this.roleFilter || u.role === this.roleFilter;
      const matchStatus = !this.statusFilter || (this.statusFilter === 'active' ? u.active : !u.active);
      return matchSearch && matchRole && matchStatus;
    });
  }

  openModal() {
    if (!this.canManageUsers) return;
    this.submitted = false;
    this.formErrors = { name: '', username: '', role: '', dept: '', password: '' };
    this.form = {
      name: '',
      username: '',
      role: this.roleOptions[0] || '',
      dept: this.deptOptions[0] || '',
      password: ''
    };
    this.editMode = false;
    this.editingId = null;
    this.showModal = true;
  }
  
  editUser(u: User) {
    if (!this.canManageUsers) return;
    this.submitted = false;
    this.formErrors = { name: '', username: '', role: '', dept: '', password: '' };
    this.form = { name: u.name, username: u.username, role: u.role, dept: u.dept, password: '' };
    this.editingId = u.id; this.editMode = true; this.showModal = true;
  }

  saveUser() {
    if (!this.canManageUsers) return;
    this.submitted = true;
    this.errorMessage = '';
    if (!this.validateForm()) return;

    const { firstName, lastName } = this.splitName(this.form.name);
    if (this.editMode && this.editingId) {
      this.usersApi.updateUser({
        userId: this.editingId,
        tenantId: this.tenantId.trim(),
        username: this.form.username.trim().toLowerCase(),
        firstName: firstName,
        lastName: lastName,
        email: this.form.username.trim().toLowerCase(),
        roleName: this.form.role,
        departmentName: this.form.dept,
        isActive: true,
        password: this.form.password.trim() || undefined,
      }).subscribe({
        next: () => {
          this.showModal = false;
          this.loadUsers();
        },
        error: (err) => {
          this.errorMessage = err?.error?.detail || 'Failed to update user.';
        }
      });
    } else {
      this.usersApi.createUser({
        tenantId: this.tenantId.trim(),
        username: this.form.username.trim().toLowerCase(),
        firstName: firstName,
        lastName: lastName,
        email: this.form.username.trim().toLowerCase(),
        roleName: this.form.role,
        departmentName: this.form.dept,
        isActive: true,
        password: this.form.password.trim() || undefined,
      }).subscribe({
        next: () => {
          this.showModal = false;
          this.loadUsers();
        },
        error: (err) => {
          this.errorMessage = err?.error?.detail || 'Failed to create user.';
        }
      });
    }
  }

  deleteUser(u: User) {
    if (!this.canManageUsers) return;
    if (confirm(`Delete user "${u.name}"?`)) {
      this.usersApi.deleteUser(u.id, this.tenantId.trim()).subscribe({
        next: () => {
          this.users = this.users.filter((x) => x.id !== u.id);
          this.filter();
        },
        error: (err) => {
          this.errorMessage = err?.error?.detail || 'Failed to delete user.';
        }
      });
    }
  }

  toggleStatus(u: User) {
    if (!this.canManageUsers) return;
    const { firstName, lastName } = this.splitName(u.name);
    this.usersApi.updateUser({
      userId: u.id,
      tenantId: this.tenantId.trim(),
      username: u.username,
      firstName: firstName,
      lastName: lastName,
      email: u.username,
      roleName: u.role,
      departmentName: u.dept,
      isActive: !u.active,
    }).subscribe({
      next: () => {
        u.active = !u.active;
        this.filter();
      }
    });
  }

  closeModal(e: any) {
    if (!e || e.target === e.currentTarget) {
      this.showModal = false;
      this.submitted = false;
      this.formErrors = { name: '', username: '', role: '', dept: '', password: '' };
    }
  }

  private mapFromApi(u: UserApiItem, idx: number): User {
    const first = (u.first_name || '').trim();
    const last = (u.last_name || '').trim();
    const fullName = `${first} ${last}`.trim() || u.email;
    const initials = `${first[0] || ''}${last[0] || first[1] || ''}`.toUpperCase() || 'U';
    return {
      id: u.id,
      name: fullName,
      username: u.username || u.email,
      role: u.role_name || 'Unassigned',
      dept: u.department_name || 'Unassigned',
      active: !!u.is_active,
      lastLogin: u.last_login_at ? new Date(u.last_login_at).toLocaleString() : 'Never',
      initials,
      avatarBg: this.avatarBgs[idx % this.avatarBgs.length],
    };
  }

  private splitName(name: string): { firstName: string; lastName: string } {
    const parts = name.trim().split(/\s+/);
    return { firstName: parts[0] || '', lastName: parts.slice(1).join(' ') };
  }

  private validateForm(): boolean {
    this.formErrors = { name: '', username: '', role: '', dept: '', password: '' };
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.form.name.trim()) {
      this.formErrors.name = 'Please fill this field.';
      valid = false;
    }
    if (!this.form.username.trim()) {
      this.formErrors.username = 'Please fill this field.';
      valid = false;
    } else if (!emailRegex.test(this.form.username.trim())) {
      this.formErrors.username = 'Username must be like admin@gmail.com.';
      valid = false;
    }
    if (!this.form.role.trim()) {
      this.formErrors.role = 'Please fill this field.';
      valid = false;
    }
    if (!this.form.dept.trim()) {
      this.formErrors.dept = 'Please fill this field.';
      valid = false;
    }
    if (!this.editMode && !this.form.password.trim()) {
      this.formErrors.password = 'Please fill this field.';
      valid = false;
    }
    return valid;
  }

  private isCompanyLoginUser(user: UserApiItem): boolean {
    const normalizedRole = String(user.role_name || '')
      .trim()
      .toLowerCase()
      .replace(/[\s-]+/g, '_');
    return normalizedRole === 'company_owner' || normalizedRole === 'owner';
  }

  private isCurrentLoginUser(user: UserApiItem): boolean {
    const current = this.authService.currentUser;
    if (!current) return false;

    const currentId = String(current.id || '').trim().toLowerCase();
    const currentUsername = String(current.username || '').trim().toLowerCase();
    const currentEmail = String(current.email || '').trim().toLowerCase();

    const userId = String(user.id || '').trim().toLowerCase();
    const userUsername = String(user.username || '').trim().toLowerCase();
    const userEmail = String(user.email || '').trim().toLowerCase();

    const sameId = !!currentId && !!userId && currentId === userId;
    const sameUsername = !!currentUsername && !!userUsername && currentUsername === userUsername;
    const sameEmail = !!currentEmail && !!userEmail && currentEmail === userEmail;
    return sameId || sameUsername || sameEmail;
  }

  private resolveTenantId(): string {
    return (
      this.authService.currentUser?.tenant_id ||
      localStorage.getItem('lastTenant') ||
      this.tenantId ||
      'default'
    )
      .toString()
      .trim();
  }
}
