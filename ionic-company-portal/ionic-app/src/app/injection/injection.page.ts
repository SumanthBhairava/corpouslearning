import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  InjectionService,
  JobStatusResponse,
  TenantJobHistoryItem
} from '../services/injection.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.page.html',
  styleUrls: ['./injection.page.scss']
})
export class InjectionPage implements OnInit, OnDestroy {
  tenantId = 'default';
  customerPath = 'CustomerA';

  folderFiles: File[] = [];
  docxFile: File | null = null;

  jobId = '';
  currentStatus = '';
  progress: string[] = [];
  errorMessage = '';
  submitted = false;
  formErrors = { folderFiles: '', docxFile: '' };

  summary: Record<string, unknown> | null = null;
  uploadedHistory: TenantJobHistoryItem[] = [];

  isSubmitting = false;
  private pollTimer: ReturnType<typeof setTimeout> | null = null;
  private activeSubscription: Subscription | null = null;

  constructor(private injectionService: InjectionService, private authService: AuthService) {}

  ngOnInit(): void {
    this.tenantId = this.resolveTenantId();
    this.fetchHistory();
  }

  ngOnDestroy(): void {
    this.stopPolling();
    if (this.activeSubscription) {
      this.activeSubscription.unsubscribe();
    }
  }

  onFolderChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.folderFiles = input.files ? Array.from(input.files) : [];
  }

  onDocxFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.docxFile = input.files && input.files.length ? input.files[0] : null;
  }

  uploadFolder(): void {
    this.submitted = true;
    this.formErrors = { folderFiles: '', docxFile: '' };
    if (this.folderFiles.length === 0) {
      this.formErrors.folderFiles = 'Please choose at least one file.';
    }
    if (this.formErrors.folderFiles) {
      this.errorMessage = 'Please fill required fields.';
      return;
    }

    this.resetRunState();
    this.isSubmitting = true;
    this.activeSubscription = this.injectionService.uploadFolderDocs({
      tenantId: this.tenantId.trim(),
      files: this.folderFiles
    }).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.jobId = res.job_id;
        this.currentStatus = res.status;
        this.progress = ['Upload request accepted'];
        this.fetchHistory();
        this.startPolling();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = err?.error?.detail || 'Folder upload failed.';
      }
    });
  }

  uploadDocx(): void {
    this.submitted = true;
    this.formErrors = { folderFiles: '', docxFile: '' };
    if (!this.docxFile) {
      this.formErrors.docxFile = 'DOCX file is required.';
    }
    if (this.formErrors.docxFile) {
      this.errorMessage = 'Please fill required fields.';
      return;
    }

    const docxFile = this.docxFile;
    if (!docxFile) {
      this.errorMessage = 'DOCX file is required.';
      return;
    }

    this.resetRunState();
    this.isSubmitting = true;
    this.activeSubscription = this.injectionService.uploadSingleDocx({
      tenantId: this.tenantId.trim(),
      customerPath: this.customerPath.trim() || 'default',
      file: docxFile
    }).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.jobId = res.job_id;
        this.currentStatus = res.status;
        this.progress = ['DOCX upload accepted'];
        this.fetchHistory();
        this.startPolling();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = err?.error?.detail || 'DOCX upload failed.';
      }
    });
  }

  fetchHistory(): void {
    this.activeSubscription = this.injectionService.getTenantJobs(this.tenantId.trim(), 50).subscribe({
      next: (res) => {
        this.uploadedHistory = res.jobs || [];
      },
      error: (err) => {
        this.errorMessage = err?.error?.detail || 'Failed to load upload history.';
      }
    });
  }

  private startPolling(): void {
    this.stopPolling();
    if (!this.jobId) return;

    this.pollTimer = setTimeout(() => this.pollJobStatus(), 1000);
  }

  private pollJobStatus(): void {
    if (!this.jobId) return;

    this.activeSubscription = this.injectionService.getJobStatus(this.jobId).subscribe({
      next: (status: JobStatusResponse) => {
        this.currentStatus = status.status;
        this.progress = status.progress || [];

        if (status.status === 'completed') {
          this.stopPolling();
          this.fetchSummary();
          this.fetchHistory();
          return;
        }

        if (status.status === 'failed') {
          this.stopPolling();
          this.errorMessage = status.error || 'Learning job failed.';
          this.fetchHistory();
          return;
        }

        this.pollTimer = setTimeout(() => this.pollJobStatus(), 2000);
      },
      error: (err) => {
        this.stopPolling();
        this.errorMessage = err?.error?.detail || 'Job polling failed.';
      }
    });
  }

  private fetchSummary(): void {
    this.activeSubscription = this.injectionService.getJobSummary(this.jobId).subscribe({
      next: (res) => {
        this.summary = res;
      },
      error: (err) => {
        this.errorMessage = err?.error?.detail || 'Failed to fetch summary.';
      }
    });
  }

  private stopPolling(): void {
    if (this.pollTimer) {
      clearTimeout(this.pollTimer);
      this.pollTimer = null;
    }
  }

  private resetRunState(): void {
    this.stopPolling();
    this.errorMessage = '';
    this.formErrors = { folderFiles: '', docxFile: '' };
    this.summary = null;
    this.jobId = '';
    this.currentStatus = '';
    this.progress = [];
  }

  statusClass(status: string): string {
    if (status === 'completed') return 'ok';
    if (status === 'failed') return 'fail';
    if (status === 'processing') return 'run';
    return 'wait';
  }

  summaryNumber(key: string): number {
    if (!this.summary) return 0;
    const value = this.summary[key];
    return typeof value === 'number' ? value : 0;
  }

  summaryTypes(): string[] {
    if (!this.summary) return [];
    const value = this.summary['contract_types_found'];
    return Array.isArray(value) ? value.map((x) => String(x)) : [];
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
