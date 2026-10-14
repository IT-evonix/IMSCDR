import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBA Laboratories at IMS-CDR Ahilyanagar | Learning Facilities",
  description: "Explore MBA laboratories at IMS-CDR Ahilyanagar, designed to support practical management learning, analytical skills, technology use and industry-ready education.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-mba/laboratories",
  },
  openGraph: {
    title: "MBA Laboratories at IMS-CDR Ahilyanagar | Learning Facilities",
    description: "Explore MBA laboratories at IMS-CDR Ahilyanagar, designed to support practical management learning, analytical skills, technology use and industry-ready education.",
    url: "https://imscdr.ac.in/program-mba/laboratories",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MBA Laboratories at IMS-CDR Ahilyanagar | Learning Facilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Laboratories at IMS-CDR Ahilyanagar | Learning Facilities",
    description: "Explore MBA laboratories at IMS-CDR Ahilyanagar, designed to support practical management learning, analytical skills, technology use and industry-ready education.",
    images: ["/images/home/black_logo.jpg"],
  },
};

export default function MbaLaboratoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
