import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../services/auth.service';

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.page.html', styleUrls: ['./dashboard.page.scss'] })
export class DashboardPage implements OnInit {
  user: User | null = null;

  get firstName(): string {
    return this.user?.name?.split(' ')[0] ?? 'there';
  }

  summaryCards = [
    { label: 'Corpus Jobs', value: '128', delta: '+9 this week', tone: 'blue', icon: 'cloud-upload-outline' },
    { label: 'Analysis Runs', value: '346', delta: '+31 this week', tone: 'teal', icon: 'analytics-outline' },
    { label: 'Workflow Docs', value: '74', delta: '18 pending review', tone: 'amber', icon: 'document-text-outline' },
    { label: 'Coverage', value: '92%', delta: 'Across active workspaces', tone: 'violet', icon: 'business-outline' }
  ];

  serviceHealth = [
    { name: 'Injection Service', status: 'healthy', latency: '32 ms', endpoint: ':8001' },
    { name: 'Analyse Service', status: 'healthy', latency: '45 ms', endpoint: ':8002' },
    { name: 'LM Studio', status: 'warning', latency: '210 ms', endpoint: ':1234' },
    { name: 'PostgreSQL', status: 'healthy', latency: '18 ms', endpoint: ':5432' }
  ];

  quickModules = [
    { title: 'Injection', desc: 'Upload corpus folders and build vector memory.', route: '/app/injection', cta: 'Open Injection', icon: 'cloud-upload-outline', tone: 'blue' },
    { title: 'Analyse', desc: 'Run single-document redline analysis with precedent context.', route: '/app/analyse', cta: 'Open Analyse', icon: 'scan-outline', tone: 'teal' },
    { title: 'Workflow', desc: 'Assign documents, collect reviews, and track approvals.', route: '/app/workflow', cta: 'Open Workflow', icon: 'git-merge-outline', tone: 'amber' },
    { title: 'General Setup', desc: 'Manage users, roles, and departments.', route: '/app/general-setup/users', cta: 'Open Setup', icon: 'settings-outline', tone: 'violet' }
  ];

  timeline = [
    { time: '2 min ago', title: 'Corpus learning completed', detail: 'Acme-corp, 54 chunks added, 4 agreement types found.' },
    { time: '11 min ago', title: 'Analysis job finished', detail: 'MSA_redline_v5.docx processed with 6 precedent matches.' },
    { time: '35 min ago', title: 'New role created', detail: 'Role "Contract Reviewer" added under default workspace.' },
    { time: '1 hr ago', title: 'Department updated', detail: 'Legal Ops description updated by admin@gmail.com.' }
  ];

  constructor(private authService: AuthService) {}
  ngOnInit() { this.user = this.authService.currentUser; }
}
