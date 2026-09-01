import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="eligibility_main">
        <div className="heading">Eligibility</div>
        <p>
          Passed the 10+2 (Higher Secondary) examination or equivalent from a recognized central or state board. Specific percentage requirements, subject combinations, and merit lists follow the rules of the affiliating university where the college is registered. For detailed eligibility please see APH 2024-2027.
        </p>
        <div className="eligibility_inner">
          <Image
            src="/images/program/eligibility.webp"
            alt="Eligibility Page UI Design"
            width={1000}
            height={500}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
