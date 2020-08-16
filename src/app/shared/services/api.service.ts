import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  postRequest(url: any, data: any): Observable<any> {
    const apiUrl = this.baseUrl + url;
    const body = JSON.stringify(data);
    return this.http.post(apiUrl, data, { headers: this.headersGet() });
  }

  getRequest(url: any): Observable<any> {
    const apiUrl = this.baseUrl + url;
    return this.http.get(apiUrl, { headers: this.headersGet() });
  }

  headersGet() {
    let headers = new HttpHeaders();
    headers.append('httpx-thetatech-accesstoken', '{{access-token}}');
    return headers;
  }

  deleterequest(url: any): Observable<any> {
    const apiUrl = this.baseUrl + url;
    return this.http.delete(apiUrl, { headers: this.headersGet() });
  }
}
