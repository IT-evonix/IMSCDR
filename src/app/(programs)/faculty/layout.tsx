import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMS-CDR Ahilyanagar Faculty | Experienced Academic Experts",
  description: "Meet the faculty at IMS-CDR Ahilyanagar, featuring experienced academic professionals who support quality teaching, research, practical learning and student success.",
  alternates: {
    canonical: "https://imscdr.ac.in/faculty",
  },
  openGraph: {
    title: "IMS-CDR Ahilyanagar Faculty | Experienced Academic Experts",
    description: "Meet the faculty at IMS-CDR Ahilyanagar, featuring experienced academic professionals who support quality teaching, research, practical learning and student success.",
    url: "https://imscdr.ac.in/faculty",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS-CDR Ahilyanagar Faculty | Experienced Academic Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS-CDR Ahilyanagar Faculty | Experienced Academic Experts",
    description: "Meet the faculty at IMS-CDR Ahilyanagar, featuring experienced academic professionals who support quality teaching, research, practical learning and student success.",
    images: ["/images/home/black_logo.jpg"],
  },
};

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
