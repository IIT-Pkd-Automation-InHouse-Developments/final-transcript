import {Component, OnInit} from '@angular/core';
import {studentData} from "../CourseData";
import {NgClass, NgFor, NgIf} from "@angular/common";
import {Student} from "../models/Student";
import {FormsModule} from "@angular/forms";
import {RouterOutlet, RouterLink, Router} from "@angular/router";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, NgClass, RouterOutlet, RouterLink],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  protected readonly studentData = studentData;
  filteredStudentData: Student[] = [...this.studentData];
  searchText: string = '';
  protected selectedDepartment: string = '';
  selectedStudent: number | null = null;

  constructor(private router : Router) { }
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

  filterByDepartment(): void {
    if (this.selectedDepartment) {
      this.filteredStudentData = this.studentData.filter(student =>
        student.department === this.selectedDepartment
      );
    } else {
      this.filteredStudentData = [...this.studentData]; // Show all if no department is selected
    }
  }

  selectStudent(index: number): void {
    this.selectedStudent = index; // Set the selected student by index
  }

  generateNext(student:Student) {
    this.router.navigate(['/transcript'], {queryParams: {rollNumber: student.rollNumber}})
  }
}
