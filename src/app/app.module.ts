import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import TempConverterPipe from './pipes/temp.converter.pipe';
import { StudentService } from './services/student.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarToggleComponent } from './side-bar-toggle/side-bar-toggle.component';
import { HttpClientModule } from '@angular/common/http';

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
    ShowLogoDirective,
    TempConverterPipe,
    SideBarComponent,
    SideBarToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  // providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
