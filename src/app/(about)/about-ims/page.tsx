import React from "react";
import Image from "next/image";
import InfoCard from "@/components/abouttab/infoCard";
import { aboutObjectives } from "@/data/infoCard";
const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="about_unner_page">
        <div className="innerpageabout_section">
          <div className="row">
            <div className="col-md-5">
              <div className="about_inner_img">
                <Image
                  className="img-fluid"
                  src="/images/program/mba-overview1.webp"
                  alt="about imscdr"
                  width={350}
                  height={350}
                />
                <div className="imscdr_box">
                  We are the NAAC Re-Accredited Institute, awarded the Best
                  Institute by Savitribai Phule Pune University, with 65% Ph.D
                  holders to teach and prepare you for a successful career.
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="heading">About IMS</div>
              <p>
                The Bhaskar Pandurang Hivale Education (B.P.H.E.) Society’s
                Institute of Management Studies, Career Development and Research
                (IMS) is a premier management institute conducting various
                quality programmes in Management and Information Technology in
                Ahmednagar. IMS is affiliated to the Savitribai Phule Pune
                University, Pune and is recognized by the All India Council for
                Technical Education (AICTE), New Delhi. IMS has reputation for
                novel and need based courses, visionary leadership, well
                qualified and experienced faculty members, modern and
                interactive teaching methodology, state of the art
                infrastructure, innovative student development initiatives,
                strong industry interface, good placements, meticulous research,
                meaningful consultancy, professional training, fair and
                transparent governance and community‐oriented activities.
              </p>
            </div>
          </div>
        </div>

        <div className="div">
          <div className="about-nacc">
            <div className="about-naccimg">
              <Image
                src="/images/about/naac.webp"
                alt="Dr. S. B. Mujumdar"
                width={90}
                height={86}
                priority
              />
            </div>
            <div className="about-nacc-content">
              IMS has been Re‐accredited as NAAC Re-Accredited Institute by
              National Assessment & Accreditation Council of India (NAAC),
              Bengaluru. As per the exclusive survey conducted by Nationally
              well known magazine Business Baron, November 2019, IMS Ahmednagar
              is ranked 25 in India’s Top B‐School Brands.
            </div>
          </div>

          <div className="about-nacc aboutaward">
            <div className="about-naccimg">
              <Image
                src="/images/about/award.webp"
                alt="Dr. S. B. Mujumdar"
                width={60}
                height={57}
                priority
              />
            </div>
            <div className="about-nacc-content">
              IMS has received many prestigious awards like the Best Institute
              Award from S. P. Pune University, National Award for Leadership in
              IT Education from Canon India Pvt. Ltd., Best B‐ School Library
              Award from Discovery Education Media ‐ MBA by Choice, Most
              Upcoming Best B‐School award by ASSOCHAM, New Delhi.
            </div>
          </div>
        </div>

        <section className="objective_section">
          <div className="row">
            {aboutObjectives.map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.number}>
                <InfoCard
                  number={item.number}
                  title={item.title}
                  color={item.color}
                  Icon={item.Icon}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
