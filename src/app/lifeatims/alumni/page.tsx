import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMS-CDR Ahilyanagar Alumni Network | 6,000+ Global Alumni",
  description: "Connect with the IMS-CDR Ahilyanagar alumni network of 6,000+ professionals, entrepreneurs and leaders supporting students through mentoring and opportunities.",
  alternates: {
    canonical: "https://imscdr.ac.in/lifeatims/alumni",
  },
  openGraph: {
    title: "IMS-CDR Ahilyanagar Alumni Network | 6,000+ Global Alumni",
    description: "Connect with the IMS-CDR Ahilyanagar alumni network of 6,000+ professionals, entrepreneurs and leaders supporting students through mentoring and opportunities.",
    url: "https://imscdr.ac.in/lifeatims/alumni",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS-CDR Ahilyanagar Alumni Network | 6,000+ Global Alumni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS-CDR Ahilyanagar Alumni Network | 6,000+ Global Alumni",
    description: "Connect with the IMS-CDR Ahilyanagar alumni network of 6,000+ professionals, entrepreneurs and leaders supporting students through mentoring and opportunities.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="div">
        <div className="innerpageabout_section">
          <div className="row">
            <div className="col-md-5">
              <div className="about_inner_img">
                <Image
                  className="img-fluid"
                  src="/images/program/mba-overview1.webp"
                  alt="about imscdr"
                  width={350}
                  height={350}
                />
                <div className="imscdr_box">
                  <h4 style={{ margin: "0px" }}>More Than 6,000 Alumni </h4>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              {/* <div className="heading">About IMS</div> */}
              <p>
                IMS-CDR has a strong and growing network of more than 6,000
                alumni who are working successfully in various institutes and
                organizations across India and abroad. They serve as
                professionals, entrepreneurs, academicians, corporate leaders,
                and public servants. The institute maintains close connections
                with its alumni through regular interactions, alumni meets,
                mentoring sessions, and guest lectures. Alumni actively support
                the institute by guiding students, sharing industry knowledge,
                facilitating internships and placements, and inspiring future
                generations with their achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
