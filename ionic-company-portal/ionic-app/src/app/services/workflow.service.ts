import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class WorkflowService {
  private readonly baseUrl = environment.analyseServiceApiUrl || 'http://localhost:8002';

  constructor(private http: HttpClient) {}

  createDocument(payload: {
    tenantId: string;
    title: string;
    ownerId: string;
    managerId: string;
    dueAt?: string;
    file: File;
  }): Observable<Record<string, unknown>> {
    const formData = new FormData();
    formData.append('tenant_id', payload.tenantId);
    formData.append('title', payload.title);
    formData.append('owner_id', payload.ownerId);
    formData.append('manager_id', payload.managerId);
    if (payload.dueAt) formData.append('due_at', payload.dueAt);
    formData.append('file', payload.file);
    return this.http.post<Record<string, unknown>>(`${this.baseUrl}/workflow/documents/upload`, formData);
  }

  listDocuments(tenantId: string): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(`${this.baseUrl}/workflow/documents?tenant_id=${encodeURIComponent(tenantId)}`);
  }

  assignDocument(payload: {
    documentId: string;
    assignedBy: string;
    assigneeIds: string[];
  }): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>(
      `${this.baseUrl}/workflow/documents/${payload.documentId}/assign`,
      {
        assigned_by: payload.assignedBy,
        assignee_ids: payload.assigneeIds
      }
    );
  }

  assigneeTasks(tenantId: string, assigneeId: string): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(
      `${this.baseUrl}/workflow/tasks/${encodeURIComponent(assigneeId)}?tenant_id=${encodeURIComponent(tenantId)}`
    );
  }

  submitAssignment(payload: {
    assignmentId: string;
    assigneeId: string;
    summaryComment?: string;
    editedContent?: string;
    decisionPayload?: Record<string, unknown>;
  }): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>(
      `${this.baseUrl}/workflow/tasks/${payload.assignmentId}/submit`,
      {
        assignee_id: payload.assigneeId,
        summary_comment: payload.summaryComment,
        edited_content: payload.editedContent,
        decision_payload: payload.decisionPayload || {}
      }
    );
  }

  managerQueue(tenantId: string, managerId: string): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(
      `${this.baseUrl}/workflow/manager/${encodeURIComponent(managerId)}/queue?tenant_id=${encodeURIComponent(tenantId)}`
    );
  }

  reviewSubmission(payload: {
    submissionId: string;
    managerId: string;
    action: 'approve' | 'reject' | 'request_changes';
    notes?: string;
  }): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>(
      `${this.baseUrl}/workflow/submissions/${payload.submissionId}/review`,
      {
        manager_id: payload.managerId,
        action: payload.action,
        notes: payload.notes
      }
    );
  }

  documentSubmissions(documentId: string): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(`${this.baseUrl}/workflow/documents/${documentId}/submissions`);
  }

  documentAudit(documentId: string): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(`${this.baseUrl}/workflow/documents/${documentId}/audit`);
  }
}
