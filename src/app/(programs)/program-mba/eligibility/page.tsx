import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBA Eligibility at IMS-CDR Ahilyanagar | Admission Criteria",
  description: "Learn MBA eligibility criteria at IMS-CDR Ahilyanagar, including academic requirements and admission qualifications for students seeking a management degree.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-mba/eligibility",
  },
  openGraph: {
    title: "MBA Eligibility at IMS-CDR Ahilyanagar | Admission Criteria",
    description: "Learn MBA eligibility criteria at IMS-CDR Ahilyanagar, including academic requirements and admission qualifications for students seeking a management degree.",
    url: "https://imscdr.ac.in/program-mba/eligibility",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MBA Eligibility at IMS-CDR Ahilyanagar | Admission Criteria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Eligibility at IMS-CDR Ahilyanagar | Admission Criteria",
    description: "Learn MBA eligibility criteria at IMS-CDR Ahilyanagar, including academic requirements and admission qualifications for students seeking a management degree.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="eligibility_main">
        <div className="heading">Eligibility</div>
        <p>
          Candidates with a Bachelor's degree of at least three years' duration from a recognized university are eligible to apply for the Master of Business Administration (MBA) programme, subject to the admission process, entrance examination requirements, and eligibility criteria prescribed by the SPPU, and AICTE. For detailed eligibility requirements, please refer to the AICTE Approval Process Handbook (APH) 2024–2027.
        </p>
        <div className="eligibility_inner">
          <Image
            src="/images/program/eligibility.webp"
            alt="Eligibility Page UI Design"
            width={1000}
            height={500}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
