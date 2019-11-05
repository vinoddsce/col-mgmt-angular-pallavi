import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input() _id: string = '';
  @Input() name: string = '';
  @Input() course: string = '';
  @Input() fees: number = 0;

  @Output() deleteStudent = new EventEmitter<string>();

  getClass() {
    if (this.fees === 0) {
      return "fees-zero";
    } else {
      return "fees";
    }
  }

  onDeleteClicked(event) {
    console.log("Student -> onDeleteClicked");
    this.deleteStudent.emit(this._id);
  }
}
