"use client";

import { useState } from "react";
import {
  syllabusPrograms,
  SyllabusProgram,
  SyllabusProgramData,
} from "@/data/syllabus";

// import "@/css/Syllabus.css";

interface SyllabusProps {
  programs?: SyllabusProgramData[];
  defaultProgram?: SyllabusProgram;
  showProgramTabs?: boolean;
}

export default function Syllabus({
  programs = syllabusPrograms,
  defaultProgram = "mba",
  showProgramTabs = true,
}: SyllabusProps) {
  const [activeProgram, setActiveProgram] =
    useState<SyllabusProgram>(defaultProgram);

  const selectedProgram =
    programs.find((program) => program.id === activeProgram) ||
    programs[0];

  if (!selectedProgram) {
    return null;
  }

  return (
    <section className="syllabus-section">
      <div className="container">
        {/* Section Heading */}
        <div className="syllabus-heading">
          <span className="syllabus-subtitle">Academic Programs</span>

          <h2>
            {selectedProgram.shortLabel}{" "}
            <span>Syllabus</span>
          </h2>

          <p>{selectedProgram.label}</p>
        </div>

        {/* Program Tabs */}
        {showProgramTabs && (
          <div className="syllabus-tabs" role="tablist">
            {programs.map((program) => (
              <button
                key={program.id}
                type="button"
                role="tab"
                aria-selected={activeProgram === program.id}
                className={`syllabus-tab ${
                  activeProgram === program.id ? "active" : ""
                }`}
                onClick={() => setActiveProgram(program.id)}
              >
                {program.shortLabel}
              </button>
            ))}
          </div>
        )}

        {/* Table */}
        <SyllabusTable table={selectedProgram.table} />
      </div>
    </section>
  );
}


/* ---------------------------------------------
   Reusable Table Component
--------------------------------------------- */

interface SyllabusTableProps {
  table: SyllabusProgramData["table"];
}

function SyllabusTable({ table }: SyllabusTableProps) {
  return (
    <div className="syllabus-table-wrapper">
      <table className="syllabus-table">
        <thead>
          {table.header.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((heading, cellIndex) => {
                /*
                 * First header row has the main columns.
                 * "Major" spans two columns.
                 */
                if (rowIndex === 0 && heading === "Major") {
                  return (
                    <th
                      key={cellIndex}
                      colSpan={2}
                      rowSpan={1}
                    >
                      {heading}
                    </th>
                  );
                }

                /*
                 * These columns span both header rows.
                 */
                const verticallyMergedHeaders = [
                  "Year",
                  "Level",
                  "Semester\n(2 Year)",
                  "RM",
                  "OJT / FP",
                  "RP",
                  "Cumulative",
                  "Degree",
                ];

                if (
                  rowIndex === 0 &&
                  verticallyMergedHeaders.includes(heading)
                ) {
                  return (
                    <th
                      key={cellIndex}
                      rowSpan={2}
                    >
                      {renderCellText(heading)}
                    </th>
                  );
                }

                /*
                 * Skip empty cells in second header row.
                 */
                if (rowIndex === 1 && heading === "") {
                  return null;
                }

                return (
                  <th key={cellIndex}>
                    {renderCellText(heading)}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={row.className || ""}
            >
              {row.cells.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  rowSpan={cell.rowSpan}
                  colSpan={cell.colSpan}
                  className={cell.className || ""}
                >
                  {renderCellText(cell.content)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


/* ---------------------------------------------
   Multiline text renderer
--------------------------------------------- */

function renderCellText(text: string) {
  return text.split("\n").map((line, index) => (
    <span key={index} className="syllabus-cell-line">
      {line}
      {index < text.split("\n").length - 1 && <br />}
    </span>
  ));
}