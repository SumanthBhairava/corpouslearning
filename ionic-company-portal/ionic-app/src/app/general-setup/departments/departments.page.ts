import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DepartmentApiItem, DepartmentsApiService } from '../../services/departments-api.service';

interface Department { id: string; name: string; description: string; icon: string; color: string; memberCount: number; openRoles: number; }

@Component({ selector: 'app-departments', templateUrl: './departments.page.html', styleUrls: ['./departments.page.scss'] })
export class DepartmentsPage implements OnInit {
  tenantId = 'default';
  showModal = false; editMode = false; editingId: string | null = null;
  isLoading = false;
  errorMessage = '';
  submitted = false;
  formErrors = { name: '', description: '' };
  form = { name: '', description: '' };

  departments: Department[] = [];

  constructor(private authService: AuthService, private departmentsApi: DepartmentsApiService) {}

  ngOnInit() {
    this.tenantId = this.resolveTenantId();
    this.loadDepartments();
  }

  loadDepartments() {
    this.errorMessage = '';
    this.isLoading = true;
    this.departmentsApi.listDepartments(this.tenantId.trim()).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.departments = (res.departments || []).map((d) => this.mapFromApi(d));
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.detail || 'Failed to load departments.';
      }
    });
  }

  get canManageDepartments(): boolean {
    const role = (this.authService.currentUser?.role || '').toLowerCase();
    return role === 'super admin' || role === 'admin';
  }

  get departmentCount(): number {
    return this.departments.length;
  }

  get totalMembers(): number {
    return this.departments.reduce((sum, d) => sum + d.memberCount, 0);
  }

  get totalOpenRoles(): number {
    return this.departments.reduce((sum, d) => sum + d.openRoles, 0);
  }

  openModal() {
    if (!this.canManageDepartments) return;
    this.submitted = false;
    this.formErrors = { name: '', description: '' };
    this.form = { name: '', description: '' };
    this.editMode = false;
    this.editingId = null;
    this.showModal = true;
  }
  
  editDept(d: Department) {
    if (!this.canManageDepartments) return;
    this.submitted = false;
    this.formErrors = { name: '', description: '' };
    this.form = { name: d.name, description: d.description };
    this.editingId = d.id;
    this.editMode = true;
    this.showModal = true;
  }
  
  deleteDept(d: Department) {
    if (!this.canManageDepartments) return;
    if (confirm(`Delete "${d.name}" department?`)) {
      this.departmentsApi.deleteDepartment(d.id, this.tenantId.trim()).subscribe({
        next: () => {
          this.departments = this.departments.filter((x) => x.id !== d.id);
        },
        error: (err) => {
          this.errorMessage = err?.error?.detail || 'Failed to delete department.';
        }
      });
    }
  }
  
  saveDept() {
    if (!this.canManageDepartments) return;
    this.submitted = true;
    if (!this.validateForm()) {
      return;
    }

    this.errorMessage = '';
    if (this.editMode && this.editingId) {
      this.departmentsApi.updateDepartment({
        departmentId: this.editingId,
        tenantId: this.tenantId.trim(),
        name: this.form.name.trim(),
        description: this.form.description.trim(),
      }).subscribe({
        next: () => {
          this.showModal = false;
          this.loadDepartments();
        },
        error: (err) => {
          this.errorMessage = err?.error?.detail || 'Failed to update department.';
        }
      });
    } else {
      this.departmentsApi.createDepartment({
        tenantId: this.tenantId.trim(),
        name: this.form.name.trim(),
        description: this.form.description.trim(),
      }).subscribe({
        next: () => {
          this.showModal = false;
          this.loadDepartments();
        },
        error: (err) => {
          this.errorMessage = err?.error?.detail || 'Failed to create department.';
        }
      });
    }
  }
  
  closeModal(e: any) {
    if (!e || e.target === e.currentTarget) {
      this.showModal = false;
      this.submitted = false;
      this.formErrors = { name: '', description: '' };
    }
  }

  private validateForm(): boolean {
    this.formErrors = { name: '', description: '' };
    let valid = true;

    if (!this.form.name.trim()) {
      this.formErrors.name = 'Department name is required.';
      valid = false;
    }
    if (!this.form.description.trim()) {
      this.formErrors.description = 'Description is required.';
      valid = false;
    }

    return valid;
  }

  private mapFromApi(d: DepartmentApiItem): Department {
    return {
      id: d.id,
      name: d.name,
      description: d.description || '',
      icon: d.icon,
      color: d.color,
      memberCount: d.member_count || 0,
      openRoles: d.open_roles || 0,
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
