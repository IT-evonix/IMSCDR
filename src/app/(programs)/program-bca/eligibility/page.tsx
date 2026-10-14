import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCA Admission and Eligibility Criteria | IMS-CDR",
  description: "BCA admission at IMS-CDR requires 10+2 or equivalent from a recognized board, with eligibility based on applicable university rules and merit criteria.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-bca/eligibility",
  },
  openGraph: {
    title: "BCA Admission and Eligibility Criteria | IMS-CDR",
    description: "BCA admission at IMS-CDR requires 10+2 or equivalent from a recognized board, with eligibility based on applicable university rules and merit criteria.",
    url: "https://imscdr.ac.in/program-bca/eligibility",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "BCA Admission and Eligibility Criteria | IMS-CDR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BCA Admission and Eligibility Criteria | IMS-CDR",
    description: "BCA admission at IMS-CDR requires 10+2 or equivalent from a recognized board, with eligibility based on applicable university rules and merit criteria.",
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
          Passed the 10+2 (Higher Secondary) examination or equivalent from a recognized central or state board. Specific percentage requirements, subject combinations, and merit lists follow the rules of the affiliating university where the college is registered. For detailed eligibility please see APH 2024-2027.
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
