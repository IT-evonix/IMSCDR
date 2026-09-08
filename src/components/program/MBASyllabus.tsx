"use client";

import {
  mbaSyllabus,
  MBASyllabusData,
  SyllabusTable,
  TableCell,
} from "@/data/mbasyllabus";

import "@/css/Syllabus.css";

interface MBASyllabusProps {
  data?: MBASyllabusData;
}

/* =========================================================
   CHECK CELL OBJECT
========================================================= */

function isCellObject(cell: TableCell): cell is {
  value: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
} {
  return typeof cell === "object" && cell !== null;
}

/* =========================================================
   RENDER CELL
========================================================= */

function renderCell(cell: TableCell) {
  if (cell === null) {
    return null;
  }

  const value = typeof cell === "string" ? cell : cell.value;

  const lines = value.split("\n");

  return lines.map((line, index) => (
    <span key={index}>
      {line}

      {index < lines.length - 1 && <br />}
    </span>
  ));
}

/* =========================================================
   SINGLE TABLE
========================================================= */

function MBASyllabusTable({ table }: { table: SyllabusTable }) {
  const {
    heading,
    subHeading,
    headerGroups,
    columns,
    data,
    className,
  } = table;

  return (
    <div className={`mba-syllabus-table-section ${className ?? ""}`}>
      {/* =========================================
          OPTIONAL TABLE HEADING
      ========================================= */}

      {(heading || subHeading) && (
        <div className="mba-table-heading">
          {heading && <div className="heading">{heading}</div>}

          {subHeading && <div className="subheading mb-2">{subHeading}</div>}
        </div>
      )}

      {/* =========================================
          TABLE
      ========================================= */}

      <div className="table-card shadow-sm">
        <div className="table-responsive">
          <table className="table governing-table align-middle mb-0">
            {/* =====================================
                OPTIONAL TITLE ROW
            ===================================== */}
            

            {/* {titleRow && (
              <thead>
                <tr className={titleRow.className ?? ""}>
                  <th colSpan={columns.length}>{titleRow.title}</th>
                </tr>
              </thead>
            )} */}

            {/* =====================================
                HEADER
            ===================================== */}

            <thead>
              {headerGroups && headerGroups.length > 0 ? (
                <>
                  {/* Main Header */}

                  <tr>
                    {headerGroups.map((group, index) => (
                      <th
                        key={`${group.title}-${index}`}
                        colSpan={group.colSpan}
                        rowSpan={group.rowSpan}
                        className={group.className ?? ""}
                      >
                        {group.title}
                      </th>
                    ))}
                  </tr>

                  {/* Sub Header */}

                  <tr>
                    {columns
                      .filter((column) => !column.rowSpan)
                      .map((column) => (
                        <th key={column.key} className={column.className ?? ""}>
                          {column.title}
                        </th>
                      ))}
                  </tr>
                </>
              ) : (
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      rowSpan={column.rowSpan}
                      className={column.className ?? ""}
                    >
                      {column.title}
                    </th>
                  ))}
                </tr>
              )}
            </thead>

            {/* =====================================
                BODY
            ===================================== */}

            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className={row.className ?? ""}>
                  {columns.map((column) => {
                    const cell = row.cells[column.key];

                    /*
                     * Null means the cell
                     * is covered by rowSpan/
                     * colSpan.
                     */

                    if (cell === null) {
                      return null;
                    }

                    const isObject = isCellObject(cell);

                    return (
                      <td
                        key={column.key}
                        rowSpan={isObject ? cell.rowSpan : undefined}
                        colSpan={isObject ? cell.colSpan : undefined}
                        data-label={column.title}
                        className={isObject ? (cell.className ?? "") : ""}
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
    </div>
  );
}

/* =========================================================
   MBA SYLLABUS
========================================================= */

export default function MBASyllabus({ data = mbaSyllabus }: MBASyllabusProps) {
  return (
    <section className="mba-syllabus-section">
      <div className="container">
        {data.tables.map((table) => (
          <MBASyllabusTable key={table.id} table={table} />
        ))}
      </div>
    </section>
  );
}
