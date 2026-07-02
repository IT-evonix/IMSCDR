import React from "react";

interface Column {
  key: string;
  title: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, React.ReactNode>[];
}

const Table = ({ columns, data }: TableProps) => {
  return (
    <div className="innerpage-wrapper1">   

      <div className="table-responsive table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col">
                  {column.title}
                </th>
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
    </div>
  );
};

export default Table;