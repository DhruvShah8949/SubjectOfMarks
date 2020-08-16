import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMarksRouting } from './add-edit-marks.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditMarksComponent } from './add-edit-marks.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AddMarksRouting],
  declarations: [AddEditMarksComponent],
})
export class AddEditMarksModule {}
