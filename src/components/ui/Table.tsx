interface Column {
  key: string;
  title: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, string | number>[];
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
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    data-label={column.title}
                    className={column.key === "name" ? "member-name" : ""}
                  >
                    {column.key === "srNo" ? (
                      <span className="sr-badge">{row[column.key]}</span>
                    ) : (
                      row[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;