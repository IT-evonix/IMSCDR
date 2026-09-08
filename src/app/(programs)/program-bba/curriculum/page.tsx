
import {
  bbaBcaCurriculumColumns,
  bbaBcaCurriculumData,
  type CurriculumRow,
} from "@/data/bbaBcaCurriculum";

const semesterTwoData: CurriculumRow[] = [
  {
    cells: {
      courseType: { value: "Major Mandatory (06)", rowSpan: 11 },
      course: "Major Mandatory 4 (Compulsory)",
      paperTitle: "Business Cost Accounting",
      credits: 50,
    },
  },
  {
    cells: {
      courseType: null,
      course: { value: "Major Mandatory 5 (As per the specialization selected in Semester I)", rowSpan: 5 },
      paperTitle: "Finance: Business Accounting",
      credits: { value: 50, rowSpan: 5 },
    },
  },
  {
    cells: { courseType: null, course: null, paperTitle: "Marketing: Consumer Behavior and Sales Management", credits: null },
  },
  {
    cells: { courseType: null, course: null, paperTitle: "HRM: Organizational Behavior", credits: null },
  },
  {
    cells: { courseType: null, course: null, paperTitle: "Agri. Bussi.: Essentials of Rural Development", credits: null },
  },
  {
    cells: { courseType: null, course: null, paperTitle: "Service Mgmt.: Essentials of Services Management", credits: null },
  },
  {
    cells: {
      courseType: null,
      course: { value: "Major Mandatory 6 (As per the specialization selected in Semester I)", rowSpan: 5 },
      paperTitle: "Finance: Business Accounting",
      credits: { value: 50, rowSpan: 5 },
    },
  },
  {
    cells: { courseType: null, course: null, paperTitle: "Marketing: Consumer Behavior and Sales Management", credits: null },
  },
  {
    cells: { courseType: null, course: null, paperTitle: "HRM: Organizational Behavior", credits: null },
  },
  {
    cells: { courseType: null, course: null, paperTitle: "Agri. Bussi.: Essentials of Rural Development", credits: null },
  },
  {
    cells: { courseType: null, course: null, paperTitle: "Service Mgmt.: Essentials of Services Management", credits: null },
  },
  {
    cells: {
      courseType: "Minor",
      course: "Minor 1",
      paperTitle: "Business Economics - I",
      credits: 50,
    },
  },
  {
    cells: {
      courseType: { value: "Open Elective (OE)", rowSpan: 2 },
      course: "Open Elective 3",
      paperTitle: "Business Mathematics - I",
      credits: 50,
    },
  },
  {
    cells: {
      courseType: null,
      course: "Open Elective 4",
      paperTitle: "Business Statistics - II",
      credits: 50,
    },
  },
  {
    cells: {
      courseType: "Vocational Skill Development Course (VSC)",
      course: "Vocational Skill Development Course (VSC Practical)",
      paperTitle: "Computerized Accounting using Tally",
      credits: 50,
    },
  },
  {
    cells: {
      courseType: "Skill Enhancement Course (SEC)",
      course: "Skill Enhancement Course (SEC)",
      paperTitle: "Basics of Stock Market/ Cross - Cultural Communication/ AI and ML for Business",
      credits: 50,
    },
  },
  {
    cells: {
      courseType: "Ability Enhancement Course (AEC)",
      course: "Ability Enhancement Course (AEC)",
      paperTitle: "Business Communication skills - II",
      credits: 50,
    },
  },
  {
    cells: {
      courseType: "Value Education Course (VEC)",
      course: "Value Education Course (VEC)",
      paperTitle: "Democracy Awareness & Gender Sensitization",
      credits: 50,
    },
  },
  {
    cells: {
      courseType: "Co-Curricular Courses (CC)",
      course: "Co-Curricular Courses (CC)",
      paperTitle: "Physical Education - II",
      credits: 50,
    },
  },
  {
    className: "bba-bca-total-row",
    cells: {
      courseType: { value: "Total", colSpan: 3 },
      course: null,
      paperTitle: null,
      credits: 550,
    },
  },
];

function CurriculumTable({ data }: { data: CurriculumRow[] }) {
  return (
    <div className="bba-bca-curriculum table-card shadow-sm">
      <div className="table-responsive">
        <table className="table governing-table align-middle mb-0">
          <thead>
            <tr>
              {bbaBcaCurriculumColumns.map((column) => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={row.className ?? ""}>
                {bbaBcaCurriculumColumns.map((column) => {
                  const cell = row.cells[column.key];

                  if (cell === null) {
                    return null;
                  }

                  return (
                    <td
                      key={column.key}
                      rowSpan={cell.rowSpan}
                      colSpan={cell.colSpan}
                      data-label={column.title}
                    >
                      {typeof cell === "object" ? cell.value : cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">FYBBA-Semester-I</div>
      <div className="mb-5">
        <CurriculumTable data={bbaBcaCurriculumData} />
      </div>
      <div className="heading">FYBBA-Semester-II</div>
      <CurriculumTable data={semesterTwoData} />
    </div>
  );
};

export default page;
