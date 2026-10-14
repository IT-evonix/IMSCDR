import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCA Career Opportunities | AI and IT Career Options",
  description: "BCA career opportunities at IMS-CDR span software development, AI, Data Science, cybersecurity, cloud computing and other growing IT fields.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-bca/career-opportunities",
  },
  openGraph: {
    title: "BCA Career Opportunities | AI and IT Career Options",
    description: "BCA career opportunities at IMS-CDR span software development, AI, Data Science, cybersecurity, cloud computing and other growing IT fields.",
    url: "https://imscdr.ac.in/program-bca/career-opportunities",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "BCA Career Opportunities | AI and IT Career Options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BCA Career Opportunities | AI and IT Career Options",
    description: "BCA career opportunities at IMS-CDR span software development, AI, Data Science, cybersecurity, cloud computing and other growing IT fields.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">Career opportunities after BCA</div>
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
      A BCA degree prepares students for a wide range of career opportunities in the fast-growing information technology sector. Graduates can build careers as Software Developers, Web Developers, Mobile Application Developers, System Analysts, Database Administrators, Cloud Support Engineers, Cybersecurity Analysts, Data Analysts, Quality Assurance Engineers, and IT Support Professionals. The programme also lays a strong foundation for emerging fields such as Artificial Intelligence, Machine Learning, Data Science, and Cloud Computing. With increasing digital transformation across industries, BCA graduates are in demand in IT companies, startups, multinational corporations, government organizations, and technology-driven enterprises. The programme also serves as an excellent stepping stone for higher studies such as MCA,  MBA, and other specialized postgraduate programmes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
