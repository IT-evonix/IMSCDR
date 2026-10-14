import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BBA Career Opportunities | Jobs and Career Options",
  description: "Find career opportunities after BBA in marketing, finance, HR, sales, banking, consulting and entrepreneurship, with pathways to MBA and other higher studies.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-bba/career-opportunities",
  },
  openGraph: {
    title: "BBA Career Opportunities | Jobs and Career Options",
    description: "Find career opportunities after BBA in marketing, finance, HR, sales, banking, consulting and entrepreneurship, with pathways to MBA and other higher studies.",
    url: "https://imscdr.ac.in/program-bba/career-opportunities",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "BBA Career Opportunities | Jobs and Career Options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BBA Career Opportunities | Jobs and Career Options",
    description: "Find career opportunities after BBA in marketing, finance, HR, sales, banking, consulting and entrepreneurship, with pathways to MBA and other higher studies.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">Career opportunities after BBA</div>
      <div className="row flex-sm-row-reverse">
        <div className="col-md-6">
          <div className="career_opportunities_images">
            <div className="career_opportunities_img">
              <Image
                src="/images/program/career_opportunities1.webp"
                alt="Students"
                width={400}
                height={250}
                className="img-fluid"
              />
            </div>
            <div className="logobox_img">
              <Image
                src="/images/home/black_logo.webp"
                alt="Students"
                width={200}
                height={150}
                className="img-fluid"
              />
            </div>
            <div className="career_opportunities_img">
              <Image
                src="/images/program/career_opportunities2.webp"
                alt="Students"
                width={400}
                height={250}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p>
           A BBA degree opens the door to diverse career opportunities across industries, 
           equipping graduates with the knowledge and skills to succeed in today's competitive business environment. 
           Graduates can pursue roles in marketing, finance, human resources, sales, operations, business development,
            retail management, banking, consulting, and entrepreneurship. With a strong foundation in management principles,
             analytical thinking, and leadership, BBA graduates are well-prepared to work with corporate organizations, startups,
              multinational companies, government organizations, and family businesses. The programme also provides an excellent 
              pathway for higher education, including MBA, PGDM, and other specialized postgraduate programmes,
            enabling students to advance into leadership and managerial positions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
