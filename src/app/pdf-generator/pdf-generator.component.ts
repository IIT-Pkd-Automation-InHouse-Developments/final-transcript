import { Component, Input } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {Attendance, CourseCategory, Grade, Semester} from "../models/Semester";
import {SemesterPair} from "../transcript/transcript.component";
import {StudentCourseData} from "../models/StudentData";
import * as pdfMake from 'pdfmake/build/pdfmake';

@Component({
  selector: 'app-pdf-generator',
  standalone: true,
  template: `<button (click)="generatePDF()">Download PDF</button>`,
  styles: [``]
})
export class PdfGeneratorComponent {
  @Input() semesterPairs!: SemesterPair[];
  @Input() student!: StudentCourseData;
  @Input() gpaList!: number[];
  fontSize: number = 9;  // Adjusted font size for better fit

  generatePDF() {
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageHeight = doc.internal.pageSize.height;
    let currentY = 20;  // Initial Y position for the content

    // Add title and student details
    doc.setFontSize(10);  // Slightly larger font for the title
    doc.text('Transcript', 105, currentY, { align: 'center' });
    currentY += 10;
    doc.setFontSize(this.fontSize);  // Adjusted font size for better fit
    doc.text(`Name: ${this.student.name}`, 14, currentY);
    doc.text(`Roll Number: ${this.student.rollNumber}`, 105, currentY);
    currentY += 7;
    doc.text(`Department: ${this.student.department}`, 14, currentY);
    doc.text(`Total Credits: ${this.student.totalCredits}`, 105, currentY);
    currentY += 10;

    // Loop through all the semesterPairs and add tables side by side
    this.semesterPairs.forEach((pair, index) => {
      const oddGpa = this.gpaList[index * 2] || 'N/A';
      const evenGpa = this.gpaList[index * 2 + 1] || 'N/A';

      // Check if there is enough space on the page for both tables
      const tableHeightEstimate = this.getTableHeightEstimate(pair.odd) + (pair.even ? this.getTableHeightEstimate(pair.even) : 0);

      if (currentY + tableHeightEstimate > pageHeight) {
        doc.addPage(); // Start a new page if space is not enough
        currentY = 20;  // Reset Y position for the new page
      }

      const startY = currentY; // Save starting Y position to keep both tables aligned

      // Odd Semester (Left Side)
      doc.setFontSize(this.fontSize);
      doc.text(`Semester ${pair.odd.semesterID} (GPA: ${oddGpa})`, 14, startY);  // Starting at 14mm from the left
      (doc as any).autoTable({
        head: [['Sno.', 'Course Code', 'Course Name', 'Category', 'Credits', 'Grade', 'Attendance']],
        body: this.getTableData(pair.odd),
        startY: startY + 5,
        theme: 'striped',
        margin: { left: 14 },  // Align to the left side
        columnStyles: {
          0: { cellWidth: 8 },  // Adjust width of Sno column
          1: { cellWidth: 20 }, // Adjust width of Course Code column
          2: { cellWidth: 45 }, // Adjust width of Course Name column to prevent splitting
          3: { cellWidth: 18 }, // Adjust width of Category column
          4: { cellWidth: 10 }, // Adjust width of Credits column
          5: { cellWidth: 10 }, // Adjust width of Grade column
          6: { cellWidth: 15 }, // Adjust width of Attendance column
        },
        headStyles: { fillColor: [41, 128, 185], fontSize: this.fontSize },
        bodyStyles: { fontSize: this.fontSize }
      });

      // Even Semester (Right Side), if it exists
      if (pair.even) {
        doc.setFontSize(this.fontSize);
        doc.text(`Semester ${pair.even.semesterID} (GPA: ${evenGpa})`, 105, startY);  // Starting at 105mm from the left (right side)
        (doc as any).autoTable({
          head: [['Sno.', 'Course Code', 'Course Name', 'Category', 'Credits', 'Grade', 'Attendance']],
          body: this.getTableData(pair.even),
          startY: startY + 5,  // Same Y position as odd semester
          theme: 'striped',
          margin: { left: 105 },  // Align to the right side
          columnStyles: {
            0: { cellWidth: 8 },  // Adjust width of Sno column
            1: { cellWidth: 20 }, // Adjust width of Course Code column
            2: { cellWidth: 45 }, // Adjust width of Course Name column to prevent splitting
            3: { cellWidth: 18 }, // Adjust width of Category column
            4: { cellWidth: 10 }, // Adjust width of Credits column
            5: { cellWidth: 10 }, // Adjust width of Grade column
            6: { cellWidth: 15 }, // Adjust width of Attendance column
          },
          headStyles: { fillColor: [39, 174, 96], fontSize: this.fontSize },
          bodyStyles: { fontSize: this.fontSize }
        });
      }

      // Determine the next Y position by comparing both table heights
      const oddTableHeight = (doc as any).lastAutoTable.finalY;
      const evenTableHeight = pair.even ? (doc as any).lastAutoTable.finalY : oddTableHeight;
      currentY = Math.max(oddTableHeight, evenTableHeight) + 10;
    });

    // Save the generated PDF
    doc.save('transcript.pdf');
  }

  getTableData(semester: Semester) {
    return semester.courses.map((course, index) => [
      index + 1,
      course.courseID,
      course.courseTitle,
      CourseCategory[course.category],
      course.credits,
      Grade[course.grade],
      Attendance[course.attendance]
    ]);
  }

  // Estimate the table height for a given semester based on the number of rows
  getTableHeightEstimate(semester: Semester): number {
    const rowHeight = 8;  // Estimated row height
    const numberOfRows = semester.courses.length;
    const tablePadding = 10;  // Some padding for header and footers
    return (numberOfRows * rowHeight) + tablePadding;
  }
}
