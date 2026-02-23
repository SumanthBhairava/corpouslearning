import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkflowService } from '../services/workflow.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.page.html',
  styleUrls: ['./workflow.page.scss']
})
export class WorkflowPage implements OnInit {
  tenantId = 'default';

  createTitle = '';
  ownerId = '';
  managerId = '';
  dueAt = '';
  createFile: File | null = null;

  assignDocumentId = '';
  assignedBy = '';
  assigneeIdsRaw = '';

  employeeAssigneeId = '';
  employeeAssignmentId = '';
  employeeComment = '';
  employeeEditedContent = '';

  reviewSubmissionId = '';
  reviewManagerId = '';
  reviewAction: 'approve' | 'reject' | 'request_changes' = 'approve';
  reviewNotes = '';

  documents: Array<Record<string, unknown>> = [];
  assigneeTasks: Array<Record<string, unknown>> = [];
  managerQueue: Array<Record<string, unknown>> = [];
  documentSubmissionsList: Array<Record<string, unknown>> = [];
  documentAuditList: Array<Record<string, unknown>> = [];

  inspectDocumentId = '';

  lastResponse: Record<string, unknown> | null = null;
  errorMessage = '';
  isBusy = false;
  createSubmitted = false;
  createErrors = { title: '', ownerId: '', managerId: '', file: '' };

  constructor(private workflowService: WorkflowService, private authService: AuthService) {}

  ngOnInit(): void {
    this.tenantId = this.resolveTenantId();
  }

  onCreateFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.createFile = input.files && input.files.length ? input.files[0] : null;
  }

  createDocument(): void {
    this.createSubmitted = true;
    if (!this.validateCreateDocument()) return;

    this.run(() => this.workflowService.createDocument({
      tenantId: this.tenantId.trim(),
      title: this.createTitle.trim(),
      ownerId: this.ownerId.trim(),
      managerId: this.managerId.trim(),
      dueAt: this.dueAt.trim() || undefined,
      file: this.createFile as File
    }), (res) => {
      this.lastResponse = res;
      const documentId = String(res['document_id'] || '');
      if (documentId) this.assignDocumentId = documentId;
      this.fetchDocuments();
      this.createSubmitted = false;
      this.createErrors = { title: '', ownerId: '', managerId: '', file: '' };
    });
  }

  fetchDocuments(): void {
    this.run(() => this.workflowService.listDocuments(this.tenantId.trim()), (res) => {
      this.lastResponse = res;
      this.documents = Array.isArray(res['documents']) ? (res['documents'] as Array<Record<string, unknown>>) : [];
    });
  }

  assignDocument(): void {
    const assignees = this.assigneeIdsRaw
      .split(',')
      .map((x) => x.trim())
      .filter((x) => !!x);

    if (!this.assignDocumentId.trim() || !this.assignedBy.trim() || assignees.length === 0) {
      this.errorMessage = 'Document ID, assigned by, and assignee list are required.';
      return;
    }

    this.run(() => this.workflowService.assignDocument({
      documentId: this.assignDocumentId.trim(),
      assignedBy: this.assignedBy.trim(),
      assigneeIds: assignees
    }), (res) => {
      this.lastResponse = res;
      this.fetchDocuments();
    });
  }

  fetchEmployeeTasks(): void {
    if (!this.employeeAssigneeId.trim()) {
      this.errorMessage = 'Assignee ID is required.';
      return;
    }

    this.run(() => this.workflowService.assigneeTasks(this.tenantId.trim(), this.employeeAssigneeId.trim()), (res) => {
      this.lastResponse = res;
      this.assigneeTasks = Array.isArray(res['tasks']) ? (res['tasks'] as Array<Record<string, unknown>>) : [];
    });
  }

  submitEmployeeTask(): void {
    if (!this.employeeAssignmentId.trim() || !this.employeeAssigneeId.trim()) {
      this.errorMessage = 'Assignment ID and assignee ID are required.';
      return;
    }

    this.run(() => this.workflowService.submitAssignment({
      assignmentId: this.employeeAssignmentId.trim(),
      assigneeId: this.employeeAssigneeId.trim(),
      summaryComment: this.employeeComment.trim() || undefined,
      editedContent: this.employeeEditedContent.trim() || undefined,
      decisionPayload: {}
    }), (res) => {
      this.lastResponse = res;
      this.fetchEmployeeTasks();
      if (this.managerId.trim()) {
        this.fetchManagerQueue();
      }
    });
  }

  fetchManagerQueue(): void {
    if (!this.managerId.trim()) {
      this.errorMessage = 'Manager ID is required.';
      return;
    }

    this.run(() => this.workflowService.managerQueue(this.tenantId.trim(), this.managerId.trim()), (res) => {
      this.lastResponse = res;
      this.managerQueue = Array.isArray(res['items']) ? (res['items'] as Array<Record<string, unknown>>) : [];
    });
  }

  reviewSubmission(): void {
    if (!this.reviewSubmissionId.trim() || !this.reviewManagerId.trim()) {
      this.errorMessage = 'Submission ID and manager ID are required.';
      return;
    }

    this.run(() => this.workflowService.reviewSubmission({
      submissionId: this.reviewSubmissionId.trim(),
      managerId: this.reviewManagerId.trim(),
      action: this.reviewAction,
      notes: this.reviewNotes.trim() || undefined
    }), (res) => {
      this.lastResponse = res;
      this.fetchManagerQueue();
      this.fetchDocuments();
    });
  }

  inspectDocument(): void {
    if (!this.inspectDocumentId.trim()) {
      this.errorMessage = 'Document ID is required to inspect.';
      return;
    }

    this.run(() => this.workflowService.documentSubmissions(this.inspectDocumentId.trim()), (res) => {
      this.lastResponse = res;
      this.documentSubmissionsList = Array.isArray(res['submissions'])
        ? (res['submissions'] as Array<Record<string, unknown>>)
        : [];

      this.workflowService.documentAudit(this.inspectDocumentId.trim()).subscribe({
        next: (audit) => {
          this.documentAuditList = Array.isArray(audit['events'])
            ? (audit['events'] as Array<Record<string, unknown>>)
            : [];
        }
      });
    });
  }

  private run(
    request: () => Observable<Record<string, unknown>>,
    onSuccess: (res: Record<string, unknown>) => void
  ): void {
    this.errorMessage = '';
    this.isBusy = true;

    request().subscribe({
      next: (res: Record<string, unknown>) => {
        this.isBusy = false;
        onSuccess(res);
      },
      error: (err: { error?: { detail?: string } }) => {
        this.isBusy = false;
        this.errorMessage = err?.error?.detail || 'Operation failed.';
      }
    });
  }

  private validateCreateDocument(): boolean {
    this.createErrors = { title: '', ownerId: '', managerId: '', file: '' };
    let valid = true;

    if (!this.createTitle.trim()) {
      this.createErrors.title = 'Title is required.';
      valid = false;
    }
    if (!this.ownerId.trim()) {
      this.createErrors.ownerId = 'Owner ID is required.';
      valid = false;
    }
    if (!this.managerId.trim()) {
      this.createErrors.managerId = 'Manager ID is required.';
      valid = false;
    }
    if (!this.createFile) {
      this.createErrors.file = 'Document file is required.';
      valid = false;
    }

    return valid;
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
