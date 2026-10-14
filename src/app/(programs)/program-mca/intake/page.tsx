import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCA Intake and Seat Capacity | IMS-CDR Ahilyanagar",
  description: "Check the MCA intake at IMS-CDR, including the sanctioned seat capacity of 120 students plus 6 supernumerary seats for the MCA programme.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-mca/intake",
  },
  openGraph: {
    title: "MCA Intake and Seat Capacity | IMS-CDR Ahilyanagar",
    description: "Check the MCA intake at IMS-CDR, including the sanctioned seat capacity of 120 students plus 6 supernumerary seats for the MCA programme.",
    url: "https://imscdr.ac.in/program-mca/intake",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MCA Intake and Seat Capacity | IMS-CDR Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCA Intake and Seat Capacity | IMS-CDR Ahilyanagar",
    description: "Check the MCA intake at IMS-CDR, including the sanctioned seat capacity of 120 students plus 6 supernumerary seats for the MCA programme.",
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
            <p>The sanctioned number of seats for the MCA batch.</p>
            <div className="intake_number"> 120 Students <span>+ 6 Supernumerary</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
