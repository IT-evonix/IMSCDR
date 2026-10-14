import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equal Opportunity Cell | IMS-CDR Ahilyanagar",
  description: "Know about the Equal Opportunity Cell at IMS-CDR Ahilyanagar, promoting equal access, inclusion and a fair, respectful environment for all students.",
  alternates: {
    canonical: "https://imscdr.ac.in/equal-opportunity-cell",
  },
  openGraph: {
    title: "Equal Opportunity Cell | IMS-CDR Ahilyanagar",
    description: "Know about the Equal Opportunity Cell at IMS-CDR Ahilyanagar, promoting equal access, inclusion and a fair, respectful environment for all students.",
    url: "https://imscdr.ac.in/equal-opportunity-cell",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Equal Opportunity Cell | IMS-CDR Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equal Opportunity Cell | IMS-CDR Ahilyanagar",
    description: "Know about the Equal Opportunity Cell at IMS-CDR Ahilyanagar, promoting equal access, inclusion and a fair, respectful environment for all students.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  EqualOpportunityCellCommitteeColumns,
  EqualOpportunityCellCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Equal Opportunity Cell"
        breadcrumbs={[{ label: "Equal Opportunity Cell" }]}
      />
      <div className="fullwidth_page">
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members </div>
          </div>
          <Table columns={EqualOpportunityCellCommitteeColumns} data={EqualOpportunityCellCommitteeMembers} />
        </div>
      </div>
      </div>
    </section>
  );
}
