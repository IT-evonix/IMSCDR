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
    "value" in cell &&
    "rowSpan" in cell
  );
}

const Table = ({ columns, data }: TableProps) => {
  const getCellClass = (key: string) => {
    switch (key) {
      case "name":
        return "member-name";
      case "srNo":
        return "sr-no";
      default:
        return "";
    }
  };

  const renderCell = (cell: TableCell, key: string) => {
    if (cell === null) return null;

    const value = isRowSpanCell(cell) ? cell.value : cell;

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

                  if (cell === null) return null;

                  return (
                    <td
                      key={column.key}
                      rowSpan={isRowSpanCell(cell) ? cell.rowSpan : undefined}
                      data-label={column.title}
                      className={getCellClass(column.key)}
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