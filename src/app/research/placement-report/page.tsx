type ProgramName = "MCA" | "MBA";

type PlacementYearData = {
  enrollment: number;
  placement: number;
  minimumSalary: number;
  maximumSalary: number;
  averageSalary: number;
};

type PlacementTableProps = {
  programName: ProgramName;
  yearLabels: string[];
};

const placementData: Record<ProgramName, PlacementYearData[]> = {
  MCA: [
    {
      enrollment: 95,
      placement: 33,
      minimumSalary: 1.5,
      maximumSalary: 3.5,
      averageSalary: 2.5,
    },
    {
      enrollment: 95,
      placement: 40,
      minimumSalary: 2.5,
      maximumSalary: 8.0,
      averageSalary: 3.4,
    },
    {
      enrollment: 125,
      placement: 29,
      minimumSalary: 1.8,
      maximumSalary: 4.0,
      averageSalary: 2.9,
    },
  ],

  MBA: [
    {
      enrollment: 150,
      placement: 53,
      minimumSalary: 1.8,
      maximumSalary: 5.5,
      averageSalary: 3.65,
    },
    {
      enrollment: 180,
      placement: 51,
      minimumSalary: 8.0,
      maximumSalary: 2.5,
      averageSalary: 51,
    },
    {
      enrollment: 180,
      placement: 49,
      minimumSalary: 1.8,
      maximumSalary: 4.5,
      averageSalary: 3.15,
    },
  ],
};

function PlacementTable({ programName, yearLabels }: PlacementTableProps) {
  const data = placementData[programName];

  return (
    <div className="table-card shadow-sm statistics_data_table">
      <div className="table-responsive">
        <table className="table governing-table align-middle mb-0">
          <thead>
            <tr>
              <th rowSpan={2} style={{ width: "28%" }}>
                Enrollment and placement details of students in the last 3 years
              </th>

              {yearLabels.map((label) => (
                <th
                  key={label}
                  colSpan={2}
                  className="text-center placement-table-year-heading"
                >
                  {label}
                </th>
              ))}
            </tr>

            <tr className="Enrollment_row">
              {yearLabels.map((label) => (
                <th key={`${label}-enrollment`} className="text-center">
                  Enrollment
                </th>
              ))}

              {yearLabels.map((label) => (
                <th key={`${label}-placement`} className="text-center">
                  Placement
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Enrollment & Placement */}
            <tr>
              <td className="member-name">Enrollment and placement details</td>

              {data.map((year, index) => (
                <td
                  key={`${yearLabels[index]}-enrollment`}
                  className="text-center"
                >
                  {year.enrollment}
                </td>
              ))}

              {data.map((year, index) => (
                <td
                  key={`${yearLabels[index]}-placement`}
                  className="text-center"
                >
                  {year.placement}
                </td>
              ))}
            </tr>

            {/* Minimum Salary */}
            <tr>
              <td className="member-name ">Minimum Salary</td>

              {data.map((year, index) => (
                <td
                  key={`${yearLabels[index]}-minimum`}
                  colSpan={2}
                  className="text-center"
                >
                  {year.minimumSalary}
                </td>
              ))}
            </tr>

            {/* Maximum Salary */}
            <tr>
              <td className="member-name ">Maximum Salary</td>

              {data.map((year, index) => (
                <td
                  key={`${yearLabels[index]}-maximum`}
                  colSpan={2}
                  className="text-center"
                >
                  {year.maximumSalary}
                </td>
              ))}
            </tr>

            {/* Average Salary */}
            <tr>
              <td className="member-name ">Average Salary</td>

              {data.map((year, index) => (
                <td
                  key={`${yearLabels[index]}-average`}
                  colSpan={2}
                  className="text-center"
                >
                  {year.averageSalary}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AntiRaggingCommitteePage() {
  const mcaYears: string[] = [
    "MCA (A.Y. 2024 – 25)",
    "MCA (A.Y. 2025 – 26)",
    "MCA (A.Y. 2026 – 27) In Process",
  ];

  const mbaYears: string[] = [
    "MBA (A.Y. 2024 – 25)",
    "MBA (A.Y. 2025 – 26)",
    "MBA (A.Y. 2026 – 27) In Process",
  ];

  return (
    <section className="innerpagerightside">
      <div className="tablemain_section">
        <div className="container">
          {/* Page Heading */}
          <div className="mb-4">
            <div className="col-lg-12 heading">Placement Statistics Data</div>
          </div>

          {/* MCA Programme */}
          <div className="mb-5">
            <div className="subheading mb-2">MCA Programme</div>
            <PlacementTable programName="MCA" yearLabels={mcaYears} />
          </div>

          {/* MBA Programme */}
          <div>
            <div className="subheading mb-2">MBA Programme</div>

            <PlacementTable programName="MBA" yearLabels={mbaYears} />
          </div>
        </div>
      </div>
    </section>
  );
}
