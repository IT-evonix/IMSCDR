import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCA Intake and Seat Capacity | Best BCA College in Ahilyanagar",
  description: "BCA intake at IMS-CDR includes 60 sanctioned seats and 3 supernumerary seats for students pursuing Bachelor of Computer Applications in Ahilyanagar.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-bca/intake",
  },
  openGraph: {
    title: "BCA Intake and Seat Capacity | Best BCA College in Ahilyanagar",
    description: "BCA intake at IMS-CDR includes 60 sanctioned seats and 3 supernumerary seats for students pursuing Bachelor of Computer Applications in Ahilyanagar.",
    url: "https://imscdr.ac.in/program-bca/intake",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "BCA Intake and Seat Capacity | Best BCA College in Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BCA Intake and Seat Capacity | Best BCA College in Ahilyanagar",
    description: "BCA intake at IMS-CDR includes 60 sanctioned seats and 3 supernumerary seats for students pursuing Bachelor of Computer Applications in Ahilyanagar.",
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
            <p>The sanctioned number of seats for the BCA batch.</p>
            <div className="intake_number"> 60 <span>+3 Supernumerary </span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
