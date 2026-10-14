import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scholarships and Fee Concessions 2026–27 | IMS-CDR",
  description: "View IMS-CDR scholarship benefits and fee concessions for MBA, MCA, BBA and BCA students, with category-wise details for the 2026–27 academic year.",
  alternates: {
    canonical: "https://imscdr.ac.in/scholarships",
  },
  openGraph: {
    title: "Scholarships and Fee Concessions 2026–27 | IMS-CDR",
    description: "View IMS-CDR scholarship benefits and fee concessions for MBA, MCA, BBA and BCA students, with category-wise details for the 2026–27 academic year.",
    url: "https://imscdr.ac.in/scholarships",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Scholarships and Fee Concessions 2026–27 | IMS-CDR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholarships and Fee Concessions 2026–27 | IMS-CDR",
    description: "View IMS-CDR scholarship benefits and fee concessions for MBA, MCA, BBA and BCA students, with category-wise details for the 2026–27 academic year.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import Table from "@/components/ui/Table";

import {
  scholarshipColumns,
  scholarshipHeaderGroups,
  scholarshipData,

  scholarshipColumns2,
  scholarshipHeaderGroups2,
  scholarshipData2,
} from "@/data/scholarshipData";

export default function ScholarshipsPage() {
  return (
    <div className="innerpagerightside">
      <div className="heading">Fee Structure & Percentage of Scholarship Receivable for the Academic Year 2026 - 2027</div>
      <div className="scholarships_page mb-5">
        <Table
          columns={scholarshipColumns}
          headerGroups={scholarshipHeaderGroups}
          data={scholarshipData}
        />
      </div>

      <div className="scholarships_page">
        <Table
          columns={scholarshipColumns2}
          headerGroups={scholarshipHeaderGroups2}
          data={scholarshipData2}
        />
      </div>
    </div>
  );
}
