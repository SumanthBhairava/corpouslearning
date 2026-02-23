import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  AnalyseService,
  AnalysisJobStatusResponse,
  TenantAnalysisHistoryItem
} from '../services/analyse.service';
import { AuthService } from '../services/auth.service';

type RedlineDecision = 'accept' | 'reject' | 'edit';

interface RedlineInsightView {
  index: number;
  type: string;
  text: string;
  sectionTitle: string;
  legalTopic: string;
  changeMagnitude: string;
  retrievalTotal: number;
  intent: string;
  suggestedResponse: string;
}

interface DecisionState {
  action: RedlineDecision;
  editedText?: string;
}

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.page.html',
  styleUrls: ['./analyse.page.scss']
})
export class AnalysePage implements OnInit, OnDestroy {
  tenantId = 'default';
  topK = 5;
  versionMode: 'latest' | 'all' = 'latest';
  contractType = '';
  injectionServiceUrl = 'http://localhost:8001';
  lmStudioUrl = 'http://localhost:1234';
  modelName = 'mistral';

  docxFile: File | null = null;

  jobId = '';
  currentStatus = '';
  progress: string[] = [];
  errorMessage = '';
  submitted = false;
  formErrors = { docxFile: '' };

  analysisResult: Record<string, unknown> | null = null;
  analysisHistory: TenantAnalysisHistoryItem[] = [];

  selectedRedlineIndex = -1;
  redlineEditorText = '';
  decisions: Record<number, DecisionState> = {};

  isSubmitting = false;
  private pollTimer: ReturnType<typeof setTimeout> | null = null;
  private activeSubscription: Subscription | null = null;

  constructor(private analyseService: AnalyseService, private authService: AuthService) {}

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

  onDocxFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.docxFile = input.files && input.files.length ? input.files[0] : null;
  }

  runAnalysis(): void {
    this.submitted = true;
    this.formErrors = { docxFile: '' };
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

    this.activeSubscription = this.analyseService.uploadDocxForAnalysis({
      tenantId: this.tenantId.trim(),
      file: docxFile,
      topK: this.topK,
      versionMode: this.versionMode,
      contractType: this.contractType.trim() || undefined,
      injectionServiceUrl: this.injectionServiceUrl.trim(),
      lmStudioUrl: this.lmStudioUrl.trim(),
      modelName: this.modelName.trim()
    }).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.jobId = res.job_id;
        this.currentStatus = res.status;
        this.progress = ['Analysis request accepted'];
        this.fetchHistory();

        if (res.status === 'completed') {
          this.fetchResult();
        } else {
          this.startPolling();
        }
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = err?.error?.detail || 'Analysis upload failed.';
      }
    });
  }

  fetchHistory(): void {
    this.activeSubscription = this.analyseService.getTenantHistory(this.tenantId.trim(), 50).subscribe({
      next: (res) => {
        this.analysisHistory = res.jobs || [];
      },
      error: (err) => {
        this.errorMessage = err?.error?.detail || 'Failed to load analysis history.';
      }
    });
  }

  getContractType(): string {
    const result = this.analysisResult as { contract_type?: string } | null;
    return result?.contract_type || 'Unknown';
  }

  getSummaryCount(key: 'redlines_analyzed' | 'comments_found' | 'additions' | 'strikeouts' | 'document_level_precedents'): number {
    const result = this.analysisResult as { summary?: Record<string, unknown> } | null;
    const value = result?.summary?.[key];
    return typeof value === 'number' ? value : 0;
  }

  getDocumentStat(key: 'characters' | 'comments' | 'tracked_changes' | 'extraction_confidence'): number {
    const result = this.analysisResult as { document_stats?: Record<string, unknown> } | null;
    const value = result?.document_stats?.[key];
    return typeof value === 'number' ? value : 0;
  }

  getRedlineInsights(): RedlineInsightView[] {
    const result = this.analysisResult as { redline_insights?: Array<Record<string, unknown>> } | null;
    const redlineInsights = result?.redline_insights || [];

    return redlineInsights.map((item) => {
      const redline = (item['redline'] || {}) as Record<string, unknown>;
      const section = (item['section_analysis'] || {}) as Record<string, unknown>;
      const negotiation = (item['negotiation_intelligence'] || {}) as Record<string, unknown>;

      return {
        index: typeof item['index'] === 'number' ? (item['index'] as number) : 0,
        type: String(redline['type'] || 'UNKNOWN'),
        text: String(redline['text'] || ''),
        sectionTitle: String(section['section_title'] || 'Unknown section'),
        legalTopic: String(section['legal_topic'] || 'Unknown topic'),
        changeMagnitude: String(section['change_magnitude'] || 'unknown'),
        retrievalTotal: typeof item['retrieval_total'] === 'number' ? (item['retrieval_total'] as number) : 0,
        intent: String(section['negotiation_intent'] || 'No intent extracted'),
        suggestedResponse: String(negotiation['our_response'] || negotiation['success_factors'] || 'No suggested response')
      };
    });
  }

  getPrecedentCitations(): Array<Record<string, unknown>> {
    const result = this.analysisResult as { document_precedent_retrieval?: Record<string, unknown> } | null;
    const retrieval = result?.document_precedent_retrieval || {};
    const citations = retrieval['results'];
    if (!Array.isArray(citations)) {
      return [];
    }
    return citations.slice(0, 6) as Array<Record<string, unknown>>;
  }

  selectRedline(index: number): void {
    const found = this.getRedlineInsights().find((x) => x.index === index);
    this.selectedRedlineIndex = index;
    this.redlineEditorText = found?.text || '';
  }

  getSelectedRedline(): RedlineInsightView | null {
    if (this.selectedRedlineIndex < 0) {
      return null;
    }
    return this.getRedlineInsights().find((x) => x.index === this.selectedRedlineIndex) || null;
  }

  decide(action: RedlineDecision, index?: number): void {
    const targetIndex = typeof index === 'number' ? index : this.selectedRedlineIndex;
    if (targetIndex < 0) return;

    this.decisions[targetIndex] = {
      action,
      editedText: action === 'edit' ? this.redlineEditorText : undefined
    };
  }

  saveEditedText(): void {
    if (this.selectedRedlineIndex < 0) return;
    this.decisions[this.selectedRedlineIndex] = {
      action: 'edit',
      editedText: this.redlineEditorText
    };
  }

  getDecision(index: number): DecisionState | null {
    return this.decisions[index] || null;
  }

  decisionLabel(index: number): string {
    const decision = this.getDecision(index);
    if (!decision) return 'Pending';
    if (decision.action === 'accept') return 'Accepted';
    if (decision.action === 'reject') return 'Rejected';
    return 'Edited';
  }

  decisionClass(index: number): string {
    const decision = this.getDecision(index);
    if (!decision) return 'pending';
    if (decision.action === 'accept') return 'accepted';
    if (decision.action === 'reject') return 'rejected';
    return 'edited';
  }

  statusClass(status: string): string {
    if (status === 'completed') return 'ok';
    if (status === 'failed') return 'fail';
    if (status === 'processing') return 'run';
    return 'wait';
  }

  private startPolling(): void {
    this.stopPolling();
    if (!this.jobId) return;

    this.pollTimer = setTimeout(() => this.pollJobStatus(), 1000);
  }

  private pollJobStatus(): void {
    if (!this.jobId) return;

    this.activeSubscription = this.analyseService.getJobStatus(this.jobId).subscribe({
      next: (status: AnalysisJobStatusResponse) => {
        this.currentStatus = status.status;
        this.progress = status.progress || [];

        if (status.status === 'completed') {
          this.stopPolling();
          this.fetchResult();
          this.fetchHistory();
          return;
        }

        if (status.status === 'failed') {
          this.stopPolling();
          this.errorMessage = status.error || 'Analysis job failed.';
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

  private fetchResult(): void {
    if (!this.jobId) return;

    this.activeSubscription = this.analyseService.getJobResult(this.jobId).subscribe({
      next: (res) => {
        this.analysisResult = res;
        this.selectedRedlineIndex = -1;
        this.decisions = {};

        const first = this.getRedlineInsights()[0];
        if (first) {
          this.selectRedline(first.index);
        }
      },
      error: (err) => {
        this.errorMessage = err?.error?.detail || 'Failed to fetch analysis result.';
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
    this.formErrors = { docxFile: '' };
    this.analysisResult = null;
    this.jobId = '';
    this.currentStatus = '';
    this.progress = [];
    this.selectedRedlineIndex = -1;
    this.redlineEditorText = '';
    this.decisions = {};
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
