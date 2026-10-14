import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty Research | Research Publications at IMS-CDR",
  description: "View faculty research at IMS-CDR Ahilyanagar, including research papers, Scopus and UGC-CARE publications, conferences, collaborations and funded projects.",
  alternates: {
    canonical: "https://imscdr.ac.in/research/faculty-research",
  },
  openGraph: {
    title: "Faculty Research | Research Publications at IMS-CDR",
    description: "View faculty research at IMS-CDR Ahilyanagar, including research papers, Scopus and UGC-CARE publications, conferences, collaborations and funded projects.",
    url: "https://imscdr.ac.in/research/faculty-research",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Faculty Research | Research Publications at IMS-CDR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faculty Research | Research Publications at IMS-CDR",
    description: "View faculty research at IMS-CDR Ahilyanagar, including research papers, Scopus and UGC-CARE publications, conferences, collaborations and funded projects.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="research_journalmain">
        <div className="aboutsec_inner">
          <div className="aboutus_left">
            <Image
              src="/images/campus/campus-overview/campus-overview.webp"
              alt="Banner"
              width={1200}
              height={700}
              className="img-fluid"
            />
          </div>
          <div className="aboutus_right">
            <div className="heading">
              Faculty Participation in Research
            </div>
            The Institute actively encourages faculty participation in research
            and scholarly activities by creating a supportive environment for
            continuous academic development. Faculty members are motivated to
            undertake original and high-quality research, publish research
            papers in reputed UGC-CARE, Scopus-indexed, ABDC and other
            recognized journals, present papers at national and international
            conferences, and contribute to books and edited volumes. The
            Institute also promotes collaborative and interdisciplinary
            research, participation in research projects, workshops, FDPs and
            research-oriented seminars. Faculty members are encouraged to pursue
            higher-quality publications, citations, research collaborations and
            funded research projects, thereby strengthening the Institute’s
            research profile and contributing to knowledge creation and academic
            excellence.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
