import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBA Curriculum at IMS-CDR Ahilyanagar | Course Structure",
  description: "Explore the MBA curriculum at IMS-CDR Ahilyanagar, covering course structure, management subjects, practical learning and skills for a successful business career.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-mba/curriculum",
  },
  openGraph: {
    title: "MBA Curriculum at IMS-CDR Ahilyanagar | Course Structure",
    description: "Explore the MBA curriculum at IMS-CDR Ahilyanagar, covering course structure, management subjects, practical learning and skills for a successful business career.",
    url: "https://imscdr.ac.in/program-mba/curriculum",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MBA Curriculum at IMS-CDR Ahilyanagar | Course Structure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Curriculum at IMS-CDR Ahilyanagar | Course Structure",
    description: "Explore the MBA curriculum at IMS-CDR Ahilyanagar, covering course structure, management subjects, practical learning and skills for a successful business career.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import MBASyllabus from "@/components/program/MBASyllabus";

export default function MBASyllabusPage() {
  return (
    <div className="innerpagerightside">
      <MBASyllabus />
    </div>
  );
}