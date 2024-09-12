import {StudentCourseData} from "../models/StudentData";
import{calculateGPA} from "./calculateGPA";

export function calculateCGPA(student: StudentCourseData | undefined): void {
  if (!student) {
    return; // Return if the student is undefined.
  }

  let earnedCreditsNow = 0;  // Accumulated credits before the current semester
  let totalWeightedGPA = 0;  // Total weighted GPA

  for (let i = 0; i < student.semestersPassed.length; i++) {
    let currentSemester = student.semestersPassed[i];

    // If this is the first semester, the CGPA is just the GPA of the first semester
    if (i === 0) {
      currentSemester.cgpa = parseFloat(calculateGPA(student,i+1).toFixed(2));
    } else {
      // Add up the earned credits from previous semesters
      earnedCreditsNow += student.semestersPassed[i - 1].earnedCredits;

      totalWeightedGPA = (student.semestersPassed[i - 1].cgpa * earnedCreditsNow) + (calculateGPA(student,i+1)* currentSemester.earnedCredits);

      // Update CGPA for the current semester
      currentSemester.cgpa = Math.round((totalWeightedGPA / (earnedCreditsNow + currentSemester.earnedCredits))*100)/100;

    }


  }
}



