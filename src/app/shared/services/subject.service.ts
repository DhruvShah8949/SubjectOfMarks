import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private apiService: ApiService) {}

  listOfMarks(isPagination = '', pageNo = 1, pageSize = '') {
    const path = `/servicePhoto?isPagination=${isPagination}&pageNo=${pageNo}&pageSize=${pageSize}`;
    return this.apiService.getRequest(path);
  }

  deleteMarks(id: any) {
    const path = `/servicePhoto/${id}`;
    return this.apiService.deleterequest(path);
  }

  addMarks(data: any) {
    const path = `/servicePhoto`;
    const body = new FormData();
    body.append('words', JSON.stringify(data));
    return this.apiService.postRequest(path, body);
  }

  editMarks(id: any, data: any) {
    const path = `/servicePhoto`;
    const body = new FormData();
    body.append('servicePhotoId', id);
    body.append('words', JSON.stringify(data));
    return this.apiService.postRequest(path, body);
  }
}
