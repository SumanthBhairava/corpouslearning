import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WorkflowPage } from './workflow.page';
import { WorkflowService } from '../services/workflow.service';

const routes: Routes = [{ path: '', component: WorkflowPage }];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [WorkflowPage],
  providers: [WorkflowService]
})
export class WorkflowPageModule {}
