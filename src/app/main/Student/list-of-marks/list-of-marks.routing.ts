import { Routes, RouterModule } from '@angular/router';
import { ListOfMarksComponent } from './list-of-marks.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: ListOfMarksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfMarksRouting {}
