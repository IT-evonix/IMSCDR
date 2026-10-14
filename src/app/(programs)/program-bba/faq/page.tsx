import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BBA FAQ | Admission, Eligibility and Course Details | IMS-CDR",
  description: "Get answers about BBA admission, eligibility, career options and course details at IMS-CDR, a leading BBA college in Ahilyanagar for business studies.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-bba/faq",
  },
  openGraph: {
    title: "BBA FAQ | Admission, Eligibility and Course Details | IMS-CDR",
    description: "Get answers about BBA admission, eligibility, career options and course details at IMS-CDR, a leading BBA college in Ahilyanagar for business studies.",
    url: "https://imscdr.ac.in/program-bba/faq",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "BBA FAQ | Admission, Eligibility and Course Details | IMS-CDR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BBA FAQ | Admission, Eligibility and Course Details | IMS-CDR",
    description: "Get answers about BBA admission, eligibility, career options and course details at IMS-CDR, a leading BBA college in Ahilyanagar for business studies.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import Faq from "@/components/Faq";
import { bbaFaqs } from "@/data/faqData";

export default function MBAPage() {
  return (
    <div className="innerpagerightside">
      <Faq title="Frequently Asked Questions" faqs={bbaFaqs} />
    </div>
  );
}
