import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.css']
})
export class DepartmentContainerComponent {

  @Output() addStudentEvent: EventEmitter<{ name: string, course: string, fees: number }> = new EventEmitter<{ name: string, course: string, fees: number }>();
  deptName: string = "JavaScript Dept.";

  showErrorMessage: boolean = false;


  constructor(private fb: FormBuilder) {

  }

  // stdName: string = "";
  // stdCourse: string = "";
  // stdFees: number = 0;

  // studentForm = new FormGroup({
  //   stdName: new FormControl(''),
  //   stdCourse: new FormControl(''),
  //   stdFees: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })

  studentForm = this.fb.group({
    stdName: [''],
    stdCourse: [''],
    stdFees: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

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
