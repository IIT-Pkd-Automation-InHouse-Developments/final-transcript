import {StudentCourseData} from "../models/StudentData";
import {Grade} from "../models/Semester";
import {courseData} from "../CourseData"
import {round} from "@popperjs/core/lib/utils/math";
function gradeToNum(grade : Grade) : number{
  let num;
  switch (grade) {
    case Grade.S:
      num = 10;
      break
    case Grade.A:
      num = 9;
      break;
    case Grade.B:
      num=8;
      break;
    case Grade.C:
      num=7;
      break;
    case Grade.D:
      num=6;
      break;
    case Grade.E:
      num=4;
      break;
    case Grade.I:
      num=0;
      break;
    case Grade.N:
      num=0;
      break;
    case Grade.W:
      num=0;
      break;
    case Grade.U:
      num=0;
      break;
    default:
      num=-1;
  }
  return num;
}

export function calculateGPA(student : StudentCourseData | undefined, semesterID : number): number {
  if(!student || !semesterID){
    return -1;
  }
  const semester = student.semestersPassed.find((s) => s.semesterID === semesterID);
  if(!semester) {
    return -1;
  }
  let earnedCredits=0;
  for(let i=0; i<semester.courses.length; i++){
    earnedCredits+=(gradeToNum(semester.courses[i].grade))*(semester.courses[i].credits);
  }
  return parseFloat((earnedCredits / semester.requiredCredits).toFixed(2));
}

