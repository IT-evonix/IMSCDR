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
                <div className="imscdr_box mb-4">
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

        <div className="vision_mision_section" id="vision-and-mision">
          <div className="vision_mision_inner">
            <div className="vision_box">
              <div className="vision_mision_icon">
                <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.1154 23.678C49.7395 27.3525 51.2902 31.8439 51.2902 36.6931C51.2902 49.0749 41.2168 59.1483 28.836 59.1483C16.4542 59.1483 6.38078 49.0749 6.38078 36.6931C6.38078 24.3123 16.4542 14.2389 28.836 14.2389C33.6852 14.2389 38.1766 15.7896 41.852 18.4136L46.4104 13.8553C41.5411 10.0995 35.4473 7.85809 28.836 7.85809C12.9357 7.85809 0 20.7938 0 36.6931C0 52.5943 12.9357 65.5291 28.836 65.5291C44.7363 65.5291 57.671 52.5943 57.671 36.6931C57.671 30.0827 55.4296 23.9889 51.6748 19.1196L47.1154 23.678Z" fill="white"/>
                  <path d="M43.7528 27.0408L40.3826 30.411C41.4023 32.2793 41.9821 34.4193 41.9821 36.6933C41.9821 43.9427 36.0844 49.8403 28.835 49.8403C21.5856 49.8403 15.6879 43.9427 15.6879 36.6933C15.6879 29.4438 21.5856 23.5462 28.835 23.5462C31.1089 23.5462 33.2499 24.1268 35.1182 25.1476L38.4884 21.7773C35.7084 19.9741 32.3956 18.9227 28.835 18.9227C19.0208 18.9227 11.0645 26.8791 11.0645 36.6933C11.0645 46.5084 19.0208 54.4647 28.835 54.4647C38.6501 54.4647 46.6055 46.5084 46.6055 36.6933C46.6055 33.1336 45.5551 29.8208 43.7528 27.0408Z" fill="white"/>
                  <path d="M36.4375 36.6935C36.4375 40.8922 33.0338 44.2959 28.836 44.2959C24.6374 44.2959 21.2336 40.8922 21.2336 36.6935C21.2336 32.4948 24.6374 29.092 28.836 29.092C33.0338 29.092 36.4375 32.4948 36.4375 36.6935Z" fill="white"/>
                  <path d="M65.3173 6.68691L60.2414 5.15246L58.9882 0L49.6734 8.81734L50.6836 12.9663L27.8965 35.7534L29.7763 37.6332L52.8581 14.5524L56.0044 15.5033L65.3173 6.68691Z" fill="white"/>
                </svg>

              </div>
              <div className="heading">Our Vision</div>
              <p>We are committed to impart to our students, leading knowledge and experience for developing appropriate attitude, skills and competency to meet the corporate and organizational requirements.</p>
            </div>
            <div className="vision_box mision_box">
              <div className="vision_mision_icon">
                <svg width="63" height="36" viewBox="0 0 63 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35.8318 9.84021C40.8729 12.0191 44.4016 17.0349 44.4016 22.8757C44.4016 28.7172 40.8729 33.7322 35.8318 35.9119C53.637 33.9167 61.9844 22.8757 61.9844 22.8757C61.9844 22.8757 53.637 11.8354 35.8318 9.84021Z" fill="white"/>
                  <path d="M16.0083 22.8762C16.0083 17.049 19.5201 12.0441 24.541 9.85592C7.07616 11.9009 0.00276184 22.8762 0.00276184 22.8762C0.00276184 22.8762 7.07616 33.8507 24.541 35.8965C19.5201 33.7083 16.0083 28.7034 16.0083 22.8762Z" fill="white"/>
                  <path d="M35.2109 18.6042C34.4703 18.6042 33.8704 18.0034 33.8704 17.2628C33.8704 16.5222 34.4703 15.9223 35.2109 15.9223C35.9515 15.9223 36.5523 16.5222 36.5523 17.2628C36.5523 18.0034 35.9515 18.6042 35.2109 18.6042ZM30.2027 26.5437C28.1771 26.5437 26.5349 24.9016 26.5349 22.876C26.5349 20.8505 28.1771 19.2083 30.2027 19.2083C32.2282 19.2083 33.8704 20.8505 33.8704 22.876C33.8704 24.9016 32.2282 26.5437 30.2027 26.5437ZM30.2027 13.4897C25.0183 13.4897 20.8164 17.6917 20.8164 22.876C20.8164 28.0595 25.0183 32.2623 30.2027 32.2623C35.3862 32.2623 39.5889 28.0595 39.5889 22.876C39.5889 17.6917 35.3862 13.4897 30.2027 13.4897Z" fill="white"/>
                  <path d="M13.9653 9.34864C14.8282 9.14512 15.7422 8.98224 16.7162 8.87129L10.1677 1.66133C9.2025 1.77642 8.27942 1.92907 7.39378 2.11112L13.9653 9.34864Z" fill="white"/>
                  <path d="M29.7215 0C29.3373 0 28.9581 0.00589802 28.5781 0.0109535V6.37659C29.0601 6.36648 29.537 6.34879 30.0299 6.34879C30.6407 6.34879 31.2348 6.36732 31.8305 6.38333V0.0278049C31.1336 0.0109534 30.4326 0 29.7215 0Z" fill="white"/>
                  <path d="M49.2565 2.29013L43.6603 7.88638C44.9132 8.18129 46.1155 8.51255 47.2737 8.87122L52.8753 3.26961C51.7034 2.92107 50.4963 2.59339 49.2565 2.29013Z" fill="white"/>
                </svg>
              </div>
              <div className="heading">Our Mission</div>
              <p>“The mission of IMSCD&R is to provide equal opportunity for quality education for students from diverse backgrounds, which will help to enrich themselves and make them responsible citizens of India and the world.”</p>
            </div>
          </div>
        </div>

        <div className="privacy_policyand_motto">
          <div className="privacy_policy_inner">
            <div className="mottoleft">
              <Image 
                src="/images/about/privacy-policy.webp"
                alt=""
                width={400}
                height={300}
              />
              <div className="motto_content">
                <div className="heading">
                  Quality Policy
                </div>
                <p>We are committed to impart to our students, leading knowledge and experience for developing appropriate attitude, skills and competency to meet the corporate and organizational requirements.</p>
              </div>
            </div>
            <div className="mottoleft mottoright">
              <Image 
                src="/images/about/ourmotto.webp"
                alt=""
                width={400}
                height={300}
              />
              <div className="motto_content">
                <div className="heading">
                  Our Motto
                </div>
                <div className="motto_quotes">
                  Believe, Become
                </div>
              </div>
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
