import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBA FAQs and Admission Guide | IMS-CDR Ahilyanagar",
  description: "Find answers to frequently asked questions about the MBA program at IMS-CDR Ahilyanagar, including admissions, eligibility, fees, placements, and course details.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-mba/faq",
  },
  openGraph: {
    title: "MBA FAQs and Admission Guide | IMS-CDR Ahilyanagar",
    description: "Find answers to frequently asked questions about the MBA program at IMS-CDR Ahilyanagar, including admissions, eligibility, fees, placements, and course details.",
    url: "https://imscdr.ac.in/program-mba/faq",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MBA FAQs and Admission Guide | IMS-CDR Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA FAQs and Admission Guide | IMS-CDR Ahilyanagar",
    description: "Find answers to frequently asked questions about the MBA program at IMS-CDR Ahilyanagar, including admissions, eligibility, fees, placements, and course details.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import Faq from "@/components/Faq";
import { mbaFaqs } from "@/data/faqData";

export default function MBAPage() {
  return (
    <div className="innerpagerightside">
      <Faq title="Frequently Asked Questions" faqs={mbaFaqs} />
    </div>
  );
}
