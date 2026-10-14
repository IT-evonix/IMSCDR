import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMS Admission Documents Required | IMS-CDR Ahilyanagar",
  description: "Find the documents required for IMS admission, including marksheets, domicile and caste certificates, graduation records, CET scorecards and APAAR ID.",
  alternates: {
    canonical: "https://imscdr.ac.in/documents-required",
  },
  openGraph: {
    title: "IMS Admission Documents Required | IMS-CDR Ahilyanagar",
    description: "Find the documents required for IMS admission, including marksheets, domicile and caste certificates, graduation records, CET scorecards and APAAR ID.",
    url: "https://imscdr.ac.in/documents-required",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS Admission Documents Required | IMS-CDR Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS Admission Documents Required | IMS-CDR Ahilyanagar",
    description: "Find the documents required for IMS admission, including marksheets, domicile and caste certificates, graduation records, CET scorecards and APAAR ID.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Table from "@/components/ui/Table";
import {
  DocumentsRequiredColumns,
  DocumentsRequiredText,
} from "@/data/tablemembers";

const Page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">List Of Documents</div>
      <Table
        columns={DocumentsRequiredColumns}
        data={DocumentsRequiredText}
      />
      {/* <div className="mt-4 subheading">Facilitation Center Officer Remark: The date on caste validity referring to caste certificate is 20/06/2025 but the actual date on caste certificate is 21/06/2025</div> */}
    </div>
  );
};

export default Page;
