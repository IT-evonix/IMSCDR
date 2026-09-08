"use client";

import React from "react";

export interface Column {
  key: string;
  title: string;
  rowSpan?: number;
}

export interface HeaderGroup {
  title: string;
  colSpan: number;
  rowSpan?: number;
  className?: string;
}

export interface RowSpanCell {
  value: string | number;
  rowSpan: number;
}

export interface ColSpanCell {
  value: string | number;
  colSpan: number;
}

export type TableCell = string | number | RowSpanCell | ColSpanCell | null;

export interface TableRow {
  [key: string]: TableCell | boolean | undefined;
  rowClass?: string;
}

interface TableProps {
  columns: Column[];
  data: TableRow[];
  headerGroups?: HeaderGroup[];
}

function isRowSpanCell(cell: TableCell): cell is RowSpanCell {
  return (
    typeof cell === "object" &&
    cell !== null &&
    "value" in cell &&
    "rowSpan" in cell
  );
}

function isColSpanCell(cell: TableCell): cell is ColSpanCell {
  return (
    typeof cell === "object" &&
    cell !== null &&
    "value" in cell &&
    "colSpan" in cell
  );
}

const Table = ({ columns, data, headerGroups }: TableProps) => {
  const getCellClass = (key: string, row: TableRow) => {
    switch (key) {
      case "name":
      case "course":
        return `member-name ${row.highlight ? "highlight-name" : ""}`;

      case "srNo":
        return "sr-no";

      default:
        return "";
    }
  };

  const renderCell = (cell: TableCell, key: string) => {
    if (cell === null) {
      return null;
    }

    const value =
      isRowSpanCell(cell) || isColSpanCell(cell) ? cell.value : cell;

    if (key === "srNo") {
      return <span className="sr-badge">{value}</span>;
    }

    return value;
  };

  return (
    <div className="table-card shadow-sm">
      <div className="table-responsive">
        <table className="table governing-table align-middle mb-0">
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
                      <th key={column.key}>{column.title}</th>
                    ))}
                </tr>
              </>
            ) : (
              <tr>
                {columns.map((column) => (
                  <th key={column.key} rowSpan={column.rowSpan}>
                    {column.title}
                  </th>
                ))}
              </tr>
            )}
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={row.rowClass}>
                {columns.map((column) => {
                  const cell = row[column.key] as TableCell;

                  if (cell === null) {
                    return null;
                  }

                  return (
                    <td
                      key={column.key}
                      rowSpan={isRowSpanCell(cell) ? cell.rowSpan : undefined}
                      colSpan={isColSpanCell(cell) ? cell.colSpan : undefined}
                      data-label={column.title}
                      className={getCellClass(column.key, row)}
                    >
                      {renderCell(cell, column.key)}
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
};

export default Table;
