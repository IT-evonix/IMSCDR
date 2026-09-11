import InnerpageBanner from "@/components/InnerpageBanner";
import {
  termICalendarData,
  termIICalendarData,
  type CalendarRow,
} from "@/data/academicCalender";

function AcademicCalendarTable({ data }: { data: CalendarRow[] }) {
  return (
    <div className="academic_calendar_table tablemain_section">
      <div className="table-card shadow-sm">
          <div className="table-responsive">
            <table className="table governing-table align-middle mb-0">
              <thead>
                <tr>
                  <th rowSpan={2}>Sr. No.</th>
                  <th rowSpan={2}>Course, Programme, Year</th>
                  <th rowSpan={2}>Commencement</th>
                  <th rowSpan={2}>Conclusion</th>
                  <th rowSpan={2}>Tentative Commencement Exam</th>
                  <th className="VacationColumn" colSpan={2}>Vacation</th>
                </tr>
                <tr>
                  <th>From</th>
                  <th>To</th>
                </tr>
              </thead>

              <tbody>
                {data.map((row) => (
                  <tr key={row.srNo}>
                    <td className="sr-no">
                      <span className="sr-badge">{row.srNo}</span>
                    </td>

                    <td>{row.course}</td>

                    {[
                      row.commencement,
                      row.conclusion,
                      row.exam,
                      row.vacationFrom,
                      row.vacationTo,
                    ].map((cell, index) =>
                      cell ? (
                        <td key={index} rowSpan={cell.rowSpan}>
                          {cell.value}
                        </td>
                      ) : null,
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}

const Page = () => {
  return (
    <div>

      <div className="innerpagerightside">
        <div className="container">
          <section>
            <div className="heading">
              Academic Calendar Term – I
            </div>

            <div className="mb-5">
              <AcademicCalendarTable data={termICalendarData} />
            </div>
          </section>

          <section>
            <div className="heading">
              Academic Calendar Term – II
            </div>

            <div className="mb-5">
              <AcademicCalendarTable data={termIICalendarData} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
