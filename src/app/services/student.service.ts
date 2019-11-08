import { Injectable } from '@angular/core';
import Student from '../model/Student';
import { AppModule } from '../app.module';

const STUDENTS: Student[] = [
  { _id: "1", name: "Vinod", course: "Angular8", fees: 1000 }
]

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }

  getStudents(): Student[] {
    return STUDENTS;
  }

}
