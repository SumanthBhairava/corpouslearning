import { Component, OnInit } from '@angular/core';
import { RolesApiService, RoleApiItem } from '../../services/roles-api.service';
import { AuthService } from '../../services/auth.service';

interface Role {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  userCount: number;
  level: 'high' | 'medium' | 'low';
  perms: string[];
}

type PermissionAction = 'view' | 'create' | 'edit' | 'delete';

interface PermissionRow {
  key: string;
  label: string;
}

interface PermissionColumn {
  key: PermissionAction;
  label: string;
}

@Component({ selector: 'app-roles', templateUrl: './roles.page.html', styleUrls: ['./roles.page.scss'] })
export class RolesPage implements OnInit {
  tenantId = 'default';
  showModal = false;
  editMode = false;
  editingId: string | null = null;
  isLoading = false;
  errorMessage = '';
  submitted = false;
  formErrors = { name: '', description: '' };

  form = { name: '', description: '', level: 'medium' as 'high' | 'medium' | 'low', perms: [] as string[] };
  permissionRows: PermissionRow[] = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'injection', label: 'Injection' },
    { key: 'analyse', label: 'Analyse' },
    { key: 'workflow', label: 'Workflow' },
    { key: 'users', label: 'Users' },
    { key: 'roles', label: 'Roles' },
    { key: 'departments', label: 'Departments' },
  ];
  permissionColumns: PermissionColumn[] = [
    { key: 'view', label: 'View' },
    { key: 'create', label: 'Create' },
    { key: 'edit', label: 'Edit' },
    { key: 'delete', label: 'Delete' },
  ];
  permissionMatrix: Record<string, Record<PermissionAction, boolean>> = {};

  roles: Role[] = [];

  constructor(private rolesApi: RolesApiService, private authService: AuthService) {}

  ngOnInit() {
    this.tenantId = this.resolveTenantId();
    this.loadRoles();
  }

  loadRoles(): void {
    this.errorMessage = '';
    this.isLoading = true;
    this.rolesApi.listRoles(this.tenantId.trim()).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.roles = (res.roles || []).map((r) => this.mapFromApi(r));
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.detail || 'Failed to load roles.';
      }
    });
  }

  get canManageRoles(): boolean {
    const role = (this.authService.currentUser?.role || '').toLowerCase();
    return role === 'super admin' || role === 'admin';
  }

  get roleCount(): number {
    return this.roles.length;
  }

  get totalPermissions(): number {
    return this.roles.reduce((sum, role) => sum + (role.perms?.length || 0), 0);
  }

  get totalAssignedUsers(): number {
    return this.roles.reduce((sum, role) => sum + role.userCount, 0);
  }


  openModal() {
    this.submitted = false;
    this.formErrors = { name: '', description: '' };
    this.form = { name: '', description: '', level: 'medium', perms: [] };
    this.resetPermissionMatrix();
    this.editMode = false;
    this.editingId = null;
    this.showModal = true;
  }

  editRole(r: Role) {
    this.submitted = false;
    this.formErrors = { name: '', description: '' };
    this.form = { name: r.name, description: r.description, level: r.level, perms: [...r.perms] };
    this.resetPermissionMatrix();
    this.applyPermissionsToMatrix(this.form.perms);
    this.editingId = r.id;
    this.editMode = true;
    this.showModal = true;
  }

  deleteRole(r: Role) {
    if (!confirm(`Delete role "${r.name}"?`)) return;

    this.errorMessage = '';
    this.rolesApi.deleteRole(r.id, this.tenantId.trim()).subscribe({
      next: () => this.loadRoles(),
      error: (err) => {
        this.errorMessage = err?.error?.detail || 'Failed to delete role.';
      }
    });
  }

  saveRole() {
    this.submitted = true;
    if (!this.validateForm()) {
      return;
    }
    this.form.perms = this.buildPermissionsFromMatrix();

    this.errorMessage = '';
    if (this.editMode && this.editingId) {
      this.rolesApi.updateRole({
        roleId: this.editingId,
        tenantId: this.tenantId.trim(),
        name: this.form.name.trim(),
        description: this.form.description.trim(),
        accessLevel: this.form.level,
        permissions: this.form.perms,
      }).subscribe({
        next: () => {
          this.showModal = false;
          this.loadRoles();
        },
        error: (err) => {
          this.errorMessage = err?.error?.detail || 'Failed to update role.';
        }
      });
    } else {
      this.rolesApi.createRole({
        tenantId: this.tenantId.trim(),
        name: this.form.name.trim(),
        description: this.form.description.trim(),
        accessLevel: this.form.level,
        permissions: this.form.perms,
      }).subscribe({
        next: () => {
          this.showModal = false;
          this.loadRoles();
        },
        error: (err) => {
          this.errorMessage = err?.error?.detail || 'Failed to create role.';
        }
      });
    }
  }

  closeModal(e: Event | null) {
    if (!e || (e.target === e.currentTarget)) {
      this.showModal = false;
      this.submitted = false;
      this.formErrors = { name: '', description: '' };
      this.resetPermissionMatrix();
    }
  }

  isPermissionChecked(menuKey: string, action: PermissionAction): boolean {
    return !!this.permissionMatrix[menuKey]?.[action];
  }

  togglePermission(menuKey: string, action: PermissionAction, checked: boolean): void {
    if (!this.permissionMatrix[menuKey]) {
      return;
    }
    this.permissionMatrix[menuKey][action] = checked;
  }

  isRowFullySelected(menuKey: string): boolean {
    const state = this.permissionMatrix[menuKey];
    if (!state) return false;
    return state.view && state.create && state.edit && state.delete;
  }

  toggleRowPermissions(menuKey: string, checked: boolean): void {
    const state = this.permissionMatrix[menuKey];
    if (!state) return;
    state.view = checked;
    state.create = checked;
    state.edit = checked;
    state.delete = checked;
  }

  isColumnFullySelected(action: PermissionAction): boolean {
    for (const row of this.permissionRows) {
      if (!this.permissionMatrix[row.key]?.[action]) {
        return false;
      }
    }
    return true;
  }

  toggleColumnPermissions(action: PermissionAction, checked: boolean): void {
    for (const row of this.permissionRows) {
      const state = this.permissionMatrix[row.key];
      if (!state) continue;
      state[action] = checked;
    }
  }

  areAllPermissionsSelected(): boolean {
    for (const row of this.permissionRows) {
      const state = this.permissionMatrix[row.key];
      if (!state || !state.view || !state.create || !state.edit || !state.delete) {
        return false;
      }
    }
    return true;
  }

  toggleAllPermissions(checked: boolean): void {
    for (const row of this.permissionRows) {
      const state = this.permissionMatrix[row.key];
      if (!state) continue;
      state.view = checked;
      state.create = checked;
      state.edit = checked;
      state.delete = checked;
    }
  }

  private validateForm(): boolean {
    this.formErrors = { name: '', description: '' };
    let valid = true;

    if (!this.form.name.trim()) {
      this.formErrors.name = 'Role name is required.';
      valid = false;
    }
    if (!this.form.description.trim()) {
      this.formErrors.description = 'Description is required.';
      valid = false;
    }
    return valid;
  }

  private resetPermissionMatrix(): void {
    const base: Record<string, Record<PermissionAction, boolean>> = {};
    for (const row of this.permissionRows) {
      base[row.key] = { view: false, create: false, edit: false, delete: false };
    }
    this.permissionMatrix = base;
  }

  private applyPermissionsToMatrix(permissions: string[]): void {
    const set = new Set((permissions || []).map((p) => String(p || '').trim().toLowerCase()));
    const hasWildcard = set.has('*') || set.has('admin:*');

    for (const row of this.permissionRows) {
      const menu = row.key;
      const readPerm = `admin:${menu}:read`;
      const writePerm = `admin:${menu}:write`;
      const createPerm = `admin:${menu}:create`;
      const editPerm = `admin:${menu}:edit`;
      const deletePerm = `admin:${menu}:delete`;
      const viewPerm = `admin:${menu}:view`;

      this.permissionMatrix[menu].view =
        hasWildcard || set.has(readPerm) || set.has(viewPerm) || set.has(writePerm);
      this.permissionMatrix[menu].create =
        hasWildcard || set.has(writePerm) || set.has(createPerm);
      this.permissionMatrix[menu].edit =
        hasWildcard || set.has(writePerm) || set.has(editPerm);
      this.permissionMatrix[menu].delete =
        hasWildcard || set.has(writePerm) || set.has(deletePerm);
    }
  }

  private buildPermissionsFromMatrix(): string[] {
    const output = new Set<string>();
    for (const row of this.permissionRows) {
      const menu = row.key;
      const state = this.permissionMatrix[menu];
      if (!state) continue;

      if (state.view) {
        output.add(`admin:${menu}:read`);
        output.add(`admin:${menu}:view`);
      }
      if (state.create || state.edit || state.delete) {
        output.add(`admin:${menu}:write`);
      }
      if (state.create) output.add(`admin:${menu}:create`);
      if (state.edit) output.add(`admin:${menu}:edit`);
      if (state.delete) output.add(`admin:${menu}:delete`);
    }
    return Array.from(output);
  }

  private mapFromApi(r: RoleApiItem): Role {
    const style = this.styleForLevel(r.access_level);
    return {
      id: r.id,
      name: r.name,
      description: r.description,
      icon: style.icon,
      iconBg: style.iconBg,
      iconColor: style.iconColor,
      userCount: r.user_count || 0,
      level: r.access_level,
      perms: Array.isArray(r.permissions) ? r.permissions : [],
    };
  }

  private styleForLevel(level: 'high' | 'medium' | 'low'): { icon: string; iconBg: string; iconColor: string } {
    if (level === 'high') {
      return {
        icon: 'shield-checkmark-outline',
        iconBg: 'rgba(239,68,68,0.1)',
        iconColor: '#EF4444',
      };
    }
    if (level === 'medium') {
      return {
        icon: 'person-circle-outline',
        iconBg: 'rgba(232,160,32,0.1)',
        iconColor: '#E8A020',
      };
    }
    return {
      icon: 'eye-outline',
      iconBg: 'rgba(16,185,129,0.1)',
      iconColor: '#10B981',
    };
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
