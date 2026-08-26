import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="eligibility_main">
        <div className="heading">Eligibility</div>
        <p>
Candidates seeking admission to the MCA programme should satisfy the eligibility criteria prescribed by the AICTE, Government of Maharashtra, State CET Cell, and Savitribai Phule Pune University, as applicable for the respective academic year.</p>

<p>Admission is carried out through the Centralized Admission Process (CAP) conducted by the State Common Entrance Test Cell, Maharashtra.</p>
<p>A bridge course is conducted for students from non-Computer Science/IT backgrounds whenever applicable.</p>
        
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
