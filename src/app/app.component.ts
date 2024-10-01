import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbNav, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
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
}
