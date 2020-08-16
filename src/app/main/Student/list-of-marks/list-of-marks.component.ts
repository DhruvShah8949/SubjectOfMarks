import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators/';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-of-marks',
  templateUrl: './list-of-marks.component.html',
  styleUrls: ['./list-of-marks.component.scss'],
})
export class ListOfMarksComponent implements OnInit {
  listOfMarks: any = [];

  constructor(private _marksService: SubjectService) {}

  ngOnInit() {
    this.getMarksData();
  }
  getMarksData() {
    this._marksService
      .listOfMarks()
      .pipe(first())
      .subscribe(
        (res: any) => {
          if (res !== null && res !== undefined && res.response.total > 0)
            this.listOfMarks = res.response.list;
          else this.listOfMarks = [];
        },
        (err) => {
          console.log(err);
        }
      );
  }
  deleteMarks(id) {
    if (confirm('Are you sure you want to delete this record')) {
      this._marksService.deleteMarks(id).subscribe(
        (res: any) => {
          alert('deleted data successfully');
          this.getMarksData();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
