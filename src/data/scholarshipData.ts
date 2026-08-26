import type {
  Column,
  HeaderGroup,
  TableRow,
} from "@/components/ui/Table";

export const scholarshipColumns: Column[] = [
  {
    key: "srNo",
    title: "Sr. No.",
    rowSpan: 2,
  },

  {
    key: "course",
    title: "Course",
    rowSpan: 2,
  },

  // Open Category
  {
    key: "openTuition",
    title: "Tuition Fee",
  },
  {
    key: "openDevelopment",
    title: "Development Fee",
  },
  {
    key: "openCaution",
    title: "Caution Money Deposit",
  },
  {
    key: "openTotal",
    title: "Total Fees",
  },

  // OBC Category & EBC
  {
    key: "obcTuition",
    title: "Tuition Fee",
  },
  {
    key: "obcDevelopment",
    title: "Development Fee",
  },
  {
    key: "obcCaution",
    title: "Caution Money Deposit",
  },

  // SBC / NT Category & TFWS
  {
    key: "sbcTuition",
    title: "Tuition Fee",
  },
  {
    key: "sbcDevelopment",
    title: "Development Fee",
  },
  {
    key: "sbcCaution",
    title: "Caution Money Deposit",
  },

  // Girls Students
  {
    key: "girlsTuition",
    title: "Tuition Fee",
  },
  {
    key: "girlsDevelopment",
    title: "Development Fee",
  },
  {
    key: "girlsCaution",
    title: "Caution Money Deposit",
  },

  // SC / ST Category
  {
    key: "scstTuition",
    title: "Tuition Fee",
  },
  {
    key: "scstDevelopment",
    title: "Development Fee",
  },
  {
    key: "scstCaution",
    title: "Caution Money Deposit",
  },
];

export const scholarshipHeaderGroups: HeaderGroup[] = [
  {
    title: "Sr. No.",
    colSpan: 1,
    rowSpan: 2,
    className: "sr-header",
  },

  {
    title: "Course",
    colSpan: 1,
    rowSpan: 2,
    className: "course-header",
  },

  {
    title: "Open Category",
    colSpan: 4,
    className: "open-category-header",
  },

  {
    title: "OBC Category & EBC",
    colSpan: 3,
    className: "obc-category-header",
  },

  {
    title: "SBC/NT Category & TFWS",
    colSpan: 3,
    className: "sbc-category-header",
  },

  {
    title: "Girls Students (EBC/EWS/SEBC/OBC)",
    colSpan: 3,
    className: "girls-category-header",
  },

  {
    title: "SC/ST Category",
    colSpan: 3,
    className: "scst-category-header",
  },
];

export const scholarshipData: TableRow[] = [
  {
    srNo: 1,
    course: "MBA - I",

    openTuition: "1,24,347",
    openDevelopment: "18,653",
    openCaution: "2,500",
    openTotal: "1,45,500",

    obcTuition: "50%",
    obcDevelopment: "-",
    obcCaution: "-",

    sbcTuition: "100%",
    sbcDevelopment: "-",
    sbcCaution: "-",

    girlsTuition: "100%",
    girlsDevelopment: "-",
    girlsCaution: "-",

    scstTuition: "100%",
    scstDevelopment: "100%",
    scstCaution: "-",
  },

  {
    srNo: 2,
    course: "MCA - I",

    openTuition: "95,154",
    openDevelopment: "12,846",
    openCaution: "1,500",
    openTotal: "1,09,500",

    obcTuition: "50%",
    obcDevelopment: "-",
    obcCaution: "-",

    sbcTuition: "100%",
    sbcDevelopment: "-",
    sbcCaution: "-",

    girlsTuition: "100%",
    girlsDevelopment: "-",
    girlsCaution: "-",

    scstTuition: "100%",
    scstDevelopment: "100%",
    scstCaution: "-",
  },

  {
    srNo: 3,
    course: "BBA - I (Interim)",

    openTuition: "35,000",
    openDevelopment: "3,500",
    openCaution: "1,500",
    openTotal: "40,000",

    obcTuition: "50%",
    obcDevelopment: "-",
    obcCaution: "-",

    sbcTuition: "100%",
    sbcDevelopment: "-",
    sbcCaution: "-",

    girlsTuition: "100%",
    girlsDevelopment: "-",
    girlsCaution: "-",

    scstTuition: "100%",
    scstDevelopment: "100%",
    scstCaution: "-",
  },

  {
    srNo: 4,
    course: "BCA - I (Interim)",

    openTuition: "40,000",
    openDevelopment: "4,000",
    openCaution: "1,500",
    openTotal: "45,500",

    obcTuition: "50%",
    obcDevelopment: "-",
    obcCaution: "-",

    sbcTuition: "100%",
    sbcDevelopment: "-",
    sbcCaution: "-",

    girlsTuition: "100%",
    girlsDevelopment: "-",
    girlsCaution: "-",

    scstTuition: "100%",
    scstDevelopment: "100%",
    scstCaution: "-",
  },
];








