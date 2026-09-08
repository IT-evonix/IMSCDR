export interface CurriculumCellObject {
  value: string | number;
  rowSpan?: number;
  colSpan?: number;
}

export type CurriculumCell = string | number | CurriculumCellObject;

export interface CurriculumRow {
  cells: Record<string, CurriculumCell | null>;
  className?: string;
}

export const bbaBcaCurriculumColumns = [
  { key: "courseType", title: "Course Type" },
  { key: "course", title: "Course" },
  { key: "paperTitle", title: "Paper Title" },
  { key: "credits", title: "Credits" },
];

export const bbaBcaCurriculumData: CurriculumRow[] = [
  {
    cells: {
      courseType: { value: "Major Mandatory (06)", rowSpan: 11 },
      course: "Major Mandatory 1 (Compulsory)",
      paperTitle: "Principles of Management",
      credits: 2,
    },
  },
  {
    cells: {
      courseType: null,
      course: { value: "Major Mandatory 2 (Select Any one Specialization)", rowSpan: 5 },
      paperTitle: "Finance: Principles of Finance",
      credits: { value: 2, rowSpan: 5 },
    },
  },
  {
    cells: {
      courseType: null,
      course: null,
      paperTitle: "Marketing: Principles of Marketing",
      credits: null,
    },
  },
  {
    cells: {
      courseType: null,
      course: null,
      paperTitle: "HRM: Principles of Human Resource Management",
      credits: null,
    },
  },
  {
    cells: {
      courseType: null,
      course: null,
      paperTitle: "Agri. Bussi.: Agriculture and Indian Economy",
      credits: null,
    },
  },
  {
    cells: {
      courseType: null,
      course: null,
      paperTitle: "Service Mgmt.: Essentials of Services Management",
      credits: null,
    },
  },
  {
    cells: {
      courseType: null,
      course: { value: "Major Mandatory 3 (Select Any one Specialization other than selected in Major Mandatory 2)", rowSpan: 5 },
      paperTitle: "Finance: Principles of Finance",
      credits: { value: 2, rowSpan: 5 },
    },
  },
  {
    cells: {
      courseType: null,
      course: null,
      paperTitle: "Marketing: Principles of Marketing",
      credits: null,
    },
  },
  {
    cells: {
      courseType: null,
      course: null,
      paperTitle: "HRM: Principles of Human Resource Management",
      credits: null,
    },
  },
  {
    cells: {
      courseType: null,
      course: null,
      paperTitle: "Agri. Bussi.: Agriculture and Indian Economy",
      credits: null,
    },
  },
  {
    cells: {
      courseType: null,
      course: null,
      paperTitle: "Service Mgmt.: Essentials of Services Management",
      credits: null,
    },
  },
  {
    cells: {
      courseType: { value: "Open Elective (OE)", rowSpan: 2 },
      course: "Open Elective (OE)",
      paperTitle: "Business Mathematics - I",
      credits: 2,
    },
  },
  {
    cells: {
      courseType: null,
      course: "Open Elective (OE)",
      paperTitle: "Business Statistics - I",
      credits: 2,
    },
  },
  {
    cells: {
      courseType: "Vocational Skill Development Course (VSC)",
      course: "Vocational Skill Development Course",
      paperTitle: "Information Technology for Business",
      credits: 2,
    },
  },
  {
    cells: {
      courseType: "Skill Enhancement Course (SEC)",
      course: "Skill Enhancement Course (SEC)",
      paperTitle: "Soft Skills Development",
      credits: 2,
    },
  },
  {
    cells: {
      courseType: "Ability Enhancement Course (AEC)",
      course: "Ability Enhancement Course (AEC)",
      paperTitle: "Business Communication Skills - I",
      credits: 2,
    },
  },
  {
    cells: {
      courseType: "Value Education Course (VEC)",
      course: "Value Education Course (VEC)",
      paperTitle: "Environmental Awareness",
      credits: 2,
    },
  },
  {
    cells: {
      courseType: "Indian Knowledge System (IKS)",
      course: "Indian Knowledge System (IKS)",
      paperTitle: "Generic IKS",
      credits: 2,
    },
  },
  {
    cells: {
      courseType: "Co-Curricular Courses (CC)",
      course: "Co-Curricular Courses (CC)",
      paperTitle: "Physical Education - I",
      credits: 2,
    },
  },
  {
    className: "bba-bca-total-row",
    cells: {
      courseType: { value: "Total", colSpan: 3 },
      course: null,
      paperTitle: null,
      credits: 22,
    },
  },
];

