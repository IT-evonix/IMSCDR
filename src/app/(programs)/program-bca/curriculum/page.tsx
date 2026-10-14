import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCA Syllabus and Curriculum | BCA in Artificial Intelligence",
  description: "View the BCA syllabus at IMS-CDR, covering programming, Data Science, web development and emerging technologies for an industry-focused BCA education.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-bca/curriculum",
  },
  openGraph: {
    title: "BCA Syllabus and Curriculum | BCA in Artificial Intelligence",
    description: "View the BCA syllabus at IMS-CDR, covering programming, Data Science, web development and emerging technologies for an industry-focused BCA education.",
    url: "https://imscdr.ac.in/program-bca/curriculum",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "BCA Syllabus and Curriculum | BCA in Artificial Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BCA Syllabus and Curriculum | BCA in Artificial Intelligence",
    description: "View the BCA syllabus at IMS-CDR, covering programming, Data Science, web development and emerging technologies for an industry-focused BCA education.",
    images: ["/images/home/black_logo.jpg"],
  },
};


import {
  bcaCurriculumColumns,
  bcaSemesterOneData,
  bcaSemesterTwoData,
  type CurriculumRow,
} from "@/data/bbaBcaCurriculum";

function CurriculumTable({ data }: { data: CurriculumRow[] }) {
  return (
    <div className="bba-bca-curriculum table-card shadow-sm">
      <div className="table-responsive">
        <table className="table governing-table align-middle mb-0">
          <thead>
            <tr>
              {bcaCurriculumColumns.map((column) => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={row.className ?? ""}>
                {bcaCurriculumColumns.map((column) => {
                  const cell = row.cells[column.key];

                  if (cell === null) {
                    return null;
                  }

                  return (
                    <td
                      key={column.key}
                      rowSpan={
                        typeof cell === "object" ? cell.rowSpan : undefined
                      }
                      colSpan={
                        typeof cell === "object" ? cell.colSpan : undefined
                      }
                      data-label={column.title}
                      className={
                        column.key === "courseType" ? "member-name" : ""
                      }
                    >
                      {typeof cell === "object" ? cell.value : cell}
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
}

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">BCA Syllabus</div>
      <div className="subheading mb-2">FYBCA-Semester - I</div>
      <div className="mb-5">
        <CurriculumTable data={bcaSemesterOneData} />
      </div>
      <div className="subheading mb-2">FYBCA-Semester - II</div>
      <CurriculumTable data={bcaSemesterTwoData} />
    </div>
  );
};

export default page;
