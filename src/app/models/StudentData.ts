import {Semester} from "./Semester";
export interface Student{
  id: String;
  name: string;
  rollNumber: number;
  department: string;
  semestersPassed: Semester[];
  totalCredits: number;
  earnedCredits: number;
}
