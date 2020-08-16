import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-marks',
  templateUrl: './add-edit-marks.component.html',
  styleUrls: ['./add-edit-marks.component.scss'],
})
export class AddEditMarksComponent implements OnInit {
  marksForm: FormGroup;
  subscription: Subscription;
  total: number = 0;
  editId: any;
  title: string;
  constructor(
    private fb: FormBuilder,
    private _marksService: SubjectService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.formLoad();
    this.isAddOrEdit();
    this.cdr.detectChanges();
  }
  getEditData() {
    this._marksService
      .listOfMarks()
      .pipe(first())
      .subscribe(
        (res: any) => {
          if (res !== null && res !== undefined && res.response.total > 0) {
            const editData = res.response.list.find(
              (ele) => ele.id === this.editId
            );
            this.setEditData(editData);
            console.log(editData);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
  setEditData(editData: any) {
    if (
      editData.words !== null &&
      editData.words !== undefined &&
      editData.words instanceof Array
    ) {
      editData.words.map((ele: any) => {
        this.addMarksInputs(ele);
      });
      this.total = 100;
    } else {
      this.addMarks();
      this.total = 0;
    }
  }
  formLoad() {
    this.marksForm = this.fb.group({
      words: this.fb.array([]),
    });
  }
  isAddOrEdit() {
    this.route.params.subscribe((params) => {
      if (params['id'] !== undefined) {
        this.editId = params['id'];
        this.title = 'Edit';
        this.getEditData();
      } else {
        this.editId = undefined;
        this.title = 'Add';
        this.addMarks();
      }
    });
  }

  addMarks() {
    const obj = { word: '', percentage: '' };
    this.addMarksInputs(obj);
  }

  addMarksInputs(obj = null) {
    const marksInput = this.marksForm.controls.words as FormArray;
    marksInput.push(
      this.fb.group({
        word: [obj.word, Validators.required],
        percentage: [obj.percentage, Validators.required],
      })
    );
  }
  removeMarksInputs(index) {
    const form = this.marksForm.get('words') as FormArray;
    form.removeAt(index);
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  isBtnDisabled() {
    let allSubjectMarks = 0;
    const allInputData = this.marksForm.get('words') as FormArray;
    if (
      allInputData.value !== undefined &&
      allInputData.value !== null &&
      allInputData.value.length > 0
    ) {
      allInputData.value.map((ele: any) => {
        if (ele !== null && ele !== undefined && ele !== '') {
          allSubjectMarks += ele.percentage;
        }
      });
    }
    this.total = allSubjectMarks;

    return allSubjectMarks === 100 && !this.marksForm.invalid ? false : true;
  }
  saveAllSubejctMarks() {
    const allMarksData = this.marksForm.get('words') as FormArray;
    this.editId !== undefined
      ? this.updateMarks(allMarksData)
      : this.saveMarks(allMarksData);
  }
  updateMarks(allMarksData) {
    this.subscription = this._marksService
      .editMarks(this.editId, allMarksData.value)
      .subscribe(
        (res: any) => {
          if (res.response.isActive) {
            alert('update the data successfully');
            this.router.navigateByUrl('/main/list-marks');
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  saveMarks(allMarksData) {
    this.subscription = this._marksService
      .addMarks(allMarksData.value)
      .subscribe(
        (res: any) => {
          if (res.response.isActive) {
            alert('save the data successfully');
            this.router.navigateByUrl('/main/list-marks');
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
  get marksF() {
    return this.marksForm.controls;
  }
  ngOnDestroy(): void {
    if (this.subscription !== undefined) this.subscription.unsubscribe();
  }
}
