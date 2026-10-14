import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCA FAQ | Admission, AI & Eligibility | IMS-CDR",
  description: "Find answers on BCA admission, eligibility, career options and BCA in Artificial Intelligence at IMS-CDR, one of the best BCA colleges in Ahilyanagar.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-bca/faq",
  },
  openGraph: {
    title: "BCA FAQ | Admission, AI & Eligibility | IMS-CDR",
    description: "Find answers on BCA admission, eligibility, career options and BCA in Artificial Intelligence at IMS-CDR, one of the best BCA colleges in Ahilyanagar.",
    url: "https://imscdr.ac.in/program-bca/faq",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "BCA FAQ | Admission, AI & Eligibility | IMS-CDR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BCA FAQ | Admission, AI & Eligibility | IMS-CDR",
    description: "Find answers on BCA admission, eligibility, career options and BCA in Artificial Intelligence at IMS-CDR, one of the best BCA colleges in Ahilyanagar.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import Faq from "@/components/Faq";
import { bcaFaqs } from "@/data/faqData";

export default function MBAPage() {
  return (
    <div className="innerpagerightside">
      <Faq title="Frequently Asked Questions" faqs={bcaFaqs} />
    </div>
  );
}
