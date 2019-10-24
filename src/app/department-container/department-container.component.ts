import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.css']
})
export class DepartmentContainerComponent {

  @Output() addStudentEvent: EventEmitter<{ name: string, course: string, fees: number }> = new EventEmitter<{ name: string, course: string, fees: number }>();
  deptName: string = "JavaScript Dept.";

  showErrorMessage: boolean = false;

  // stdName: string = "";
  // stdCourse: string = "";
  // stdFees: number = 0;

  studentForm = new FormGroup({
    stdName: new FormControl(''),
    stdCourse: new FormControl(''),
    stdFees: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  })

  onSubmit() {
    console.log("Submit Event: ", this.studentForm.value);
    if (this.studentForm.value.stdName === null || this.studentForm.value.stdName === '') {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
      this.addStudentEvent.emit({
        name: this.studentForm.value.stdName,
        course: this.studentForm.value.stdCourse, fees: this.studentForm.value.stdFees
      });
    }
  }
}
