import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMS Admission and Eligibility Criteria | IMS-CDR Ahilyanagar",
  description: "Find admission eligibility requirements for MBA, MCA, BBA and BCA at IMS-CDR, including degree, entrance and programme-specific criteria",
  alternates: {
    canonical: "https://imscdr.ac.in/eligibility",
  },
  openGraph: {
    title: "IMS Admission and Eligibility Criteria | IMS-CDR Ahilyanagar",
    description: "Find admission eligibility requirements for MBA, MCA, BBA and BCA at IMS-CDR, including degree, entrance and programme-specific criteria",
    url: "https://imscdr.ac.in/eligibility",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS Admission and Eligibility Criteria | IMS-CDR Ahilyanagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS Admission and Eligibility Criteria | IMS-CDR Ahilyanagar",
    description: "Find admission eligibility requirements for MBA, MCA, BBA and BCA at IMS-CDR, including degree, entrance and programme-specific criteria",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="eligibility_main" style={{ padding: "0px" }}>
        <div className="heading">Eligibility</div>
        <div className="eligibility_cardlisting">
          <div className="eligibility_card">
            <p className="m-0 eligibility_text">
              Candidates who have completed a Bachelor's degree of at least
              three years' duration from a recognized university are eligible to
              apply for the Master of Business Administration (MBA) programme,
              subject to the admission process, entrance examination
              requirements, and eligibility criteria prescribed by the SPPU, and
              AICTE. For detailed eligibility requirements, please refer to the
              AICTE Approval Process Handbook (APH) 2024–2027.
            </p>
            <div className="eligibility_inner">
              <div className="branchname">MBA Eligibility</div>
              <Image
                src="/images/program/Eligibility1.webp"
                alt="Eligibility Page UI Design"
                width={250}
                height={250}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="eligibility_card">
            <div className="eligibility_inner">
              <div className="branchname" style={{background:"#5d2e8b"}}>MCA Eligibility</div>
              <Image
                src="/images/program/Eligibility2.webp"
                alt="Eligibility Page UI Design"
                width={250}
                height={250}
                className="img-fluid"
              />
            </div>
            <div className="eligibility_text">
              <p className="">
                Candidates seeking admission to the MCA programme should satisfy
                the eligibility criteria prescribed by the AICTE, Government of
                Maharashtra, State CET Cell, and Savitribai Phule Pune
                University, as applicable for the respective academic year.
              </p>
              <p className="">
                Admission is carried out through the Centralized Admission
                Process (CAP) conducted by the State Common Entrance Test Cell,
                Maharashtra.
              </p>
              <p className="m-0">
                A bridge course is conducted for students from non-Computer
                Science/IT backgrounds whenever applicable.
              </p>
            </div>
          </div>


          <div className="eligibility_card">
            <p className="m-0 eligibility_text">
              Passed the 10+2 (Higher Secondary) examination or equivalent from a recognized central or state board.  Specific percentage requirements, subject combinations, and merit lists follow the rules of the affiliating university where the college is registered. For detailed eligibility please see APH 2024-2027.
            </p>
            <div className="eligibility_inner">
              <div className="branchname">BBA / BCA Eligibility</div>
              <Image
                src="/images/program/Eligibility1.webp"
                alt="Eligibility Page UI Design"
                width={250}
                height={250}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
