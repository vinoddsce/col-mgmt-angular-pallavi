import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.css']
})
export class DepartmentContainerComponent {

  @Output() addStudentEvent: EventEmitter<{ name: string, course: string, fees: number }> = new EventEmitter<{ name: string, course: string, fees: number }>();
  deptName: string = "JavaScript Dept.";

  showErrorMessage: boolean = false;

  stdName: string = "";
  stdCourse: string = "";
  stdFees: number = 0;


  addStudentDetails(event: MouseEvent) {
    if (this.stdName === null || this.stdName === '') {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
      this.addStudentEvent.emit({ name: this.stdName, course: this.stdCourse, fees: this.stdFees });
    }
  }
}
