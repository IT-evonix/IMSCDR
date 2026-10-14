import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCA FAQ | Course Duration, Fees and Eligibility | IMS-CDR",
  description: "Get answers about MCA course duration, fees, eligibility, curriculum and careers at IMS-CDR, a leading MCA college in Ahmednagar.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-mca/faq",
  },
  openGraph: {
    title: "MCA FAQ | Course Duration, Fees and Eligibility | IMS-CDR",
    description: "Get answers about MCA course duration, fees, eligibility, curriculum and careers at IMS-CDR, a leading MCA college in Ahmednagar.",
    url: "https://imscdr.ac.in/program-mca/faq",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MCA FAQ | Course Duration, Fees and Eligibility | IMS-CDR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCA FAQ | Course Duration, Fees and Eligibility | IMS-CDR",
    description: "Get answers about MCA course duration, fees, eligibility, curriculum and careers at IMS-CDR, a leading MCA college in Ahmednagar.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import Faq from "@/components/Faq";
import { mcaFaqs } from "@/data/faqData";

export default function MBAPage() {
  return (
    <div className="innerpagerightside">
      <Faq title="Frequently Asked Questions" faqs={mcaFaqs} />
    </div>
  );
}
