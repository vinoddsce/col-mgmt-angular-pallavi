import { Injectable } from '@angular/core';
import Student from '../model/Student';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { of } from 'rxjs/operators';
import { catchError, retry, } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BaseService } from './base.service';

const STUDENTS: Student[] = [
  { _id: "1", name: "Vinod", course: "Angular8", fees: 999 }
]


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }


  getStudents(): Observable<any> {

    console.log('this.http.get(`${environment}/students`)', this.http.get(`${environment}/students`));

    return this.http.get(`${environment.baseurl}/students`).pipe(
      catchError(this.handleError)
    );
    // return of(STUDENTS);
  }


  addStudent(std): Observable<any> {
    // console.log('this.http.get(`${environment}/students`)', this.http.get(`${environment}/students`));
    return this.http.post(`${environment.baseurl}/students`, std, httpOptions);
  }

  deleteStd(_id: string) {
    return this.http.delete(`${environment.baseurl}/students/${_id}`).pipe(
      retry(3),
      catchError(this.handleError)
    );

  }

}
