import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Grievance Redressal Committee | IMS-CDR Ahilyanagar",
  description: "Learn about the Student Grievance Redressal Committee at IMS-CDR, including committee members and their roles in addressing student grievances.",
  alternates: {
    canonical: "https://imscdr.ac.in/student-grievance-redressal-committee",
  },
  openGraph: {
    title: "Student Grievance Redressal Committee | IMS-CDR Ahilyanagar",
    description: "Learn about the Student Grievance Redressal Committee at IMS-CDR, including committee members and their roles in addressing student grievances.",
    url: "https://imscdr.ac.in/student-grievance-redressal-committee",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Student Grievance Redressal Committee | IMS-CDR Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Grievance Redressal Committee | IMS-CDR Ahilyanagar",
    description: "Learn about the Student Grievance Redressal Committee at IMS-CDR, including committee members and their roles in addressing student grievances.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  StudentGrievanceRedressalCommitteeColumns,
  StudentGrievanceRedressalCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Grievance Redressal  Committee"
        breadcrumbs={[{ label: "Grievance Redressal  Committee" }]}
      />
      <div className="fullwidth_page">
        <div className="tablemain_section">
          <div className="container">
            <div className="mb-4">
              <div className="heading text-center">Committee Members </div>
            </div>
            <Table columns={StudentGrievanceRedressalCommitteeColumns} data={StudentGrievanceRedressalCommitteeMembers} />
          </div>
        </div>
      </div>
    </section>
  );
}
