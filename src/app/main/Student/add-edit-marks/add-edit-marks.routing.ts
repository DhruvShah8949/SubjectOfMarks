import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AddEditMarksComponent } from './add-edit-marks.component';

const routes: Routes = [{ path: '', component: AddEditMarksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMarksRouting {}
