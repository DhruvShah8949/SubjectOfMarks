import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren:
          './Student/list-of-marks/list-of-marks.module#ListOfMarksModule',
      },
    ],
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'list-marks',
        loadChildren:
          './Student/list-of-marks/list-of-marks.module#ListOfMarksModule',
      },
      {
        path: 'edit-marks/:id',
        loadChildren:
          './Student/add-edit-marks/add-edit-marks.module#AddEditMarksModule',
      },
      {
        path: 'add-marks',
        loadChildren:
          './Student/add-edit-marks/add-edit-marks.module#AddEditMarksModule',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutes {}
