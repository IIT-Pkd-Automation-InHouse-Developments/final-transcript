export enum Grade {
  "S", "A", "B", "C", "D","E",
  "U", "I", "W", "P", "Y", "N"
}
export enum Attendance{
  "VG", "G", "P"
}
export enum Category{
  "BST", "IDC", "PME", "GCE",
  "PMT", "BEP", "BSP", "HSE",
  "CWC", "MAE", "PMP", "BET"
}

export interface Course {
  courseID: string;
  courseTitle: string;
  credits: number;
  grade: Grade;
  attendance: Attendance;
  category: Category;
  passed: boolean;
}

export interface Semester {
  semesterID: number;
  requiredCredits: number;
  earnedCredits: number;
  courses: Course[];
  gpa: number;

}
