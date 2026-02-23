import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  company: string;
  tenant_id?: string;
  username?: string;
  permissions?: string[];
  avatar?: string;
}

interface AuthApiResponse {
  access_token: string;
  token_type: string;
  user: User;
}

function normalizeToken(raw: string | null | undefined): string {
  return String(raw || '')
    .trim()
    .replace(/^"+|"+$/g, '')
    .replace(/^bearer\s+/i, '');
}

function decodeBase64Json<T>(value: string): T {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  return JSON.parse(atob(padded)) as T;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = environment.authServiceApiUrl || 'http://localhost:8003';

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    const stored = localStorage.getItem('currentUser');
    const token = normalizeToken(localStorage.getItem('authToken'));
    if (stored && token) {
      this.currentUserSubject.next(JSON.parse(stored));
    } else if (stored && !token) {
      localStorage.removeItem('currentUser');
    }
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  get isLoggedIn(): boolean {
    const token = normalizeToken(localStorage.getItem('authToken'));
    return !!this.currentUserSubject.value && !!token;
  }

  async login(email: string, password: string): Promise<User> {
    const currentTenant = localStorage.getItem('lastTenant') || this.currentUser?.tenant_id || this.currentUser?.company || 'default';
    const response = await firstValueFrom(
      this.http.post<AuthApiResponse>(`${this.baseUrl}/auth/login`, {
        email,
        password,
        tenant_id: currentTenant,
      })
    );

    localStorage.setItem('authToken', normalizeToken(response.access_token));
    localStorage.setItem('currentUser', JSON.stringify(response.user));
    localStorage.setItem('lastTenant', response.user.tenant_id || currentTenant);
    this.currentUserSubject.next(response.user);
    return response.user;
  }

  async register(data: any): Promise<User> {
    const tenant = (data.company || 'default').toString().trim() || 'default';
    const response = await firstValueFrom(
      this.http.post<AuthApiResponse>(`${this.baseUrl}/auth/register`, {
        email: data.email,
        password: data.password,
        first_name: data.firstName || 'User',
        last_name: data.lastName || '',
        company: data.company || '',
        tenant_id: tenant,
      })
    );

    localStorage.setItem('authToken', normalizeToken(response.access_token));
    localStorage.setItem('currentUser', JSON.stringify(response.user));
    localStorage.setItem('lastTenant', response.user.tenant_id || tenant);
    this.currentUserSubject.next(response.user);
    return response.user;
  }

  startSocialAuth(provider: 'google' | 'microsoft', mode: 'login' | 'register', tenantId?: string): void {
    const tenant =
      (tenantId || '').toString().trim() ||
      localStorage.getItem('lastTenant') ||
      this.currentUser?.tenant_id ||
      'default';
    const target = `${this.baseUrl}/auth/oauth/${provider}/start?tenant_id=${encodeURIComponent(tenant)}&mode=${encodeURIComponent(mode)}`;
    window.location.href = target;
  }

  completeSocialAuth(query: { token?: string | null; user?: string | null; error?: string | null }): { ok: boolean; error?: string } {
    if (query.error) {
      return { ok: false, error: query.error };
    }
    const token = normalizeToken(query.token);
    if (!token || !query.user) {
      return { ok: false, error: 'Invalid social auth callback.' };
    }

    try {
      const user = decodeBase64Json<User>(query.user);
      localStorage.setItem('authToken', token);
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('lastTenant', user.tenant_id || user.company || 'default');
      this.currentUserSubject.next(user);
      return { ok: true };
    } catch {
      return { ok: false, error: 'Cannot parse social auth response.' };
    }
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
