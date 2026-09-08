export interface CurriculumCell {
  value: string | number;
  rowSpan?: number;
  colSpan?: number;
}

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
