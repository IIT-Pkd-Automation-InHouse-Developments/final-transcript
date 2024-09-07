import {Component, NgModule, OnInit} from '@angular/core';
import {studentData} from "../CourseData";
import {NgFor} from "@angular/common";
import {Student} from "../models/Student";
import {FormsModule} from "@angular/forms";



@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  protected readonly studentData = studentData;
  filteredStudentData: Student[] = [...this.studentData]; // Initialize with all data
  searchText: string = '';

  constructor() { }
  ngOnInit(): void {
    this.filterData();
  }

  filterData(): void {
    const searchText = this.searchText.toLowerCase();

    this.filteredStudentData = this.studentData.filter(student => {
      return (
        student.name.toLowerCase().includes(searchText) ||
        student.rollNumber.toString().includes(searchText) ||
        student.department.toLowerCase().includes(searchText)
      );
    });
  }
}
