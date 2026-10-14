import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Ragging Squad | IMS-CDR Ahilyanagar Student Safety",
  description: "Learn about the IMS-CDR Ahilyanagar Anti-Ragging Squad, its role in preventing ragging, promoting student safety and maintaining a respectful campus environment.",
  alternates: {
    canonical: "https://imscdr.ac.in/anti-ragging-squad",
  },
  openGraph: {
    title: "Anti-Ragging Squad | IMS-CDR Ahilyanagar Student Safety",
    description: "Learn about the IMS-CDR Ahilyanagar Anti-Ragging Squad, its role in preventing ragging, promoting student safety and maintaining a respectful campus environment.",
    url: "https://imscdr.ac.in/anti-ragging-squad",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Anti-Ragging Squad | IMS-CDR Ahilyanagar Student Safety",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti-Ragging Squad | IMS-CDR Ahilyanagar Student Safety",
    description: "Learn about the IMS-CDR Ahilyanagar Anti-Ragging Squad, its role in preventing ragging, promoting student safety and maintaining a respectful campus environment.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  antiRaggingSqualColumns,
  antiRaggingSqualMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Anti-Ragging Squad"
        breadcrumbs={[{ label: "Anti-Ragging Squad" }]}
      />
      <div className="fullwidth_page">
        <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members</div>
          </div>
          <Table columns={antiRaggingSqualColumns} data={antiRaggingSqualMembers} />
        </div>
      </div>
      </div>
    </section>
  );
}
