import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InjectionPage } from './injection.page';
import { InjectionService } from '../services/injection.service';

const routes: Routes = [{ path: '', component: InjectionPage }];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [InjectionPage],
  providers: [InjectionService]
})
export class InjectionPageModule {}
