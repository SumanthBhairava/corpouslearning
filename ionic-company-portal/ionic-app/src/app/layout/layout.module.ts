import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LayoutPage } from './layout.page';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule) },
      { path: 'injection', loadChildren: () => import('../injection/injection.module').then(m => m.InjectionPageModule) },
      { path: 'analyse', loadChildren: () => import('../analyse/analyse.module').then(m => m.AnalysePageModule) },
      { path: 'workflow', loadChildren: () => import('../workflow/workflow.module').then(m => m.WorkflowPageModule) },
      { path: 'general-setup/users', loadChildren: () => import('../general-setup/users/users.module').then(m => m.UsersPageModule) },
      { path: 'general-setup/roles', loadChildren: () => import('../general-setup/roles/roles.module').then(m => m.RolesPageModule) },
      { path: 'general-setup/departments', loadChildren: () => import('../general-setup/departments/departments.module').then(m => m.DepartmentsPageModule) },
    ]
  }
];

@NgModule({
  declarations: [LayoutPage, SidebarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, IonicModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutModule {}
