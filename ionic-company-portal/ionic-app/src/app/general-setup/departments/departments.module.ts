import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DepartmentsPage } from './departments.page';
import { DepartmentsApiService } from '../../services/departments-api.service';

const routes: Routes = [{ path: '', component: DepartmentsPage }];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [DepartmentsPage],
  providers: [DepartmentsApiService]
})
export class DepartmentsPageModule {}
