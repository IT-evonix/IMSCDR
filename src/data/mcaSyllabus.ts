import type { Column, HeaderGroup, TableRow } from "@/components/ui/Table";

// Common columns used across all MCA semester tables
export const mcaCurriculumColumns: Column[] = [
  { key: "srNo", title: "Sr. No." },
  { key: "course", title: "Course Title" },
  { key: "courseCode", title: "Course Code" },
  { key: "cp", title: "CP" },
  { key: "ext", title: "EXT" },
  { key: "int", title: "INT" },
];

/* ============================ SEMESTER I ============================ */
export const mcaSem1Data: TableRow[] = [
  {
    srNo: 1,
    course: "Python Programming",
    courseCode: "PPR501MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },
  {
    srNo: 2,
    course: "Data Structure and Algorithms",
    courseCode: "DSA502MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },
  {
    srNo: 3,
    course: "Advanced DBMS",
    courseCode: "ADB503MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },
  {
    srNo: 4,
    course: "Business Statistics",
    courseCode: "BST504MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },
  {
    srNo: 5,
    course: "Software Engineering and Project Management",
    courseCode: "SEP505MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },

  // Elective - I (merged CP/EXT/INT across label row + 4 options)
  {
    srNo: 6,
    course: "Elective- I (Select any one from following)",
    courseCode: null,
    cp: { value: 3, rowSpan: 5 },
    ext: { value: 45, rowSpan: 5 },
    int: { value: 30, rowSpan: 5 },
  },
  {
    srNo: 7,
    course: "Fundamentals of Cloud Computing",
    courseCode: "FCC510MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: 8,
    course: "Web Development",
    courseCode: "WDE511MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: 9,
    course: "Fundamental of Data Science",
    courseCode: "FDS512MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: 10,
    course: "Introduction to Cyber Security",
    courseCode: "ICE513MJ",
    cp: null,
    ext: null,
    int: null,
  },

  // *Practical section
  {
    srNo: 11,
    course: "*Practical",
    courseCode: "",
    cp: "",
    ext: "",
    int: "",
  },
  {
    srNo: 12,
    course: "Practical based on Python and DS",
    courseCode: "PBP506MJP",
    cp: 3,
    ext: "-",
    int: 50,
  },
  {
    srNo: 13,
    course: "Mini Project",
    courseCode: "MP541MP",
    cp: 3,
    ext: "-",
    int: 50,
  },

  // Soft Skills and IKS section
  {
    srNo: 14,
    course: "Soft Skills and IKS",
    courseCode: "",
    cp: "",
    ext: "",
    int: "",
  },
  {
    srNo: 15,
    course: "Soft Skills – I",
    courseCode: "SSI507MJ",
    cp: 1,
    ext: "-",
    int: 25,
  },
  {
    srNo: 16,
    course: "IKS-I",
    courseCode: "IKS508MJ",
    cp: 1,
    ext: "-",
    int: 25,
  },

  // Semester Total
  {
    srNo: 17,
    course: "Semester-I Total",
    courseCode: "",
    cp: 26,
    ext: 270,
    int: 330,
  },
];

/* ============================ SEMESTER II ============================ */
export const mcaSem2Data: TableRow[] = [
  {
    srNo: 1,
    course: "Java Programming",
    courseCode: "JPR551MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },
  {
    srNo: 2,
    course: "Optimization Techniques",
    courseCode: "OTE552MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },
  {
    srNo: 3,
    course: "Software Testing and Quality Assurance",
    courseCode: "STQ553MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },
  {
    srNo: 4,
    course: "Research Methodology",
    courseCode: "RMW554MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },

  // Elective - II
  {
    srNo: 5,
    course: "Elective- II (Select any one from following)",
    courseCode: null,
    cp: { value: 3, rowSpan: 5 },
    ext: { value: 45, rowSpan: 5 },
    int: { value: 30, rowSpan: 5 },
  },
  {
    srNo: null,
    course: "Cloud Computing Management and Security",
    courseCode: "CCM560MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "JavaScript",
    courseCode: "JS561MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Machine Learning Techniques",
    courseCode: "MLT562MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Essentials of Cyber Security",
    courseCode: "ECS563MJ",
    cp: null,
    ext: null,
    int: null,
  },

  // Elective - III
  {
    srNo: 6,
    course: "Elective- III (Select any one from following)",
    courseCode: null,
    cp: { value: 3, rowSpan: 5 },
    ext: { value: 45, rowSpan: 5 },
    int: { value: 30, rowSpan: 5 },
  },
  {
    srNo: null,
    course: "Essentials of Cloud Computing and Security",
    courseCode: "ECS564MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Advance Web Development",
    courseCode: "AWD565MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Power BI",
    courseCode: "PBI566MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Essentials of Information Security",
    courseCode: "EIS567MJ",
    cp: null,
    ext: null,
    int: null,
  },

  // *Practical section
  {
    srNo: null,
    course: "*Practical",
    courseCode: "",
    cp: "",
    ext: "",
    int: "",
  },
  {
    srNo: 7,
    course: "Practical based on Java",
    courseCode: "PBJ555MJP",
    cp: 3,
    ext: "-",
    int: 50,
  },
  {
    srNo: 8,
    course: "Mini Project",
    courseCode: "MP581MP",
    cp: 3,
    ext: "-",
    int: 50,
  },

  // Soft Skills and IKS section
  {
    srNo: null,
    course: "Soft Skills and IKS",
    courseCode: "",
    cp: "",
    ext: "",
    int: "",
  },
  {
    srNo: 9,
    course: "Soft Skills – II",
    courseCode: "SSK556MJ",
    cp: 1,
    ext: "-",
    int: 25,
  },
  {
    srNo: 10,
    course: "IKS-II",
    courseCode: "IKS557MJ",
    cp: 1,
    ext: "-",
    int: 25,
  },

  // Semester Total
  {
    srNo: null,
    course: "Semester-II Total",
    courseCode: "",
    cp: 26,
    ext: 270,
    int: 330,
  },
];

/* ============================ SEMESTER III ============================ */
export const mcaSem3Data: TableRow[] = [
  {
    srNo: 1,
    course: "Organizational Behaviour",
    courseCode: "OBE601MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },
  {
    srNo: 2,
    course: "Design and Analysis of Algorithm",
    courseCode: "DAA602MJ",
    cp: 3,
    ext: 45,
    int: 30,
  },

  // Elective - IV
  {
    srNo: 3,
    course: "Elective- IV (Select any one from following)",
    courseCode: null,
    cp: { value: 3, rowSpan: 5 },
    ext: { value: 45, rowSpan: 5 },
    int: { value: 30, rowSpan: 5 },
  },
  {
    srNo: null,
    course: "Cloud APTs and Services",
    courseCode: "CAS610MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Mobile Application Development",
    courseCode: "MAD611MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Tableau",
    courseCode: "TAB612MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "End -Point Security",
    courseCode: "EPS613MJ",
    cp: null,
    ext: null,
    int: null,
  },

  // Elective - V
  {
    srNo: 4,
    course: "Elective- V (Select any one from following)",
    courseCode: null,
    cp: { value: 3, rowSpan: 5 },
    ext: { value: 45, rowSpan: 5 },
    int: { value: 30, rowSpan: 5 },
  },
  {
    srNo: null,
    course: "Cloud Migration and Management",
    courseCode: "CMM614MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "MERN Stack Development",
    courseCode: "MSD615MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Deep Learning",
    courseCode: "DEL616MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Ethical Hacking",
    courseCode: "EH617MJ",
    cp: null,
    ext: null,
    int: null,
  },

  // Elective - VI
  {
    srNo: 5,
    course: "Elective- VI (Select any one from following)",
    courseCode: null,
    cp: { value: 3, rowSpan: 5 },
    ext: { value: 45, rowSpan: 5 },
    int: { value: 30, rowSpan: 5 },
  },
  {
    srNo: null,
    course: "Enterprise Resource Planning (ERP)",
    courseCode: "ERP618MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "E-Commerce",
    courseCode: "EC619MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Social media Marketing",
    courseCode: "SMM620MJ",
    cp: null,
    ext: null,
    int: null,
  },
  {
    srNo: null,
    course: "Innovation and Entrepreneurship Development",
    courseCode: "IED621MJ",
    cp: null,
    ext: null,
    int: null,
  },

  // *Practical section
  {
    srNo: null,
    course: "*Practical",
    courseCode: "",
    cp: "",
    ext: "",
    int: "",
  },
  {
    srNo: 6,
    course: "Practical based on Electives IV and V",
    courseCode: "PBE603MJP",
    cp: 3,
    ext: "-",
    int: 50,
  },
  {
    srNo: 7,
    course: "Research Project",
    courseCode: "RP641RP",
    cp: 6,
    ext: "-",
    int: 100,
  },

  // Soft Skills section
  {
    srNo: null,
    course: "Soft Skills",
    courseCode: "",
    cp: "",
    ext: "",
    int: "",
  },
  {
    srNo: 8,
    course: "Soft Skills- III",
    courseCode: "SSK604MJ",
    cp: 1,
    ext: "-",
    int: 25,
  },

  // Semester Total
  {
    srNo: null,
    course: "Semester-III Total",
    courseCode: "",
    cp: 25,
    ext: 225,
    int: 325,
  },
];

/* ============================ SEMESTER IV ============================ */
export const mcaSem4Data: TableRow[] = [
  {
    srNo: 1,
    course: "Internship/Project Work (FP/OJT)",
    courseCode: "IPW681FP",
    cp: 12,
    ext: 270,
    int: 180,
  },
  {
    srNo: 2,
    course: "MOOC- I",
    courseCode: "MOO682MJ",
    cp: 3,
    ext: "-",
    int: 50,
  },
  {
    srNo: 3,
    course: "MOOC- II",
    courseCode: "MOO683MJ",
    cp: 3,
    ext: "-",
    int: 50,
  },

  // Semester Total
  {
    srNo: null,
    course: "Semester-IV Total",
    courseCode: "",
    cp: 18,
    ext: 270,
    int: 280,
  },
];

/* ======================= CREDIT SUMMARY TABLE ======================= */
export const mcaSummaryColumns: Column[] = [
  { key: "semester", title: "Semester" },
  { key: "creditPoints", title: "Credit Points" },
  { key: "ue", title: "UE" },
  { key: "ie", title: "IE" },
];

export const mcaSummaryData: TableRow[] = [
  { semester: "Semester I", creditPoints: 26, ue: 270, ie: 330 },
  { semester: "Semester II", creditPoints: 26, ue: 270, ie: 330 },
  { semester: "Semester III", creditPoints: 25, ue: 225, ie: 325 },
  { semester: "Semester IV", creditPoints: 18, ue: 270, ie: 280 },
  { semester: "Total", creditPoints: 95, ue: 1035, ie: 1265 },
];

export const mcaTotalMarks = 2300;
