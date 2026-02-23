import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface RoleApiItem {
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  access_level: 'high' | 'medium' | 'low';
  permissions: string[];
  user_count: number;
  created_at: string;
  updated_at: string;
}

@Injectable()
export class RolesApiService {
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

  listRoles(tenantId: string): Observable<{ tenant_id: string; total: number; roles: RoleApiItem[] }> {
    return this.http.get<{ tenant_id: string; total: number; roles: RoleApiItem[] }>(
      `${this.baseUrl}/admin/roles?tenant_id=${encodeURIComponent(tenantId)}`,
      this.authOptions()
    );
  }

  createRole(payload: {
    tenantId: string;
    name: string;
    description: string;
    accessLevel: 'high' | 'medium' | 'low';
    permissions: string[];
  }): Observable<RoleApiItem> {
    return this.http.post<RoleApiItem>(
      `${this.baseUrl}/admin/roles`,
      {
        tenant_id: payload.tenantId,
        name: payload.name,
        description: payload.description,
        access_level: payload.accessLevel,
        permissions: payload.permissions,
      },
      this.authOptions()
    );
  }

  updateRole(payload: {
    roleId: string;
    tenantId: string;
    name: string;
    description: string;
    accessLevel: 'high' | 'medium' | 'low';
    permissions: string[];
  }): Observable<RoleApiItem> {
    return this.http.put<RoleApiItem>(
      `${this.baseUrl}/admin/roles/${payload.roleId}`,
      {
        tenant_id: payload.tenantId,
        name: payload.name,
        description: payload.description,
        access_level: payload.accessLevel,
        permissions: payload.permissions,
      },
      this.authOptions()
    );
  }

  deleteRole(roleId: string, tenantId: string): Observable<{ deleted: boolean; role_id: string }> {
    return this.http.delete<{ deleted: boolean; role_id: string }>(
      `${this.baseUrl}/admin/roles/${roleId}?tenant_id=${encodeURIComponent(tenantId)}`,
      this.authOptions()
    );
  }
}
