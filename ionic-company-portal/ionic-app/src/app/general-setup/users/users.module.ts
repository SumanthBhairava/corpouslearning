import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UsersPage } from './users.page';
import { UsersApiService } from '../../services/users-api.service';
import { RolesApiService } from '../../services/roles-api.service';
import { DepartmentsApiService } from '../../services/departments-api.service';

const routes: Routes = [{ path: '', component: UsersPage }];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [UsersPage],
  providers: [UsersApiService, RolesApiService, DepartmentsApiService]
})
export class UsersPageModule {}
