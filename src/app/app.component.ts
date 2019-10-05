import { Component, ElementRef, OnInit } from '@angular/core';
import Student from './model/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Student Management Angular App !!!!!';
  departmentName: string = "NA";
  // students: { _id: number, name: string, course: string, fees: number }[] = [];

  // s1 = { _id: "", name: "Vinod", course: "", fees: 0 };
  // s2 = { _id: "100", name: "Kumar", course: "", fees: 0 };
  // s3 = { _id: "", name: "M", course: "", fees: 0 };

  students: Student[] = [];
  count: number = 0;

  isDev: boolean = true;
  isShowLogo: boolean = true;

  constructor(private ref: ElementRef) {

  }


  showLogo(event) {
    this.isShowLogo = true;
  }

  hideLogo(event) {
    this.isShowLogo = false;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.ref);
    // this.students.push(this.s1);
    // this.students.push(this.s2);
    // this.students.push(this.s3);
  }
  addStudentEvent(obj: { name: string, course: string, fees: number }) {
    let std = {
      _id: this.students.length + 1 + "",
      name: obj.name,
      course: obj.course,
      fees: obj.fees
    }

    this.students.push(std);
    this.count = this.students.length;
    console.log(this.students);
  }
}

