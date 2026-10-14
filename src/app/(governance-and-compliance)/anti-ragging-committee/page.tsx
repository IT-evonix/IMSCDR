import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Ragging Committee | IMS-CDR Ahilyanagar Student Safety",
  description: "Learn about the Anti-Ragging Committee at IMS-CDR Ahilyanagar, its role, guidelines and measures promoting a safe, respectful and supportive campus environment.",
  alternates: {
    canonical: "https://imscdr.ac.in/anti-ragging-committee",
  },
  openGraph: {
    title: "Anti-Ragging Committee | IMS-CDR Ahilyanagar Student Safety",
    description: "Learn about the Anti-Ragging Committee at IMS-CDR Ahilyanagar, its role, guidelines and measures promoting a safe, respectful and supportive campus environment.",
    url: "https://imscdr.ac.in/anti-ragging-committee",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Anti-Ragging Committee | IMS-CDR Ahilyanagar Student Safety",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti-Ragging Committee | IMS-CDR Ahilyanagar Student Safety",
    description: "Learn about the Anti-Ragging Committee at IMS-CDR Ahilyanagar, its role, guidelines and measures promoting a safe, respectful and supportive campus environment.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  antiRaggingCommitteeColumns,
  antiRaggingCommitteeMembers,
} from "@/data/tablemembers";


export default function AntiRaggingCommitteePage() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Anti Ragging Committee"
        breadcrumbs={[{ label: "Anti Ragging Committee" }]}
      />
      <div className="fullwidth_page">
        <div className="tablemain_section">
          <div className="container">
            <div className="mb-4">
              <div className="heading text-center">Committee Members</div>
            </div>
            <Table columns={antiRaggingCommitteeColumns} data={antiRaggingCommitteeMembers} />
          </div>
        </div>
      </div>
    </section>
  );
}

