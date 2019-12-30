import { Injectable } from '@angular/core';
import Student from '../model/Student';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { of } from 'rxjs/operators';
import { catchError, } from 'rxjs/operators';

import { environment } from '../../environments/environment';

const STUDENTS: Student[] = [
  { _id: "1", name: "Vinod", course: "Angular8", fees: 999 }
]

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<any> {

    console.log('this.http.get(`${environment}/students`)', this.http.get(`${environment}/students`));

    return this.http.get(`${environment.baseurl}/students`);
    // return of(STUDENTS);
  }


}
