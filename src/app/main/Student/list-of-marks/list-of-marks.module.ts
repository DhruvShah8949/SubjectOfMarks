import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListOfMarksComponent } from './list-of-marks.component';
import { ListOfMarksRouting } from './list-of-marks.routing';
@NgModule({
  imports: [CommonModule, ListOfMarksRouting],
  declarations: [ListOfMarksComponent],
})
export class ListOfMarksModule {}
