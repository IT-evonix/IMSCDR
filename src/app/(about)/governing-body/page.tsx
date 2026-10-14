import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Governing Body | IMS-CDR Ahilyanagar",
  description: "Meet the Governing Body of IMS-CDR Ahilyanagar and learn about the experienced leaders guiding the institute's vision, governance, and academic excellence.",
  alternates: {
    canonical: "https://imscdr.ac.in/governing-body",
  },
  openGraph: {
    title: "Governing Body | IMS-CDR Ahilyanagar",
    description: "Meet the Governing Body of IMS-CDR Ahilyanagar and learn about the experienced leaders guiding the institute's vision, governance, and academic excellence.",
    url: "https://imscdr.ac.in/governing-body",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Governing Body | IMS-CDR Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Governing Body | IMS-CDR Ahilyanagar",
    description: "Meet the Governing Body of IMS-CDR Ahilyanagar and learn about the experienced leaders guiding the institute's vision, governance, and academic excellence.",
    images: ["/images/home/black_logo.jpg"],
  },
};

// import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  governingBodyColumns,
  governingBodyMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper innerpagerightside">
      <div className="tablemain_section">
        <div className="mb-4">
          <div className="heading">Board of Governance </div>
          <p className="">
            The Governing Body of the B.P.H.E. Society, led by Chairman Dr. Rajneesh Barnabas and Secretary Mr. Vishal Barnabas, provides
            strategic direction and oversight for all educational institutes
            established under the society, including IMS-CDR. Comprising senior
            academicians and experienced professionals, the body is responsible
            for policy setting and guiding the overall management of the
            institute.
          </p>
        </div>
        <Table columns={governingBodyColumns} data={governingBodyMembers} />
      </div>
    </section>
  );
}
