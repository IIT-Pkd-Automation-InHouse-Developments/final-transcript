import {StudentCourseData} from "../models/StudentData";
import {Grade} from "../models/Semester";
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
    case Grade.F:
      num=0;
      break;
    case Grade.P:
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
  if(semester.gpa==-1 || semester.gpa==10) {
    let earnedCredits = 0;
    let ec = 0;
    let requiredCredits = semester.requiredCredits;
    for (let i = 0; i < semester.courses.length; i++) {
      if (semester.courses[i].grade == Grade.P) {
        requiredCredits = requiredCredits - semester.courses[i].credits;
      }
      earnedCredits += (gradeToNum(semester.courses[i].grade)) * (semester.courses[i].credits);
      if (semester.courses[i].grade == Grade.F || semester.courses[i].grade == Grade.W || semester.courses[i].grade == Grade.N || semester.courses[i].grade == Grade.U || semester.courses[i].grade == Grade.I) {
        continue;
      }
      ec += semester.courses[i].credits;
    }

    semester.earnedCredits=ec;
    semester.gpa = parseFloat((earnedCredits / requiredCredits).toFixed(2))
    return parseFloat((earnedCredits / requiredCredits).toFixed(2));
  }
  return semester.gpa;
}

