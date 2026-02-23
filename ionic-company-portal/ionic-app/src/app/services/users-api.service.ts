import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface UserApiItem {
  id: string;
  tenant_id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  role_name: string;
  department_name: string;
  is_active: boolean;
  last_login_at: string | null;
  created_at: string;
  updated_at: string;
}

@Injectable()
export class UsersApiService {
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

  listUsers(tenantId: string): Observable<{ tenant_id: string; total: number; users: UserApiItem[] }> {
    return this.http.get<{ tenant_id: string; total: number; users: UserApiItem[] }>(
      `${this.baseUrl}/admin/users?tenant_id=${encodeURIComponent(tenantId)}`,
      this.authOptions()
    );
  }

  createUser(payload: {
    tenantId: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    roleName: string;
    departmentName: string;
    isActive: boolean;
    password?: string;
  }): Observable<UserApiItem> {
    return this.http.post<UserApiItem>(
      `${this.baseUrl}/admin/users`,
      {
        tenant_id: payload.tenantId,
        username: payload.username,
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        role_name: payload.roleName,
        department_name: payload.departmentName,
        is_active: payload.isActive,
        password: payload.password || undefined,
      },
      this.authOptions()
    );
  }

  updateUser(payload: {
    userId: string;
    tenantId: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    roleName: string;
    departmentName: string;
    isActive: boolean;
    password?: string;
  }): Observable<UserApiItem> {
    return this.http.put<UserApiItem>(
      `${this.baseUrl}/admin/users/${payload.userId}`,
      {
        tenant_id: payload.tenantId,
        username: payload.username,
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        role_name: payload.roleName,
        department_name: payload.departmentName,
        is_active: payload.isActive,
        password: payload.password || undefined,
      },
      this.authOptions()
    );
  }

  deleteUser(userId: string, tenantId: string): Observable<{ deleted: boolean; user_id: string }> {
    return this.http.delete<{ deleted: boolean; user_id: string }>(
      `${this.baseUrl}/admin/users/${userId}?tenant_id=${encodeURIComponent(tenantId)}`,
      this.authOptions()
    );
  }
}
