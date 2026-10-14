import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBA With Placement | IMS-CDR College Ahilyanagar",
  description: "IMS-CDR College Ahilyanagar provides placement support, skill training and recruitment opportunities for MBA, MCA, BBA and BCA students through its Placement Cell.",
  alternates: {
    canonical: "https://imscdr.ac.in/placement/placement-overview",
  },
  openGraph: {
    title: "MBA With Placement | IMS-CDR College Ahilyanagar",
    description: "IMS-CDR College Ahilyanagar provides placement support, skill training and recruitment opportunities for MBA, MCA, BBA and BCA students through its Placement Cell.",
    url: "https://imscdr.ac.in/placement/placement-overview",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MBA With Placement | IMS-CDR College Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA With Placement | IMS-CDR College Ahilyanagar",
    description: "IMS-CDR College Ahilyanagar provides placement support, skill training and recruitment opportunities for MBA, MCA, BBA and BCA students through its Placement Cell.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="lifeat_campus_main">
        <div className="aboutsec_inner">
          <div className="aboutus_left">
            <Image
              src="/images/campus/hostel/boys_hostel.webp"
              alt="Banner"
              width={1200}
              height={900}
              className="img-fluid"
            />
          </div>
          <div className="aboutus_right">
            <div className="aboutus_right_inner">
              <div className="subheading mb-1">
                Placement Overview
              </div>
              <p>
                The IMS  Placement cell works to ensure that our students are well equipped to take up the challenges of the professional environment. The main objective of the Placement Cell is to bridge the gap between the stringent competition in the industry and talent available in the college. Not only does the Placement Cell offer training programs to students to develop various significant skills, but also facilitates the process of recruitment for all the eligible students.
              </p>
              <p>
                The placement cell is successful in maintaining high placement statistics over the years and the fact that our students bear the recession blues with record-breaking placements itself is a testimony to their quality. The collaboration with the companies has in fact made much more easier for the institute to ensure good placements for the students of MBA, MCA, BBA and BCA. Last but not the least , the presence of  MIDC’s in Ahmednagar, Kedgaon,Supa and Newasa has boosted the scope of  placement opportunites for our students and the institute at large.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
