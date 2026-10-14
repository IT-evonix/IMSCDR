import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMS-CDR Ahilyanagar Approvals & Affiliations | UGC, AICTE",
  description: "View IMS-CDR Ahilyanagar approvals and affiliations, including AICTE recognition and university affiliations supporting trusted MBA, MCA, BBA and BCA education.",
  alternates: {
    canonical: "https://imscdr.ac.in/approvals-and-affiliations",
  },
  openGraph: {
    title: "IMS-CDR Ahilyanagar Approvals & Affiliations | UGC, AICTE",
    description: "View IMS-CDR Ahilyanagar approvals and affiliations, including AICTE recognition and university affiliations supporting trusted MBA, MCA, BBA and BCA education.",
    url: "https://imscdr.ac.in/approvals-and-affiliations",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS-CDR Ahilyanagar Approvals & Affiliations | UGC, AICTE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS-CDR Ahilyanagar Approvals & Affiliations | UGC, AICTE",
    description: "View IMS-CDR Ahilyanagar approvals and affiliations, including AICTE recognition and university affiliations supporting trusted MBA, MCA, BBA and BCA education.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Image from "next/image";
import ExploreBtn from "@/components/ui/ExploreBtn";
const page = () => {
  return (
    <div className="innerpagerightside">
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="parallaximg_image">
            <Image
              className="img-fluid"
              src="/images/about/aicte-sspu.webp"
              alt="about imscdr"
              width={750}
              height={670}
            />
          </div>
          <div className="content-box">
            <div className="heading" style={{ lineHeight: "36px" }}>
              We are an AICTE approved institiution affiliated to Savitribai Phule Pune University and NAAC re-accredited
            </div>
            <ExploreBtn href="/student-corner/downloads" text="Know More" />
          </div>
        </div>
        <div className="zigzag-row reverse d-none">
          <div className="parallaximg_image">
            <Image
              className="img-fluid"
              src="/images/about/SPPU.webp"
              alt="about imscdr"
              width={350}
              height={350}
            />
          </div>
          <div className="content-box">
            <div className="heading">Savitribai Phule Pune University</div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets. It has survived not only many
              decades, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised thanks to these
              sheets....
            </p>

            <ExploreBtn href="/about" text="Know More" />
          </div>
        </div>
        <div className="zigzag-row  d-none">
          <div className="parallaximg_image">
            <Image
              className="img-fluid"
              src="/images/about/Naac-Img.webp"
              alt="about imscdr"
              width={350}
              height={350}
            />
          </div>
          <div className="content-box">
            <div className="heading">NAAC Accrediation</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets. It has survived not only many
              decades, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised thanks to these
              sheets....
            </p>
            <ExploreBtn href="/about" text="Know More" />
          </div>
        </div>
      </section>
      {/* <div className="heading">Coming Soon</div> */}
    </div>
  );
};

export default page;
