interface Column {
  key: string;
  title: string;
}

interface RowSpanCell {
  value: string | number;
  rowSpan: number;
}

type TableCell = string | number | RowSpanCell | null;

interface TableRow {
  [key: string]: TableCell;
}

interface TableProps {
  columns: Column[];
  data: TableRow[];
}

function isRowSpanCell(cell: TableCell): cell is RowSpanCell {
  return (
    typeof cell === "object" &&
    cell !== null &&
    "rowSpan" in cell &&
    "value" in cell
  );
}

const Table = ({ columns, data }: TableProps) => {
  return (
    <div className="table-card shadow-sm">
      <div className="table-responsive">
        <table className="table governing-table align-middle mb-0">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => {
                  const cell = row[column.key];

                  // Skip merged cells
                  if (cell === null) {
                    return null;
                  }

                  // RowSpan cell
                  if (isRowSpanCell(cell)) {
                    return (
                      <td
                        key={column.key}
                        rowSpan={cell.rowSpan}
                        data-label={column.title}
                        className={
                          column.key === "name"
                            ? "member-name"
                            : column.key === "srNo"
                            ? "sr-no"
                            : ""
                        }
                      >
                        {column.key === "srNo" ? (
                          <span className="sr-badge">{cell.value}</span>
                        ) : (
                          cell.value
                        )}
                      </td>
                    );
                  }

                  // Normal cell
                  return (
                    <td
                      key={column.key}
                      data-label={column.title}
                      className={
                        column.key === "name"
                          ? "member-name"
                          : column.key === "srNo"
                          ? "sr-no"
                          : ""
                      }
                    >
                      {column.key === "srNo" ? (
                        <span className="sr-badge">{cell}</span>
                      ) : (
                        cell
                      )}
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