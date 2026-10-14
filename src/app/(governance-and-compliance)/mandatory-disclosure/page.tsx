import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMS-CDR Ahilyanagar Mandatory Disclosure | Official Details",
  description: "Access the mandatory disclosure of IMS-CDR Ahilyanagar with essential institutional, academic, approval and regulatory information for students and stakeholders.",
  alternates: {
    canonical: "https://imscdr.ac.in/mandatory-disclosure",
  },
  openGraph: {
    title: "IMS-CDR Ahilyanagar Mandatory Disclosure | Official Details",
    description: "Access the mandatory disclosure of IMS-CDR Ahilyanagar with essential institutional, academic, approval and regulatory information for students and stakeholders.",
    url: "https://imscdr.ac.in/mandatory-disclosure",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS-CDR Ahilyanagar Mandatory Disclosure | Official Details",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS-CDR Ahilyanagar Mandatory Disclosure | Official Details",
    description: "Access the mandatory disclosure of IMS-CDR Ahilyanagar with essential institutional, academic, approval and regulatory information for students and stakeholders.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import ApprovalList from "@/components/abouttab/ApprovalList";
import InnerpageBanner from "@/components/InnerpageBanner";
import { approvalData } from "@/data/approvalData";
// import React from "react";

const page = () => {
  return (
    <div>
      <InnerpageBanner
        title="Mandatory Disclosure"
        breadcrumbs={[
          {
            label: "Mandatory Disclosure",
          },
        ]}
      />
      <div className="innerpagewrapper">
        <div className="container">
          {/* <div className="heading">Coming Soon</div> */}
          <p className="subheading mb-4">
            Mandatory Disclosure for the Academic Year 2026–2027 is currently
            under process. It will be uploaded as soon as the admission process
            is completed.
          </p>
          <div className="fee_structure_pdf">
            <ApprovalList
              title="AICTE Approvals"
              data={approvalData.mandatorydisclosure}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
