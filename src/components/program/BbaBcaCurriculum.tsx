"use client";

import {
  bbaBcaCurriculumColumns,
  bbaBcaCurriculumData,
  type CurriculumCell,
} from "@/data/bbaBcaCurriculum";

function renderCell(cell: CurriculumCell | null) {
  if (cell === null) {
    return null;
  }

  if (typeof cell === "object") {
    return cell.value;
  }

  return cell;
}

export default function BbaBcaCurriculum() {
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
            {bbaBcaCurriculumData.map((row, rowIndex) => (
              <tr key={rowIndex} className={row.className ?? ""}>
                {bbaBcaCurriculumColumns.map((column) => {
                  const cell = row.cells[column.key];

                  if (cell === null) {
                    return null;
                  }

                  const isObjectCell = typeof cell === "object";

                  return (
                    <td
                      key={column.key}
                      rowSpan={
                        isObjectCell ? cell.rowSpan : undefined
                      }
                      colSpan={
                        isObjectCell ? cell.colSpan : undefined
                      }
                      data-label={column.title}
                    >
                      {renderCell(cell)}
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