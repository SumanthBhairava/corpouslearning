import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AnalysisJobResponse {
  job_id: string;
  tenant_id: string;
  status: string;
  created_at: string;
}

export interface AnalysisJobStatusResponse {
  job_id: string;
  tenant_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  progress: string[];
  error?: string | null;
}

export interface TenantAnalysisHistoryItem {
  job_id: string;
  tenant_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  error?: string | null;
  input: {
    file_name?: string;
    file_hash?: string;
    version_mode?: 'latest' | 'all';
    top_k?: number;
    contract_type?: string | null;
  };
}

export interface TenantAnalysisHistoryResponse {
  tenant_id: string;
  total: number;
  jobs: TenantAnalysisHistoryItem[];
}

@Injectable()
export class AnalyseService {
  private readonly baseUrl = environment.analyseServiceApiUrl || 'http://localhost:8002';

  constructor(private http: HttpClient) {}

  uploadDocxForAnalysis(payload: {
    tenantId: string;
    file: File;
    topK: number;
    versionMode: 'latest' | 'all';
    contractType?: string;
    injectionServiceUrl?: string;
    lmStudioUrl?: string;
    modelName?: string;
  }): Observable<AnalysisJobResponse> {
    const formData = new FormData();
    formData.append('tenant_id', payload.tenantId);
    formData.append('docx_file', payload.file);
    formData.append('top_k', String(payload.topK));
    formData.append('version_mode', payload.versionMode);

    if (payload.contractType) formData.append('contract_type', payload.contractType);
    if (payload.injectionServiceUrl) formData.append('injection_service_url', payload.injectionServiceUrl);
    if (payload.lmStudioUrl) formData.append('lm_studio_url', payload.lmStudioUrl);
    if (payload.modelName) formData.append('model_name', payload.modelName);

    return this.http.post<AnalysisJobResponse>(`${this.baseUrl}/analyse/upload-docx`, formData);
  }

  getJobStatus(jobId: string): Observable<AnalysisJobStatusResponse> {
    return this.http.get<AnalysisJobStatusResponse>(`${this.baseUrl}/analyse/jobs/${jobId}`);
  }

  getJobResult(jobId: string): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(`${this.baseUrl}/analyse/jobs/${jobId}/result`);
  }

  getTenantHistory(tenantId: string, limit = 50): Observable<TenantAnalysisHistoryResponse> {
    return this.http.get<TenantAnalysisHistoryResponse>(`${this.baseUrl}/tenant/${tenantId}/analysis-jobs?limit=${limit}`);
  }
}
