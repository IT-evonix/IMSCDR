import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="eligibility_main">
        <div className="heading">Eligibility</div>
        <p>
          Candidates who have completed a Bachelor's degree of at least three years' duration from a recognized university are eligible to apply for the Master of Business Administration (MBA) programme, subject to the admission process, entrance examination requirements, and eligibility criteria prescribed by the SPPU, and AICTE. For detailed eligibility requirements, please refer to the AICTE Approval Process Handbook (APH) 2024–2027.
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
