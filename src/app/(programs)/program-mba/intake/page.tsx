import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBA Intake at IMS-CDR Ahilyanagar | Seats and Admission",
  description: "Check MBA intake at IMS-CDR Ahilyanagar, including available seats, admission opportunities and program details for students planning a management career.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-mba/intake",
  },
  openGraph: {
    title: "MBA Intake at IMS-CDR Ahilyanagar | Seats and Admission",
    description: "Check MBA intake at IMS-CDR Ahilyanagar, including available seats, admission opportunities and program details for students planning a management career.",
    url: "https://imscdr.ac.in/program-mba/intake",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MBA Intake at IMS-CDR Ahilyanagar | Seats and Admission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Intake at IMS-CDR Ahilyanagar | Seats and Admission",
    description: "Check MBA intake at IMS-CDR Ahilyanagar, including available seats, admission opportunities and program details for students planning a management career.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="intake_mian">
        <div className="intake_inner">
          <Image
            src="/images/program/intake-img.webp"
            alt="Intake"
            width={1000}
            height={350}
            className="img-fluid w-100 h-auto"
          />
          <div className="intake_content">
            <div className="heading">Intake</div>
            <p>The sanctioned number of seats for the MBA batch.</p>
            <div className="intake_number"> 180<span>+9 Supernumerary seats</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
