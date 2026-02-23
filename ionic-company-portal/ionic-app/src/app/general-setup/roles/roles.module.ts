import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RolesPage } from './roles.page';
import { RolesApiService } from '../../services/roles-api.service';

const routes: Routes = [{ path: '', component: RolesPage }];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [RolesPage],
  providers: [RolesApiService]
})
export class RolesPageModule {}
