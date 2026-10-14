import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internal Complaint Committee & POSH | IMS-CDR Ahilyanagar",
  description: "Explore the Internal Complaint Committee at IMS-CDR, its members and roles under POSH guidelines for addressing complaints and promoting a safe campus.",
  alternates: {
    canonical: "https://imscdr.ac.in/internal-commitee",
  },
  openGraph: {
    title: "Internal Complaint Committee & POSH | IMS-CDR Ahilyanagar",
    description: "Explore the Internal Complaint Committee at IMS-CDR, its members and roles under POSH guidelines for addressing complaints and promoting a safe campus.",
    url: "https://imscdr.ac.in/internal-commitee",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Internal Complaint Committee & POSH | IMS-CDR Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internal Complaint Committee & POSH | IMS-CDR Ahilyanagar",
    description: "Explore the Internal Complaint Committee at IMS-CDR, its members and roles under POSH guidelines for addressing complaints and promoting a safe campus.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  InternalCommitteeCommitteeColumns,
  InternalCommitteeCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Internal Complaint Committee/POSH"
        breadcrumbs={[{ label: "Internal Complaint Committee/POSH" }]}
      />
      <div className="fullwidth_page">
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members</div>
          </div>
          <Table columns={InternalCommitteeCommitteeColumns} data={InternalCommitteeCommitteeMembers} />
        </div>
      </div>
      </div>
    </section>
  );
}
