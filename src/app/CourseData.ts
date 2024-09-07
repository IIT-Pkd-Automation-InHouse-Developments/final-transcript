import {StudentCourseData} from "./models/StudentData";
import {Attendance, Grade, Category} from "./models/Semester";
import {Student} from "./models/Student";

export let studentData: Student[] =
[
  {
    id: "1",
    name: "Enjam Suma",
    rollNumber : 112101015,
    department: "CSE"
  },
  {
    id: "2",
    name: "Kshitij Ghodake",
    rollNumber: 112101025,
    department: "CSE"
  },
  {
  "id": "13eb3833-4f83-4e95-9372-2f252cc4263f",
  "name": "Joell Thing",
  rollNumber: 112601025,
  "department": "CSE"
  },
  {
  "id": "b1635445-5a94-4590-92d7-82d782d0fed2",
  "name": "Donnajean Ferreres",
  rollNumber: 112501064,
  "department": "CSE"
}, {
  "id": "1abc85f1-65f9-4242-b883-959bdcafe44d",
  "name": "Xymenes Dufoure",
  rollNumber: 112801068,
  "department": "CSE"
}, {
  "id": "57d77b52-6ba4-4961-b6ba-324f8e4ef974",
  "name": "Anet Bonnin",
  rollNumber: 112401056,
  "department": "CSE"
}, {
  "id": "ec3ba27f-bfc5-4d33-9bed-4e5ebaca1ad2",
  "name": "Karl Louder",
  rollNumber: 112801098,
  "department": "CSE"
}, {
  "id": "66e8bc43-faa2-4c46-b9fe-c33ba1dbd179",
  "name": "Valentin Foyle",
  rollNumber: 112301098,
  "department": "CSE"
}, {
  "id": "82c4a488-5dee-4e81-a560-db7b2e23e302",
  "name": "Misha Nendick",
  rollNumber: 112001021,
  "department": "CSE"
}, {
  "id": "9fd6930f-a5c7-4600-b906-1794dc82a867",
  "name": "Sidnee Grover",
  rollNumber: 112201020,
  "department": "CSE"
}, {
  "id": "6f35439a-2831-463d-bfff-287092200ea6",
  "name": "Lois Fassmann",
  rollNumber: 112101045,
  "department": "CSE"
}
]
export let a = studentData[2].id;
export  let courseData: StudentCourseData[] =
[
  {
    id: "1",
    name: "Suma Enjam",
    rollNumber: 112101015,
    department: "CSE",
    totalCredits: 160, // for btech
    earnedCredits: 140,
    semestersPassed: [
      {
        semesterID: 1,
        requiredCredits: 22,
        earnedCredits: 22,
        courses: [
          {
            courseID: "PH1010",
            courseTitle: "Physics I",
            credits: 3,
            grade: Grade.S,
            attendance: Attendance.VG,
            category: Category.BST,
            passed: true
          },
          {
            courseID: "ID1030",
            courseTitle: "Introduction to Engineering",
            credits: 1,
            grade: Grade.S,
            attendance: Attendance.VG,
            category: Category.IDC,
            passed: true
          },
          {
            courseID: "ID1010",
            courseTitle: "Ecology and Environment",
            credits: 2,
            grade: Grade.S,
            attendance: Attendance.VG,
            category: Category.IDC,
            passed: true
          },
          {
            courseID: "MA1011",
            courseTitle: "Linear Algebra and One-variable Calculus",
            credits: 4,
            grade: Grade.S,
            attendance: Attendance.VG,
            category: Category.BST,
            passed: true
          },
          {
            courseID: "CY1011",
            courseTitle: "Thermodynamics, Kinetics and Organic Reactions",
            credits: 3,
            grade: Grade.S,
            attendance: Attendance.VG,
            category: Category.BST,
            passed: true
          },
          {
            courseID: "ME1130",
            courseTitle: "Engineering Drawing",
            credits: 3,
            grade: Grade.S,
            attendance: Attendance.VG,
            category: Category.BEP,
            passed: true
          },
          {
            courseID: "ID1050",
            courseTitle: "Concepts in Engineering Design",
            credits: 2,
            grade: Grade.S,
            attendance: Attendance.VG,
            category: Category.IDC,
            passed: true
          },
          {
            courseID: "ME1150",
            courseTitle: "Workshop Practice I",
            credits: 2,
            grade: Grade.S,
            attendance: Attendance.VG,
            category: Category.BEP,
            passed: true
          },
          {
            courseID: "CY1140",
            courseTitle: "Chemistry Laboratory",
            credits: 2,
            grade: Grade.S,
            attendance: Attendance.VG,
            category: Category.BSP,
            passed: true
          },
        ],
        gpa: 10.00
      }
    ]
  },
  {
    id: "2",
    name: "Kshitij M. Ghodake",
    rollNumber: 112101025,
    department: "CSE",
    totalCredits: 160,
    earnedCredits: 140,
    semestersPassed: [
        {
          semesterID: 1,
          requiredCredits: 22,
          earnedCredits: 22,
          courses: [
            {
              courseID: "PH1010",
              courseTitle: "Physics I",
              credits: 3,
              grade: Grade.B,
              attendance: Attendance.VG,
              category: Category.BST,
              passed: true
            },
            {
              courseID: "ID1030",
              courseTitle: "Introduction to Engineering",
              credits: 1,
              grade: Grade.B,
              attendance: Attendance.VG,
              category: Category.IDC,
              passed: true
            },
            {
              courseID: "ID1010",
              courseTitle: "Ecology and Environment",
              credits: 2,
              grade: Grade.A,
              attendance: Attendance.VG,
              category: Category.IDC,
              passed: true
            },
            {
              courseID: "MA1011",
              courseTitle: "Linear Algebra and One-variable Calculus",
              credits: 4,
              grade: Grade.B,
              attendance: Attendance.VG,
              category: Category.BST,
              passed: true
            },
            {
              courseID: "CY1011",
              courseTitle: "Thermodynamics, Kinetics and Organic Reactions",
              credits: 3,
              grade: Grade.B,
              attendance: Attendance.VG,
              category: Category.BST,
              passed: true
            },
            {
              courseID: "ME1130",
              courseTitle: "Engineering Drawing",
              credits: 3,
              grade: Grade.A,
              attendance: Attendance.VG,
              category: Category.BEP,
              passed: true
            },
            {
              courseID: "ID1050",
              courseTitle: "Concepts in Engineering Design",
              credits: 2,
              grade: Grade.S,
              attendance: Attendance.VG,
              category: Category.IDC,
              passed: true
            },
            {
              courseID: "ME1150",
              courseTitle: "Workshop Practice I",
              credits: 2,
              grade: Grade.S,
              attendance: Attendance.VG,
              category: Category.BEP,
              passed: true
            },
            {
              courseID: "CY1140",
              courseTitle: "Chemistry Laboratory",
              credits: 2,
              grade: Grade.A,
              attendance: Attendance.VG,
              category: Category.BSP,
              passed: true
            },
          ],
          gpa: 10.00
        }
      ]
  }
]
