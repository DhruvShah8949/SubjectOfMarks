import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSubjectMarksModule } from './SubjectMarks/add-subject-marks/add-subject-marks.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AddSubjectMarksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
