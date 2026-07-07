import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="eligibility_main">
        <div className="heading">Eligibility</div>
        <p>
          Academic qualifications and entrance requirements for admission to the
          MBA business management program.
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
