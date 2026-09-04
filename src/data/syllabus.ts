// data/Syllabus.ts

export type SyllabusProgram = "mba" | "mca" | "bba" | "bca";

export interface SyllabusCell {
  content: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
}

export interface SyllabusRow {
  cells: SyllabusCell[];
  className?: string;
}

export interface SyllabusTableData {
  title: string;
  header: string[][];
  rows: SyllabusRow[];
}

export interface SyllabusProgramData {
  id: SyllabusProgram;
  label: string;
  shortLabel: string;
  table: SyllabusTableData;
}

/*
 * Reusable table structure based on the supplied reference image.
 *
 * You can change ONLY the data here later.
 * The Syllabus.tsx component does not need to change.
 */

const commonSyllabusTable: SyllabusTableData = {
  title: "Syllabus Structure",

  header: [
    [
      "Year",
      "Level",
      "Semester\n(2 Year)",
      "Major",
      "RM",
      "OJT / FP",
      "RP",
      "Cumulative",
      "Degree",
    ],
    [
      "",
      "",
      "",
      "Mandatory",
      "Electives",
      "",
      "",
      "",
      "",
    ],
  ],

  rows: [
    // ------------------------------------------------
    // YEAR I
    // ------------------------------------------------
    {
      cells: [
        {
          content: "I",
          rowSpan: 2,
          className: "yearCell",
        },
        {
          content: "6.0",
          rowSpan: 2,
          className: "levelCell",
        },
        {
          content: "Semester I",
        },
        {
          content: "22 credits",
        },
        {
          content: "4",
        },
        {
          content: "-",
        },
        {
          content: "-",
        },
        {
          content: "-",
        },
        {
          content: "26",
        },
        {
          content: "",
        },
      ],
    },

    {
      cells: [
        {
          content: "Semester II",
        },
        {
          content: "14 credits",
        },
        {
          content: "4",
        },
        {
          content: "4",
        },
        {
          content: "4\nFP",
        },
        {
          content: "-",
        },
        {
          content: "26",
        },
        {
          content: "",
        },
      ],
    },

    // ------------------------------------------------
    // PG DIPLOMA TOTAL
    // ------------------------------------------------
    {
      className: "blueTotalRow",
      cells: [
        {
          content: "Cumulative Credits for PG Diploma",
          colSpan: 3,
        },
        {
          content: "36",
        },
        {
          content: "8",
        },
        {
          content: "4",
        },
        {
          content: "4",
        },
        {
          content: "-",
        },
        {
          content: "52",
        },
        {
          content: "PG Diploma (after\n3 Year Degree)",
        },
      ],
    },

    // ------------------------------------------------
    // EXIT OPTION
    // ------------------------------------------------
    {
      className: "exitRow",
      cells: [
        {
          content:
            "Exit option: PG Diploma 52 Credits after Three Year UG Degree (with additional 4 credits of OJT)",
          colSpan: 9,
        },
      ],
    },

    // ------------------------------------------------
    // YEAR II
    // ------------------------------------------------
    {
      cells: [
        {
          content: "II",
          rowSpan: 2,
          className: "yearCell",
        },
        {
          content: "6.5",
          rowSpan: 2,
          className: "levelCell",
        },
        {
          content: "Semester III",
        },
        {
          content: "6",
        },
        {
          content: "12",
        },
        {
          content: "-",
        },
        {
          content: "8\nOJT",
        },
        {
          content: "-",
        },
        {
          content: "26",
        },
        {
          content: "",
        },
      ],
    },

    {
      cells: [
        {
          content: "Semester IV",
        },
        {
          content: "8",
        },
        {
          content: "12",
        },
        {
          content: "-",
        },
        {
          content: "-",
        },
        {
          content: "6RP",
        },
        {
          content: "26",
        },
        {
          content: "",
        },
      ],
    },

    // ------------------------------------------------
    // YEAR II TOTAL
    // ------------------------------------------------
    {
      className: "pinkTotalRow",
      cells: [
        {
          content: "",
          colSpan: 3,
        },
        {
          content: "14",
        },
        {
          content: "24",
        },
        {
          content: "-",
        },
        {
          content: "08",
        },
        {
          content: "06",
        },
        {
          content: "52",
        },
        {
          content: "PG Degree (after\n4-Years UG)",
        },
      ],
    },

    // ------------------------------------------------
    // CUMULATIVE TOTAL
    // ------------------------------------------------
    {
      className: "grandTotalRow",
      cells: [
        {
          content: "Cum. Cr. for 2 Year PG Degree",
          colSpan: 3,
        },
        {
          content: "50",
        },
        {
          content: "32",
        },
        {
          content: "4",
        },
        {
          content: "12",
        },
        {
          content: "6",
        },
        {
          content: "104",
        },
        {
          content: "PG Degree (after 3 -\nYears UG)",
        },
      ],
    },
  ],
};


/*
 * MBA
 */
export const mbaSyllabus: SyllabusProgramData = {
  id: "mba",
  label: "Master of Business Administration",
  shortLabel: "MBA",
  table: commonSyllabusTable,
};


/*
 * MCA
 */
export const mcaSyllabus: SyllabusProgramData = {
  id: "mca",
  label: "Master of Computer Applications",
  shortLabel: "MCA",
  table: commonSyllabusTable,
};


/*
 * BBA
 */
export const bbaSyllabus: SyllabusProgramData = {
  id: "bba",
  label: "Bachelor of Business Administration",
  shortLabel: "BBA",
  table: commonSyllabusTable,
};


/*
 * BCA
 */
export const bcaSyllabus: SyllabusProgramData = {
  id: "bca",
  label: "Bachelor of Computer Applications",
  shortLabel: "BCA",
  table: commonSyllabusTable,
};


/*
 * All programs
 */
export const syllabusPrograms: SyllabusProgramData[] = [
  mbaSyllabus,
  mcaSyllabus,
  bbaSyllabus,
  bcaSyllabus,
];