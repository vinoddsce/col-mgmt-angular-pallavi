import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, ViewChild, ElementRef, ContentChild, ContentChildren, AfterViewInit, TemplateRef, ViewChildren, QueryList } from '@angular/core';
import Student from '../model/Student';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.css']
})
export class StudentContainerComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked {

  // @Input() students: { _id: number, name: string, course: string, fees: number }[] = [];
  @Input() students: Student[] = [];
  @Input() count: number = 0;


  // @Input() companyLogo: TemplateRef<any>;

  countMessage: string = "";

  // It is mandatory to provide a static flag to define when you want a 
  // ViewChild and ContentChild instance to be resolved.
  @ContentChild("heading", { static: false }) headingRef: ElementRef;
  @ViewChild("count", { static: true }) countRef: ElementRef;

  previousStudents: Student[] = [];


  @ViewChildren(StudentComponent) studentComponenets: QueryList<StudentComponent>;

  constructor() {
    console.log("StudentContainerComponent->constructor(): ", this.students);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.count > 0) {
    //   this.countMessage = "Total Students: " + this.count;
    // } else {
    //   this.countMessage = "No Student Added";
    // }
    this.countMessage = this.count > 0 ? "Total Students: " + this.count : "No Student Added";
    console.log("StudentContainerComponent->ngOnChanges():", changes)
  }

  ngOnInit(): void {
    console.log("StudentContainerComponent->ngOnInit():");
    this.previousStudents = this.students.map(s => s);

    // if (this.count > 0) {
    //   this.countMessage = "Total Students: " + this.count;
    // } else {
    //   this.countMessage = "No Student Added";
    // }
    this.countMessage = this.count > 0 ? "Total Students: " + this.count : "No Student Added";

  }

  ngDoCheck(): void {
    if (this.previousStudents.length === this.students.length) {
      console.log("StudentContainerComponent->ngDoCheck(): Same");
    } else {
      console.log("StudentContainerComponent->ngDoCheck(): Changed");
      this.previousStudents = this.students.map(s => s);
    }
  }

  ngAfterContentInit(): void {
    console.log("StudentContainerComponent->ngAfterContentInit(): Ref", this.headingRef);
  }

  ngAfterContentChecked(): void {
    // console.log("StudentContainerComponent->ngAfterContentChecked()");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("StudentContainerComponent->ngAfterViewInit(): Ref", this.countRef);
    console.log("StudentContainerComponent->ngAfterViewInit(): studentComponenets", this.studentComponenets);

  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log("StudentContainerComponent->ngAfterViewChecked()");
    console.log("StudentContainerComponent->ngAfterViewChecked(): studentComponenets", this.studentComponenets);
  }
}

