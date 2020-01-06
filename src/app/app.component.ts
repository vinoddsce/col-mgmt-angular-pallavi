import { Component, ElementRef, OnInit } from '@angular/core';
import Student from './model/Student';
import { StudentService } from './services/student.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Student Management Angular App !!!!!';
  departmentName: string = "NA";

  stdAddErrorMessage: string = '';
  errorMessage: string = '';


  // students: { _id: number, name: string, course: string, fees: number }[] = [];

  // s1 = { _id: "", name: "Vinod", course: "", fees: 0 };
  // s2 = { _id: "100", name: "Kumar", course: "", fees: 0 };
  // s3 = { _id: "", name: "M", course: "", fees: 0 };

  students: Student[] = [];
  count: number = 0;

  isDev: boolean = true;
  isShowLogo: boolean = true;


  toDate: Date = new Date();

  constructor(private stdService: StudentService) {
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

    console.log('AppComponent -> ngOnInit(): void', this.stdService.getStudents());
    this.stdService.getStudents().subscribe(res => {
      console.log('Data: ', res);
      this.students = res;
    }, (error: any) => {
      console.log('Error-Response: ', error);
      this.errorMessage = error.statusText;
    });

  }
  addStudentEvent(obj: Student) {

    let result = this.stdService.addStudent(obj);

    result.subscribe(data => {
      console.log('Result: ', data);
      this.students.push(data);
    },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
        this.stdAddErrorMessage = err.message;
      }
    );
    // 
    this.count = this.students.length;
    console.log(this.students);
  }

  deleteStudent(_id: string) {
    this.stdService.deleteStd(_id).subscribe(info => {

    })

  }
}

