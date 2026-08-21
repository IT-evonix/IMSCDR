import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="lifeat_campus_main">
        <div className="aboutsec_inner">
          <div className="aboutus_left">
            <Image
              src="/images/campus/campus-overview.webp"
              alt="Banner"
              width={1200}
              height={900}
              className="img-fluid"
            />
          </div>
          <div className="aboutus_right">
            <div className="aboutus_right_inner">
              <div className="subheading">
                Excellence in Management Education Since 1993
              </div>
              <p>
                At Bhaskar Pandurang Hivale Education Society's Institute of
                Management Studies, Career Development & Research (BPHES
                IMSCDR), Ahilyanagar, we believe that education is the
                foundation of transformation. For over three decades, the
                institute has been committed to academic excellence,
                industry-oriented education, innovation, research, and holistic
                student development.
              </p>
              <p>
                IMSCDR provides a dynamic learning environment supported by
                experienced faculty, state-of-the-art infrastructure, and strong
                industry collaborations. Through experiential learning,
                research, skill development, and value-based education, we
                empower students to discover their potential, develop
                professional competence, and become responsible leaders and
                future-ready professionals capable of making a meaningful impact
                on society.
              </p>
            </div>
          </div>
        </div>
        <div className="lifeat_states">
          <div className="lifeat_statebox">
            <div className="lifeat_stateicon">
              <Image
                src="/images/campus/icon1.webp"
                alt="Banner"
                width={50}
                height={57}
                className="img-fluid"
              />
            </div>
            <div className="lifeat_statetext">
              <span>30+</span>
              Years of Excellence
            </div>
          </div>
          <div className="verticalseparator"></div>
          <div className="lifeat_statebox">
            <div className="lifeat_stateicon">
              <Image
                src="/images/campus/icon2.webp"
                alt="Banner"
                width={60}
                height={60}
                className="img-fluid"
              />
            </div>
            <div className="lifeat_statetext">
              <span>SPPU </span>
              Affiliated
            </div>
          </div>
          <div className="verticalseparator"></div>
          <div className="lifeat_statebox">
            <div className="lifeat_stateicon">
              <Image
                src="/images/campus/icon3.webp"
                alt="Banner"
                width={55}
                height={55}
                className="img-fluid"
              />
            </div>
            <div className="lifeat_statetext">
              <span>NAAC </span>
              Re-Accredited
            </div>
          </div>
          <div className="verticalseparator"></div>
          <div className="lifeat_statebox">
            <div className="lifeat_stateicon">
              <Image
                src="/images/campus/icon4.webp"
                alt="Banner"
                width={50}
                height={50}
                className="img-fluid"
              />
            </div>
            <div className="lifeat_statetext">
              <span>AICTE </span>
              Approved
            </div>
          </div>
        </div>
        <div className="lifeat_marquee">
          <div className="marquee">
            <div className="marquee_content">
              Believe in Your Potential.{" "}
              <span>Become the Leader the Future Needs.</span>
            </div>
          </div>
        </div>
        <div className="privacy_policyand_motto lifeatcampus">
          <div className="privacy_policy_inner">
            <div className="mottoleft mottoright visionleft">
              <Image
                src="/images/campus/vision.webp"
                alt=""
                width={400}
                height={299}
              />
              <div className="motto_content">
                <div className="heading">Vision</div>
                <div className="motto_quotes">
                  To create world class Management Institute
                </div>
              </div>
            </div>
            <div className="mottoleft mottoright misionright">
              <Image
                src="/images/campus/mision.webp"
                alt=""
                width={400}
                height={299}
              />
              <div className="motto_content">
                <div className="heading">Mission</div>
                <div className="motto_quotes">
                  To provide equal opportunity for quality education for students from diverse backgrounds, which will help to enrich themselves and make them responsible citizens of India and the world
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-12">
                <div className="heading">Quality Policy</div>
                <p>We are committed to impart to our students leading knowledge and experience for developing appropriate attitude, skills and competency to meet the corporate and organisational requirements</p>
            </div>
        </div>

        <div className="ourvaluesmain">
          <Image
            src="/images/campus/valuesimg.webp"
            alt="Banner"
            width={1400}
            height={613}
            className="img-fluid"
          />
          <div className="ourvaluescontent">
              <div className="heading">Organisational Values</div>
              <div className="subheading" style={{ color: "#fff" }}>IMSCD&R practices following values:</div>
              <ul>
                <li>Inclusive Policy</li>
                <li>Fairness </li>
                <li>Fairness </li>
                <li>Secularism</li>
                <li>Rural and Local Focus</li>
                <li>Nation Building</li>
              </ul>
              <div className="subheading">
                Join an institution where academic excellence meets career success.
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
