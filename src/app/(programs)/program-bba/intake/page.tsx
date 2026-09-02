import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="intake_mian">
        <div className="intake_inner">
          <Image
            src="/images/program/intake-img.webp"
            alt="Intake"
            width={1000}
            height={350}
            className="img-fluid w-100 h-auto"
          />
          <div className="intake_content">
            <div className="heading">Intake</div>
            <p>The sanctioned number of seats for the BBA batch.</p>
            <div className="intake_number"> 60<span>+3 Supernumerary </span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
