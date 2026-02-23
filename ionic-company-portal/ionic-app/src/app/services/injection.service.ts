import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface LearningJobResponse {
  job_id: string;
  tenant_id: string;
  status: string;
  created_at: string;
}

export interface JobStatusResponse {
  job_id: string;
  tenant_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  progress: string[];
  error?: string | null;
}

export interface RetrievalRequest {
  tenant_id: string;
  query: string;
  top_k: number;
  contract_type?: string;
  version_mode: 'latest' | 'all';
}

export interface RetrievalResponse {
  total: number;
  results: Array<Record<string, unknown>>;
}

export interface TenantJobHistoryItem {
  job_id: string;
  tenant_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  corpus_version?: string;
  error?: string | null;
  progress_count: number;
}

export interface TenantJobHistoryResponse {
  tenant_id: string;
  total: number;
  jobs: TenantJobHistoryItem[];
}

@Injectable()
export class InjectionService {
  private readonly baseUrl = environment.injectionServiceApiUrl || 'http://localhost:8001';

  constructor(private http: HttpClient) {}

  uploadCorpusZip(payload: {
    tenantId: string;
    file: File;
    corpusVersion?: string;
    lmStudioUrl?: string;
    modelName?: string;
  }): Observable<LearningJobResponse> {
    const formData = new FormData();
    formData.append('tenant_id', payload.tenantId);
    formData.append('corpus_zip', payload.file);
    if (payload.corpusVersion) formData.append('corpus_version', payload.corpusVersion);
    if (payload.lmStudioUrl) formData.append('lm_studio_url', payload.lmStudioUrl);
    if (payload.modelName) formData.append('model_name', payload.modelName);
    return this.http.post<LearningJobResponse>(`${this.baseUrl}/corpus/upload`, formData);
  }

  uploadSingleDocx(payload: {
    tenantId: string;
    customerPath: string;
    file: File;
    corpusVersion?: string;
    lmStudioUrl?: string;
    modelName?: string;
  }): Observable<LearningJobResponse> {
    const formData = new FormData();
    formData.append('tenant_id', payload.tenantId);
    formData.append('customer_path', payload.customerPath);
    formData.append('docx_file', payload.file);
    if (payload.corpusVersion) formData.append('corpus_version', payload.corpusVersion);
    if (payload.lmStudioUrl) formData.append('lm_studio_url', payload.lmStudioUrl);
    if (payload.modelName) formData.append('model_name', payload.modelName);
    return this.http.post<LearningJobResponse>(`${this.baseUrl}/corpus/upload-docx`, formData);
  }

  uploadFolderDocs(payload: {
    tenantId: string;
    files: File[];
    corpusVersion?: string;
    lmStudioUrl?: string;
    modelName?: string;
  }): Observable<LearningJobResponse> {
    const formData = new FormData();
    formData.append('tenant_id', payload.tenantId);
    const relativePaths: string[] = [];

    payload.files.forEach((file) => {
      const fileWithPath = file as File & { webkitRelativePath?: string };
      relativePaths.push(fileWithPath.webkitRelativePath || file.name);
      formData.append('files', file, file.name);
    });
    formData.append('relative_paths', JSON.stringify(relativePaths));

    if (payload.corpusVersion) formData.append('corpus_version', payload.corpusVersion);
    if (payload.lmStudioUrl) formData.append('lm_studio_url', payload.lmStudioUrl);
    if (payload.modelName) formData.append('model_name', payload.modelName);

    return this.http.post<LearningJobResponse>(`${this.baseUrl}/corpus/upload-folder`, formData);
  }

  getJobStatus(jobId: string): Observable<JobStatusResponse> {
    return this.http.get<JobStatusResponse>(`${this.baseUrl}/jobs/${jobId}`);
  }

  getJobSummary(jobId: string): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(`${this.baseUrl}/jobs/${jobId}/summary`);
  }

  retrieve(payload: RetrievalRequest): Observable<RetrievalResponse> {
    return this.http.post<RetrievalResponse>(`${this.baseUrl}/rag/retrieve`, payload);
  }

  getTenantVersions(tenantId: string): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(`${this.baseUrl}/tenant/${tenantId}/versions`);
  }

  getTenantJobs(tenantId: string, limit = 50): Observable<TenantJobHistoryResponse> {
    return this.http.get<TenantJobHistoryResponse>(`${this.baseUrl}/tenant/${tenantId}/jobs?limit=${limit}`);
  }
}
