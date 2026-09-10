// data/mbasyllabus.ts
export interface TableCellObject {
  value: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
}
export type TableCell = string | TableCellObject | null;
export interface SyllabusColumn {
  key: string;
  title: string;
  rowSpan?: number;
  className?: string;
}
export interface SyllabusHeaderGroup {
  title: string;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}
export interface SyllabusRow {
  cells: Record<string, TableCell>;
  className?: string;
}
export interface SyllabusTitleRow {
  title: string;
  className?: string;
}
export interface SyllabusTable {
  id: string;
  /*
   * Optional heading/subheading
   */
  heading?: string;
  subHeading?: string;
  text?: string;
  /*
   * Unique class for every table
   */
  className?: string;
  titleRow?: SyllabusTitleRow;
  headerGroups?: SyllabusHeaderGroup[];
  columns: SyllabusColumn[];
  data: SyllabusRow[];
}
export interface MBASyllabusData {
  title: string;
  tables: SyllabusTable[];
}
/* =========================================================
   MBA SYLLABUS
========================================================= */
export const mbaSyllabus: MBASyllabusData = {
  title: "MBA Syllabus",
  tables: [
    /* =====================================================
       TABLE 1
       CREDIT STRUCTURE
    ===================================================== */
    {
      id: "mba-credit-structure",
      heading: "MBA Syllabus",
      subHeading:
        "PG Diploma and PG Degree (MBA) Programme Structure as per NEP",
      text: "The prescribed course structure and subject outline designed by Savitribai Phule Pune University. ",
      headerGroups: [
        {
          title: "Year",
          rowSpan: 2,
        },
        {
          title: "Level",
          rowSpan: 2,
        },
        {
          title: "Semester (2 Year)",
          rowSpan: 2,
        },
        {
          title: "Major",
          colSpan: 2,
        },
        {
          title: "RM",
          rowSpan: 2,
        },
        {
          title: "OJT / FP",
          rowSpan: 2,
        },
        {
          title: "RP",
          rowSpan: 2,
        },
        {
          title: "Cumulative",
          rowSpan: 2,
        },
        {
          title: "Degree",
          rowSpan: 2,
        },
      ],
      columns: [
        {
          key: "year",
          title: "Year",
          rowSpan: 2,
        },
        {
          key: "level",
          title: "Level",
          rowSpan: 2,
        },
        {
          key: "semester",
          title: "Semester (2 Year)",
          rowSpan: 2,
        },
        {
          key: "mandatory",
          title: "Mandatory",
          className: "electivesmandatory_th",
        },
        {
          key: "electives",
          title: "Electives",
          className: "electivesmandatory_th",
        },
        {
          key: "rm",
          title: "RM",
          rowSpan: 2,
        },
        {
          key: "ojt",
          title: "OJT / FP",
          rowSpan: 2,
        },
        {
          key: "rp",
          title: "RP",
          rowSpan: 2,
        },
        {
          key: "cumulative",
          title: "Cumulative",
          rowSpan: 2,
        },
        {
          key: "degree",
          title: "Degree",
          rowSpan: 2,
        },
      ],
      data: [
        /* -------------------------------
           Semester I
        -------------------------------- */
        {
          cells: {
            year: {
              value: "I",
              rowSpan: 2,
            },
            level: {
              value: "6.0",
              rowSpan: 2,
            },
            semester: "Semester I",
            mandatory: "22 credits",
            electives: "4",
            rm: "-",
            ojt: "-",
            rp: "-",
            cumulative: "26",
            degree: "",
          },
        },
        /* -------------------------------
           Semester II
        -------------------------------- */
        {
          cells: {
            year: null,
            level: null,
            semester: "Semester II",
            mandatory: "14 credits",
            electives: "4",
            rm: "4",
            ojt: "4\nFP",
            rp: "-",
            cumulative: "26",
            degree: "",
          },
        },
        /* -------------------------------
           Cumulative Credits for PG Diploma
        -------------------------------- */
        {
          className: "mba-blue-row",
          cells: {
            year: {
              value: "Cumulative Credits for PG Diploma",
              colSpan: 3,
            },
            level: null,
            semester: null,
            mandatory: "36",
            electives: "8",
            rm: "4",
            ojt: "4",
            rp: "-",
            cumulative: "52",
            degree: "PG Diploma (after\n3 Year Degree)",
          },
        },
        /* -------------------------------
           Exit Option
        -------------------------------- */
        {
          className: "mba-exit-row",
          cells: {
            year: {
              value:
                "Exit option: PG Diploma 52 Credits after Three Year UG Degree (with additional 4 credits of OJT)",
              colSpan: 10,
            },
            level: null,
            semester: null,
            mandatory: null,
            electives: null,
            rm: null,
            ojt: null,
            rp: null,
            cumulative: null,
            degree: null,
          },
        },
        /* -------------------------------
           Semester III
        -------------------------------- */
        {
          cells: {
            year: {
              value: "II",
              rowSpan: 2,
            },
            level: {
              value: "6.5",
              rowSpan: 2,
            },
            semester: "Semester III",
            mandatory: "6",
            electives: "12",
            rm: "-",
            ojt: "8\nOJT",
            rp: "-",
            cumulative: "26",
            degree: "",
          },
        },
        /* -------------------------------
           Semester IV
        -------------------------------- */
        {
          cells: {
            year: null,
            level: null,
            semester: "Semester IV",
            mandatory: "8",
            electives: "12",
            rm: "-",
            ojt: "-",
            rp: "6RP",
            cumulative: "26",
            degree: "",
          },
        },
        /* -------------------------------
           PG Degree after 4 Years UG
        -------------------------------- */
        {
          className: "mba-light-pink-row",
          cells: {
            year: {
              value: "",
              colSpan: 3,
            },
            level: null,
            semester: null,
            mandatory: "14",
            electives: "24",
            rm: "-",
            ojt: "08",
            rp: "06",
            cumulative: "52",
            degree: "PG Degree (after\n4-Years UG)",
          },
        },
        /* -------------------------------
           Final Cumulative
        -------------------------------- */
        {
          className: "mba-pink-row",
          cells: {
            year: {
              value: "Cum. Cr. for 2 Year PG Degree",
              colSpan: 3,
            },
            level: null,
            semester: null,
            mandatory: "50",
            electives: "32",
            rm: "4",
            ojt: "12",
            rp: "6",
            cumulative: "104",
            degree: "PG Degree (after 3 -\nYears UG)",
          },
        },
      ],
    },
    /* =====================================================
       TABLE 2
       PG DIPLOMA COURSE STRUCTURE
    ===================================================== */
    {
      id: "mba-pg-diploma-structure",
      //   heading: "PG Diploma Programme Structure as per NEP",
      subHeading: "PG Diploma Programme Structure as per NEP",
      columns: [
        {
          key: "type",
          title: "Type",
        },
        {
          key: "semester",
          title: "Semester",
        },
        {
          key: "courseType",
          title: "Course Type",
        },
        {
          key: "numberOfCourses",
          title: "Number of Courses",
        },
        {
          key: "credits",
          title: "Credits",
        },
        {
          key: "totalCredits",
          title: "Total Credits",
        },
        {
          key: "fa",
          title: "FA",
        },
        {
          key: "sa",
          title: "SA",
        },
        {
          key: "total",
          title: "Total",
        },
      ],
      data: [
        /* -------------------------------
           Semester I
        -------------------------------- */
        {
          cells: {
            type: "Mandatory",
            semester: "I",
            courseType: "Generic Core",
            numberOfCourses: "6",
            credits: "3",
            totalCredits: "18",
            fa: "240",
            sa: "360",
            total: "600",
          },
        },
        {
          cells: {
            type: "Mandatory",
            semester: "I",
            courseType: "Generic Core",
            numberOfCourses: "2",
            credits: "2",
            totalCredits: "4",
            fa: "0",
            sa: "120",
            total: "120",
          },
        },
        {
          cells: {
            type: "Elective",
            semester: "I",
            courseType: "Generic Elective",
            numberOfCourses: "2",
            credits: "2",
            totalCredits: "4",
            fa: "80",
            sa: "0",
            total: "80",
          },
        },
        /* -------------------------------
           Semester I Total
        -------------------------------- */
        {
          className: "mba-yellow-row",
          cells: {
            type: "",
            semester: "",
            courseType: "TOTAL",
            numberOfCourses: "10",
            credits: "-",
            totalCredits: "26",
            fa: "320",
            sa: "480",
            total: "800",
          },
        },
        /* -------------------------------
           Semester II
        -------------------------------- */
        {
          cells: {
            type: "Mandatory",
            semester: "II",
            courseType: "Generic Core",
            numberOfCourses: "4",
            credits: "3",
            totalCredits: "12",
            fa: "160",
            sa: "240",
            total: "400",
          },
        },
        {
          cells: {
            type: "Mandatory",
            semester: "II",
            courseType: "Generic Core",
            numberOfCourses: "1",
            credits: "2",
            totalCredits: "2",
            fa: "0",
            sa: "60",
            total: "60",
          },
        },
        {
          cells: {
            type: "Mandatory",
            semester: "II",
            courseType: "Business Research Methods",
            numberOfCourses: "1",
            credits: "2",
            totalCredits: "2",
            fa: "0",
            sa: "60",
            total: "60",
          },
        },
        {
          cells: {
            type: "Mandatory",
            semester: "II",
            courseType: "Desk Research",
            numberOfCourses: "1",
            credits: "2",
            totalCredits: "2",
            fa: "40",
            sa: "",
            total: "40",
          },
        },
        {
          cells: {
            type: "Mandatory",
            semester: "II",
            courseType: "Field Project",
            numberOfCourses: "1",
            credits: "4",
            totalCredits: "4",
            fa: "40",
            sa: "120",
            total: "160",
          },
        },
        {
          cells: {
            type: "Elective",
            semester: "II",
            courseType: "Generic Elective",
            numberOfCourses: "2",
            credits: "2",
            totalCredits: "4",
            fa: "80",
            sa: "0",
            total: "80",
          },
        },
        /* -------------------------------
           Semester II Total
        -------------------------------- */
        {
          className: "mba-yellow-row",
          cells: {
            type: "",
            semester: "",
            courseType: "TOTAL",
            numberOfCourses: "10",
            credits: "-",
            totalCredits: "26",
            fa: "320",
            sa: "480",
            total: "800",
          },
        },
        /* -------------------------------
           Final PG Diploma Row
        -------------------------------- */
        {
          className: "mba-blue-final-row",
          cells: {
            type: {
              value:
                "PG Diploma in Management after Three Year UG Degree (with additional 4 credits of OJT for Exit option)",
              colSpan: 3,
            },
            semester: null,
            courseType: null,
            numberOfCourses: "20",
            credits: "-",
            totalCredits: "52",
            fa: "640",
            sa: "960",
            total: "1600",
          },
        },
      ],
    },
    /* =========== TABLE 3 PG DEGREE PROGRAMME (MBA) STRUCTURE AS PER NEP =========== */
    {
      id: "mba-nep-structure",
      subHeading: "PG Degree Programme (MBA) Structure as per NEP",
      columns: [
        {
          key: "type",
          title: "Type",
        },
        {
          key: "semester",
          title: "Semester",
        },
        {
          key: "courseType",
          title: "Course Type",
        },
        {
          key: "numberOfCourses",
          title: "Number of Courses",
        },
        {
          key: "credits",
          title: "Credits",
        },
        {
          key: "totalCredits",
          title: "Total Credits",
        },
        {
          key: "fa",
          title: "FA",
        },
        {
          key: "sa",
          title: "SA",
        },
        {
          key: "total",
          title: "Total",
        },
      ],
      data: [
        /* -------------------------------
           Semester III
        -------------------------------- */
        {
          cells: {
            type: "Mandatory",
            semester: "III",
            courseType: "Generic Core",
            numberOfCourses: "1",
            credits: "3",
            totalCredits: "3",
            fa: "40",
            sa: "60",
            total: "100",
          },
        },
        {
          cells: {
            type: "Mandatory",
            semester: "III",
            courseType: "Subject Core",
            numberOfCourses: "1",
            credits: "3",
            totalCredits: "3",
            fa: "40",
            sa: "60",
            total: "100",
          },
        },
        {
          cells: {
            type: "Mandatory",
            semester: "III",
            courseType: "OJT (SIP)",
            numberOfCourses: "1",
            credits: "8",
            totalCredits: "8",
            fa: "80",
            sa: "120",
            total: "200",
          },
        },
        {
          cells: {
            type: "Elective",
            semester: "III",
            courseType: "Subject Elective",
            numberOfCourses: "4",
            credits: "3",
            totalCredits: "12",
            fa: "160",
            sa: "240",
            total: "400",
          },
        },
        /* -------------------------------
           Semester III Total
        -------------------------------- */
        {
          className: "mba-yellow-row",
          cells: {
            type: "",
            semester: "",
            courseType: "TOTAL",
            numberOfCourses: "7",
            credits: "-",
            totalCredits: "26",
            fa: "320",
            sa: "480",
            total: "800",
          },
        },
        /* -------------------------------
           Semester IV
        -------------------------------- */
        {
          cells: {
            type: "Mandatory",
            semester: "IV",
            courseType: "Generic Core",
            numberOfCourses: "1",
            credits: "3",
            totalCredits: "3",
            fa: "40",
            sa: "60",
            total: "100",
          },
        },
        {
          cells: {
            type: "Mandatory",
            semester: "IV",
            courseType: "Generic Core",
            numberOfCourses: "1",
            credits: "2",
            totalCredits: "2",
            fa: "0",
            sa: "60",
            total: "60",
          },
        },
        {
          cells: {
            type: "Mandatory",
            semester: "IV",
            courseType: "Subject Core",
            numberOfCourses: "1",
            credits: "3",
            totalCredits: "3",
            fa: "40",
            sa: "60",
            total: "100",
          },
        },
        {
          cells: {
            type: "Mandatory",
            semester: "IV",
            courseType: "Research Project",
            numberOfCourses: "1",
            credits: "6",
            totalCredits: "6",
            fa: "80",
            sa: "60",
            total: "140",
          },
        },
        {
          cells: {
            type: "Elective",
            semester: "IV",
            courseType: "Subject Elective",
            numberOfCourses: "4",
            credits: "3",
            totalCredits: "12",
            fa: "160",
            sa: "240",
            total: "400",
          },
        },
        /* -------------------------------
           Semester IV Total
        -------------------------------- */
        {
          className: "mba-yellow-row",
          cells: {
            type: "",
            semester: "",
            courseType: "TOTAL",
            numberOfCourses: "8",
            credits: "",
            totalCredits: "26",
            fa: "320",
            sa: "480",
            total: "800",
          },
        },
        /* -------------------------------
           Four-year UG Degree
           Lateral Entry
        -------------------------------- */
        {
          className: "mba-light-pink-row",
          cells: {
            type: {
              value:
                "PG Degree (MBA) after Four-year UG Degree\n(Lateral Entry)",
              colSpan: 3,
            },
            semester: null,
            courseType: null,
            numberOfCourses: "15",
            credits: "",
            totalCredits: "52",
            fa: "640",
            sa: "960",
            total: "1600",
          },
        },
        /* -------------------------------
           Three-year UG Degree
        -------------------------------- */
        {
          className: "mba-pink-row",
          cells: {
            type: {
              value: "PG Degree(MBA) after Three years UG Degree",
              colSpan: 3,
            },
            semester: null,
            courseType: null,
            numberOfCourses: "35",
            credits: "",
            totalCredits: "104",
            fa: "1280",
            sa: "1920",
            total: "3200",
          },
        },
      ],
    },
  ],
};
