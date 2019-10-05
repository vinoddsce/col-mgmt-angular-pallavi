import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input() _id: number = 0;
  @Input() name: string = '';
  @Input() course: string = '';
  @Input() fees: number = 0;

  getClass() {
    if (this.fees === 0) {
      return "fees-zero";
    } else {
      return "fees";
    }
  }

}
