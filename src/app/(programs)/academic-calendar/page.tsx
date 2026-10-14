import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Calendar | IMS-CDR College Ahilyanagar",
  description: "View the academic calendar of IMS-CDR College Ahilyanagar with important academic dates, schedules and key events for students across its programmes.",
  alternates: {
    canonical: "https://imscdr.ac.in/academic-calendar",
  },
  openGraph: {
    title: "Academic Calendar | IMS-CDR College Ahilyanagar",
    description: "View the academic calendar of IMS-CDR College Ahilyanagar with important academic dates, schedules and key events for students across its programmes.",
    url: "https://imscdr.ac.in/academic-calendar",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Calendar | IMS-CDR College Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Calendar | IMS-CDR College Ahilyanagar",
    description: "View the academic calendar of IMS-CDR College Ahilyanagar with important academic dates, schedules and key events for students across its programmes.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import InnerpageBanner from "@/components/InnerpageBanner";
import {
  termICalendarData,
  termIICalendarData,
  type CalendarRow,
} from "@/data/academicCalender";

function AcademicCalendarTable({ data }: { data: CalendarRow[] }) {
  return (
    <div className="academic_calendar_table tablemain_section">
      <div className="container">
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
    </div>
  );
}

const Page = () => {
  return (
    <div>
      <InnerpageBanner
        title="Academic Calendar"
        breadcrumbs={[
          {
            label: "Academic Calendar",
          },
        ]}
      />

      <div className="innerpagewrapper">
        <div className="container">
          <section>
            {/* <p className="text-center">The scheduled timeline of academic sessions, exams, and key activities for the academic year. </p> */}
            <div className="heading text-center">
              Academic Calendar As Per SPPU Term – I
            </div>
            <div className="mb-5">
              <AcademicCalendarTable data={termICalendarData} />
            </div>
          </section>

          <section>
            <div className="heading text-center">
              Academic Calendar As Per SPPU Term – II
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
