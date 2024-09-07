import {Student} from "./models/StudentData";
import {Attendance, Grade, Category} from "./models/Semester";

export  let Data: Student[] =
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
              grade: Grade.C,
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
              grade: Grade.C,
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
              grade: Grade.C,
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
