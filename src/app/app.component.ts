import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbNav, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {calculateGPA} from "./helper/calculateMarks";
import {Data} from "./data";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbNav, NgbNavModule, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-transcript';

  // add logic to store gpa in the student model
  // if already present, fetch it instead of
  // recalculating
  gpa = calculateGPA(Data[1],1).toFixed(2);
}
