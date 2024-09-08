import {StudentCourseData} from "../models/StudentData";

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
      currentSemester.cgpa = currentSemester.gpa;
    } else {
      // Add up the earned credits from previous semesters
      earnedCreditsNow += student.semestersPassed[i - 1].earnedCredits;

      // Calculate the total weighted GPA using the CGPA of previous semester
      totalWeightedGPA = (student.semestersPassed[i - 1].cgpa * earnedCreditsNow) + (currentSemester.gpa * currentSemester.earnedCredits);

      // Update CGPA for the current semester
      currentSemester.cgpa = totalWeightedGPA / (earnedCreditsNow + currentSemester.earnedCredits);
      // student.semestersPassed[0]["gpa"] = totalWeightedGPA;
      student.semestersPassed[i]["cgpa"]= totalWeightedGPA / (earnedCreditsNow + currentSemester.earnedCredits);

    }

    // Update GPA in case you want to modify it (optional, depending on your logic)
    student.semestersPassed[i]["gpa"] = currentSemester.gpa;
  }
}



