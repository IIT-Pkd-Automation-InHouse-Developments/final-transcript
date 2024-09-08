import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {StudentCourseData} from "../models/StudentData";
import {courseData, getStudentByRollNumber} from "../CourseData";
import {Attendance, CourseCategory, Grade, Semester} from "../models/Semester";

@Component({
  selector: 'app-transcript',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgForOf
  ],
  templateUrl: './transcript.component.html',
  styleUrl: './transcript.component.css'
})
export class TranscriptComponent implements OnInit{
  protected student: StudentCourseData | undefined;
   oddSemesters: Semester[] = [];
   evenSemesters: Semester[] = [];
  constructor(private route :ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const rollNumber = params['rollNumber'];
      if (rollNumber) {
        this.student = getStudentByRollNumber(Number(rollNumber));
        this.separateSemesters(this.student?.semestersPassed)
      }
    });
  }
  separateSemesters(semesters: Semester[] | undefined): void {
    if(semesters==undefined) return;
    this.oddSemesters = semesters.filter(sem => sem.semesterID % 2 !== 0);
    this.evenSemesters = semesters.filter(sem => sem.semesterID % 2 === 0);
  }

  protected readonly courseData = courseData;
  protected readonly Attendance = Attendance;
  protected readonly Grade = Grade;
  protected readonly Category = CourseCategory;
  protected readonly CourseCategory = CourseCategory;
}
