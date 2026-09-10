
import {
  bcaCurriculumColumns,
  bcaSemesterOneData,
  bcaSemesterTwoData,
  type CurriculumRow,
} from "@/data/bbaBcaCurriculum";

function CurriculumTable({ data }: { data: CurriculumRow[] }) {
  return (
    <div className="bba-bca-curriculum table-card shadow-sm">
      <div className="table-responsive">
        <table className="table governing-table align-middle mb-0">
          <thead>
            <tr>
              {bcaCurriculumColumns.map((column) => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={row.className ?? ""}>
                {bcaCurriculumColumns.map((column) => {
                  const cell = row.cells[column.key];

                  if (cell === null) {
                    return null;
                  }

                  return (
                    <td
                      key={column.key}
                      rowSpan={
                        typeof cell === "object" ? cell.rowSpan : undefined
                      }
                      colSpan={
                        typeof cell === "object" ? cell.colSpan : undefined
                      }
                      data-label={column.title}
                      className={
                        column.key === "courseType" ? "member-name" : ""
                      }
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
      <div className="heading">BCA Syllabus</div>
      <div className="subheading mb-2">FYBCA-Semester - I</div>
      <div className="mb-5">
        <CurriculumTable data={bcaSemesterOneData} />
      </div>
      <div className="subheading mb-2">FYBCA-Semester - II</div>
      <CurriculumTable data={bcaSemesterTwoData} />
    </div>
  );
};

export default page;
