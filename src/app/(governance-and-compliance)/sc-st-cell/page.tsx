import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SC ST Cell and Anti-Discrimination Committee | IMS-CDR Ahilyanagar",
  description: "Learn about the SC/ST Cell at IMS-CDR, including committee members and their roles in supporting an inclusive campus and addressing discrimination.",
  alternates: {
    canonical: "https://imscdr.ac.in/sc-st-cell",
  },
  openGraph: {
    title: "SC ST Cell and Anti-Discrimination Committee | IMS-CDR Ahilyanagar",
    description: "Learn about the SC/ST Cell at IMS-CDR, including committee members and their roles in supporting an inclusive campus and addressing discrimination.",
    url: "https://imscdr.ac.in/sc-st-cell",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "SC ST Cell and Anti-Discrimination Committee | IMS-CDR Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SC ST Cell and Anti-Discrimination Committee | IMS-CDR Ahilyanagar",
    description: "Learn about the SC/ST Cell at IMS-CDR, including committee members and their roles in supporting an inclusive campus and addressing discrimination.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  casteBasedCommitteeColumns,
  casteBasedCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="SC/ST Cell"
        breadcrumbs={[{ label: "SC / ST Cell" }]}
      />
      <div className="fullwidth_page">
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members </div>
          </div>
          <Table columns={casteBasedCommitteeColumns} data={casteBasedCommitteeMembers} />
        </div>
      </div>
      </div>
    </section>
  );
}
