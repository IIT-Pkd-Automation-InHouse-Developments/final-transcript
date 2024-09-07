import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbNav, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {calculateGPA} from "./helper/calculateGPA";
import {StudentListComponent} from "./student-list/student-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbNav, NgbNavModule, StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-transcript';
  // add logic to store gpa in the student model
  // if already present, fetch it instead of
  // recalculating
//  gpa : number = calculateGPA(Data[1],1);
}
