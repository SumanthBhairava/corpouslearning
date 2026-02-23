import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AnalysePage } from './analyse.page';
import { AnalyseService } from '../services/analyse.service';

const routes: Routes = [{ path: '', component: AnalysePage }];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [AnalysePage],
  providers: [AnalyseService]
})
export class AnalysePageModule {}
