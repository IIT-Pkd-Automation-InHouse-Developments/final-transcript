import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {StudentCourseData} from "../models/StudentData";
import {courseData, getStudentByRollNumber} from "../CourseData";
import {Attendance, CourseCategory, Grade, Semester} from "../models/Semester";
import {calculateCGPA} from "../helper/calculateCGP";
import {calculateGPA} from "../helper/calculateGPA";
import {TranscriptInfoComponent} from "../transcript-info/transcript-info.component";
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas'

interface SemesterPair{
  odd:Semester;
  even:Semester|null;
}
@Component({
  selector: 'app-transcript',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgForOf,
    TranscriptInfoComponent
  ],
  templateUrl: './transcript.component.html',
  styleUrl: './transcript.component.css'
})

export class TranscriptComponent implements OnInit {
  protected student: StudentCourseData | undefined;
  oddSemesters: Semester[] = [];
  evenSemesters: Semester[] = [];
  protected readonly courseData = courseData;
  protected readonly Attendance = Attendance;
  protected readonly Grade = Grade;
  protected semestersDone: number | undefined = 0;
  protected gpaList: number[] = [];
  protected readonly Category = CourseCategory;
  protected readonly CourseCategory = CourseCategory;
  protected semesterPairs: SemesterPair[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const rollNumber = params['rollNumber'];
      if (rollNumber) {
        this.student = getStudentByRollNumber(Number(rollNumber));
        this.separateSemesters(this.student?.semestersPassed)
        calculateCGPA(this.student)
        this.semestersDone = this.student?.semestersPassed.length;
        if (this.semestersDone != undefined) {
          for (let i = 0; i < this.semestersDone; i++) {
            this.gpaList[i] = calculateGPA(this.student, i + 1);
          }
        }
      }
    });
  }

  separateSemesters(semesters: Semester[] | undefined): void {
    if (semesters == undefined) return;

// Filter odd and even semesters
    this.oddSemesters = semesters.filter(sem => sem.semesterID % 2 !== 0);
    this.evenSemesters = semesters.filter(sem => sem.semesterID % 2 === 0);

// Create pairs of odd and even semesters
    this.semesterPairs = this.oddSemesters.map((odd, index): SemesterPair => ({
      odd,
      even: this.evenSemesters[index] || null
    }));
  }

  generatePDF() {
    const element = document.getElementById('transcript-container'); // Correct ID reference

    if (element) {
      html2canvas(element, { scale: 0.7 }).then(canvas => { // Reduce scale to decrease resolution
        const imgData = canvas.toDataURL('image/jpeg', 0.5); // Use JPEG format with reduced quality

        // Define the PDF size (A4 paper)
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 size width in mm
        const pageHeight = 297; // A4 size height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

        let heightLeft = imgHeight;
        let position = 0;

        // Add the first page
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add additional pages if the content is longer than one page
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Save the generated PDF
        pdf.save('transcript.pdf');
      }).catch(error => {
        console.error('Error generating PDF:', error);
      });
    } else {
      console.error('Element not found: #transcript-container');
    }
  }
}
