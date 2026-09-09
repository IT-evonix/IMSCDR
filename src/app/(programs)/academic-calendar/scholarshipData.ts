export type CalendarCell = {
  value: string | number;
  rowSpan?: number;
};

export type CalendarRow = {
  srNo: number;
  course: string;
  commencement?: CalendarCell;
  conclusion?: CalendarCell;
  exam?: CalendarCell;
  vacationFrom?: CalendarCell;
  vacationTo?: CalendarCell;
};

export const academicCalendarColumns = [
  { key: "srNo", title: "Sr. No." },
  { key: "course", title: "Course, Programme, Year" },
  { key: "commencement", title: "Commencement" },
  { key: "conclusion", title: "Conclusion" },
  { key: "exam", title: "Tentative Commencement Exam" },
  { key: "vacationFrom", title: "From" },
  { key: "vacationTo", title: "To" },
] as const;

export const termICalendarData: CalendarRow[] = [
  {
    srNo: 1,
    course: "BBA, BCA - I",
    commencement: { value: "15-09-2026", rowSpan: 2 },
    conclusion: { value: "09-01-2027", rowSpan: 2 },
    exam: { value: "11-01-2027", rowSpan: 2 },
    vacationFrom: { value: "-", rowSpan: 2 },
    vacationTo: { value: "-", rowSpan: 2 },
  },
  {
    srNo: 2,
    course: "BCA MCA -1 (Integrated)",
  },
  {
    srNo: 3,
    course: "MBA – I/ MMS - I",
    commencement: { value: "08-09-2026", rowSpan: 2 },
    conclusion: { value: "31-12-2026", rowSpan: 2 },
    exam: { value: "01-01-2027", rowSpan: 2 },
    vacationFrom: { value: "01-01-2027", rowSpan: 2 },
    vacationTo: { value: "16-01-2027", rowSpan: 2 },
  },
  {
    srNo: 4,
    course: "MCA - I",
  },
  {
    srNo: 5,
    course: "B. HMCT - I",
    commencement: { value: "07-09-2026", rowSpan: 2 },
    conclusion: { value: "31-12-2026", rowSpan: 2 },
    exam: { value: "01-01-2027", rowSpan: 2 },
    vacationFrom: { value: "01-01-2027", rowSpan: 2 },
    vacationTo: { value: "16-01-2027", rowSpan: 2 },
  },
  {
    srNo: 6,
    course: "M. HMCT - I",
  },
];

export const termIICalendarData: CalendarRow[] = [
  {
    srNo: 1,
    course: "BBA, BCA - I",
    commencement: { value: "18-01-2027", rowSpan: 2 },
    conclusion: { value: "15-05-2027", rowSpan: 2 },
    exam: { value: "17-05-2027", rowSpan: 2 },
    vacationFrom: { value: "18-05-2027", rowSpan: 2 },
    vacationTo: { value: "30-06-2027", rowSpan: 2 },
  },
  {
    srNo: 2,
    course: "BCA MCA -1 (Integrated)",
  },
  {
    srNo: 3,
    course: "MBA – I/ MMS - I",
    commencement: { value: "18-01-2027", rowSpan: 4 },
    conclusion: { value: "15-05-2027", rowSpan: 4 },
    exam: { value: "17-05-2027", rowSpan: 4 },
    vacationFrom: { value: "18-05-2027", rowSpan: 4 },
    vacationTo: { value: "30-06-2027", rowSpan: 4 },
  },
  {
    srNo: 4,
    course: "MCA - I",
  },
  {
    srNo: 5,
    course: "B. HMCT - I",
  },
  {
    srNo: 6,
    course: "M. HMCT - I",
  },
];
