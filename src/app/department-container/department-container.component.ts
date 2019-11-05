import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import Student from '../model/Student';
import { StudentComponent } from '../student-container/student/student.component';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.css']
})
export class DepartmentContainerComponent implements OnInit {

  @Output() addStudentEvent = new EventEmitter<Student>();
  deptName: string = "JavaScript Dept.";
  showErrorMessage: boolean = false;

  currentStudent: Student = new Student();

  constructor() {
  }

  ngOnInit() {
    this.currentStudent.name = "Vin";
    this.currentStudent.course = "Ang";
    this.currentStudent.fees = 9090;

  }

  onSubmit(studentForm) {
    console.log("Submit Event: ", studentForm.value);

    if (studentForm.value.stdName === null || studentForm.value.stdName === '') {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
      this.currentStudent.name = studentForm.value.stdName;
      this.currentStudent.course = studentForm.value.stdCourse;
      this.currentStudent.fees = studentForm.value.stdFees;
      this.addStudentEvent.emit(this.currentStudent);
    }
  }
}