export const bcaCurriculumColumns = [
  { key: "courseCode", title: "Course Code" },
  { key: "courseType", title: "Course Type" },
  { key: "courseName", title: "Course Name" },
  { key: "credits", title: "Credits" },
];

export const bcaSemesterOneData: CurriculumRow[] = [
  {
    cells: {
      courseCode: "CA-101-T",
      courseType: { value: "Subject 1", rowSpan: 2 },
      courseName: "Problem Solving and Programming in C",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CA-102-P",
      courseType: null,
      courseName: "Lab course on CA-101 - T",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CA-103-T",
      courseType: { value: "BCA", rowSpan: 2 },
      courseName: "Computer Organization & Architecture",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CA-104-P",
      courseType: null,
      courseName: "Lab course on CA-103 - T",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CA-105-T",
      courseType: { value: "BCA", rowSpan: 2 },
      courseName: "Discrete Mathematics and Statistics",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CA-106-P",
      courseType: null,
      courseName: "Laboratory course on CA-105 - T",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "OE-101-CA",
      courseType: "GE/OE",
      courseName: "Introduction to Data Science",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "VSEC-101-CA",
      courseType: "VSEC",
      courseName: "HTML and Web Page Designing",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "IKS - 100 - T",
      courseType: "IKS Generic",
      courseName: "Course from Basket of courses prepared by the University",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "AEC - 101 - ENG",
      courseType: "AEC",
      courseName: "Course from University Basket",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "VEC - 101 - ENG",
      courseType: "VEC",
      courseName: "Course from University Basket",
      credits: 2,
    },
  },
  {
    className: "bba-bca-total-row",
    cells: {
      courseCode: { value: "Total", colSpan: 3 },
      courseType: null,
      courseName: null,
      credits: 22,
    },
  },
];

export const bcaSemesterTwoData: CurriculumRow[] = [
  {
    cells: {
      courseCode: "CA-151-T",
      courseType: { value: "Subject 1", rowSpan: 2 },
      courseName: "Advanced C Programming",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CA-152-P",
      courseType: null,
      courseName: "Lab course on CA-151 - T",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CA-153-T",
      courseType: { value: "BCA", rowSpan: 2 },
      courseName: "Introduction to Microcontrollers",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CA-154-P",
      courseType: null,
      courseName: "Lab course on CA-153 - T",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CA-155-T",
      courseType: { value: "BCA", rowSpan: 2 },
      courseName: "Linear Algebra",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CA-106-P",
      courseType: null,
      courseName: "Laboratory course on CA-155 - T",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "OE-151-CA",
      courseType: "GE/OE",
      courseName: "Data Science Using Spreadsheet Software",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "VSEC-151-CA",
      courseType: "VSEC",
      courseName: "Software Tools for Business Communications",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "AEC-151-ENG",
      courseType: "AEC",
      courseName: "Course from University Basket",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "VEC-151-ENV",
      courseType: "VEC",
      courseName: "Course from University Basket",
      credits: 2,
    },
  },
  {
    cells: {
      courseCode: "CC-151-PE",
      courseType: "CC",
      courseName: "Course from University Basket",
      credits: 2,
    },
  },
  {
    className: "bba-bca-total-row",
    cells: {
      courseCode: { value: "Total", colSpan: 3 },
      courseType: null,
      courseName: null,
      credits: 22,
    },
  },
];
