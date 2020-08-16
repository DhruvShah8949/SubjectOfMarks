import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubjectService } from '../shared/services/subject.service';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { MainComponent } from './main.component';
import { MainRoutes } from './main.routing';
import { AddEditMarksModule } from './Student/add-edit-marks/add-edit-marks.module';
import { ListOfMarksModule } from './Student/list-of-marks/list-of-marks.module';

@NgModule({
  imports: [CommonModule, MainRoutes, ListOfMarksModule, AddEditMarksModule],
  declarations: [
    MainComponent,
    AppSidebarComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  providers: [SubjectService],
})
export class MainModule {}
