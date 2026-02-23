import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface DepartmentApiItem {
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  head: string;
  icon: string;
  color: string;
  budget: string;
  member_count: number;
  open_roles: number;
  utilization: number;
  created_at: string;
  updated_at: string;
}

@Injectable()
export class DepartmentsApiService {
  private readonly baseUrl = environment.authServiceApiUrl || 'http://localhost:8003';

  constructor(private http: HttpClient) {}

  private authOptions(): { headers?: HttpHeaders } {
    const token = (localStorage.getItem('authToken') || '').trim().replace(/^\"+|\"+$/g, '').replace(/^bearer\s+/i, '');
    if (!token) {
      return {};
    }
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  listDepartments(tenantId: string): Observable<{ tenant_id: string; total: number; departments: DepartmentApiItem[] }> {
    return this.http.get<{ tenant_id: string; total: number; departments: DepartmentApiItem[] }>(
      `${this.baseUrl}/admin/departments?tenant_id=${encodeURIComponent(tenantId)}`,
      this.authOptions()
    );
  }

  createDepartment(payload: {
    tenantId: string;
    name: string;
    description: string;
    head?: string;
    icon?: string;
    color?: string;
    budget?: string;
  }): Observable<DepartmentApiItem> {
    return this.http.post<DepartmentApiItem>(
      `${this.baseUrl}/admin/departments`,
      {
        tenant_id: payload.tenantId,
        name: payload.name,
        description: payload.description,
        head: payload.head || '',
        icon: payload.icon || 'people-outline',
        color: payload.color || '#3B82F6',
        budget: payload.budget || '',
      },
      this.authOptions()
    );
  }

  updateDepartment(payload: {
    departmentId: string;
    tenantId: string;
    name: string;
    description: string;
    head?: string;
    icon?: string;
    color?: string;
    budget?: string;
  }): Observable<DepartmentApiItem> {
    return this.http.put<DepartmentApiItem>(
      `${this.baseUrl}/admin/departments/${payload.departmentId}`,
      {
        tenant_id: payload.tenantId,
        name: payload.name,
        description: payload.description,
        head: payload.head || '',
        icon: payload.icon || 'people-outline',
        color: payload.color || '#3B82F6',
        budget: payload.budget || '',
      },
      this.authOptions()
    );
  }

  deleteDepartment(departmentId: string, tenantId: string): Observable<{ deleted: boolean; department_id: string }> {
    return this.http.delete<{ deleted: boolean; department_id: string }>(
      `${this.baseUrl}/admin/departments/${departmentId}?tenant_id=${encodeURIComponent(tenantId)}`,
      this.authOptions()
    );
  }
}
