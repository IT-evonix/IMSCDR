

interface Column {
  key: string;
  title: string;
}

interface Props {
  columns: Column[];
  data: Record<string, string | number>[];
}

const MemberTable = ({ columns, data }: Props) => {
  return (
    <div className="table-container">
      <table className="member-table">
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
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;