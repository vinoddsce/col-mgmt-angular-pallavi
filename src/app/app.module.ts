import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentContainerComponent } from './department-container/department-container.component';
import { StudentContainerComponent } from './student-container/student-container.component';
import { DepartmentComponent } from './department-container/department/department.component';
import { StudentComponent } from './student-container/student/student.component';
import { TestDirective } from './directives/test.directive';
import ChangeBgColorDirective from './directives/change-bg-color.directive';
import BackgroudGreenDirective from './directives/backgroud.green.directive';
import { ShowLogoDirective } from './directives/show.logo.directive';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentContainerComponent,
    StudentContainerComponent,
    DepartmentComponent,
    StudentComponent,
    TestDirective,
    ChangeBgColorDirective,
    BackgroudGreenDirective,
    ShowLogoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