export const scholarshipColumns2: Column[] = [
  {
    key: "srNo",
    title: "Sr. No.",
    rowSpan: 2,
  },

  {
    key: "course",
    title: "Course",
    rowSpan: 2,
  },

  // Open Category
  {
    key: "openTuition",
    title: "Tuition Fee",
  },
  {
    key: "openDevelopment",
    title: "Development Fee",
  },
  {
    key: "openCaution",
    title: "Caution Money Deposit",
  },
  {
    key: "openTotal",
    title: "Total Fees",
  },

  // OBC Category & EBC
  {
    key: "obcTuition",
    title: "Tuition Fee",
  },
  {
    key: "obcDevelopment",
    title: "Development Fee",
  },
  {
    key: "obcCaution",
    title: "Caution Money Deposit",
  },

  // SBC / NT Category & TFWS
  {
    key: "sbcTuition",
    title: "Tuition Fee",
  },
  {
    key: "sbcDevelopment",
    title: "Development Fee",
  },
  {
    key: "sbcCaution",
    title: "Caution Money Deposit",
  },

  // Girls Students
  {
    key: "girlsTuition",
    title: "Tuition Fee",
  },
  {
    key: "girlsDevelopment",
    title: "Development Fee",
  },
  {
    key: "girlsCaution",
    title: "Caution Money Deposit",
  },

  // SC / ST Category
  {
    key: "scstTuition",
    title: "Tuition Fee",
  },
  {
    key: "scstDevelopment",
    title: "Development Fee",
  },
  {
    key: "scstCaution",
    title: "Caution Money Deposit",
  },
];

export const scholarshipHeaderGroups2: HeaderGroup[] = [
  {
    title: "Sr. No.",
    colSpan: 1,
    rowSpan: 2,
    className: "sr-header",
  },

  {
    title: "Course",
    colSpan: 1,
    rowSpan: 2,
    className: "course-header",
  },

  {
    title: "Open Category",
    colSpan: 4,
    className: "open-category-header",
  },

  {
    title: "OBC Category & EBC",
    colSpan: 3,
    className: "obc-category-header",
  },

  {
    title: "SBC/NT Category & TFWS",
    colSpan: 3,
    className: "sbc-category-header",
  },

  {
    title: "Girls Students (EBC/EWS/SEBC/OBC)",
    colSpan: 3,
    className: "girls-category-header",
  },

  {
    title: "SC/ST Category",
    colSpan: 3,
    className: "scst-category-header",
  },
];

export const scholarshipData2: TableRow[] = [
  {
    srNo: 1,
    course: "MBA - II",

    openTuition: "1,24,347",
    openDevelopment: "18,653",
    openCaution: "-",
    openTotal: "1,43,000",

    obcTuition: "50%",
    obcDevelopment: "-",
    obcCaution: "-",

    sbcTuition: "100%",
    sbcDevelopment: "-",
    sbcCaution: "-",

    girlsTuition: "100%",
    girlsDevelopment: "-",
    girlsCaution: "-",

    scstTuition: "100%",
    scstDevelopment: "100%",
    scstCaution: "-",
  },

  {
    srNo: 2,
    course: "MCA - II",

    openTuition: "85,217",
    openDevelopment: "12,783",
    openCaution: "-",
    openTotal: "98,000",

    obcTuition: "50%",
    obcDevelopment: "-",
    obcCaution: "-",

    sbcTuition: "100%",
    sbcDevelopment: "-",
    sbcCaution: "-",

    girlsTuition: "100%",
    girlsDevelopment: "-",
    girlsCaution: "-",

    scstTuition: "100%",
    scstDevelopment: "100%",
    scstCaution: "-",
  },

  {
    srNo: 3,
    course: "BBA - II",

    openTuition: "35,000",
    openDevelopment: "3,500",
    openCaution: "-",
    openTotal: "38,500",

    obcTuition: "50%",
    obcDevelopment: "-",
    obcCaution: "-",

    sbcTuition: "100%",
    sbcDevelopment: "-",
    sbcCaution: "-",

    girlsTuition: "100%",
    girlsDevelopment: "-",
    girlsCaution: "-",

    scstTuition: "100%",
    scstDevelopment: "100%",
    scstCaution: "-",
  },

  {
    srNo: 4,
    course: "BCA - II",

    openTuition: "40,000",
    openDevelopment: "4,000",
    openCaution: "-",
    openTotal: "44,000",

    obcTuition: "50%",
    obcDevelopment: "-",
    obcCaution: "-",

    sbcTuition: "100%",
    sbcDevelopment: "-",
    sbcCaution: "-",

    girlsTuition: "100%",
    girlsDevelopment: "-",
    girlsCaution: "-",

    scstTuition: "100%",
    scstDevelopment: "100%",
    scstCaution: "-",
  },
];