import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="overview_main">
        <div className="overview_inner pb-0">
          <div className="overview_left">
            {/* <div className="heading">Overview</div> */}
            <p className="m-0">
              The Master of Computer Applications (MCA) is a two-year, four-semester postgraduate programme affiliated with Savitribai Phule Pune University (SPPU) and designed as per the NEP 2020 framework. The programme equips students with strong theoretical foundations, practical skills, research orientation, and industry exposure in modern computing technologies.
              The curriculum emphasizes Outcome-Based Education (OBE), project-based learning, internships, MOOCs, and multidisciplinary electives to prepare graduates for leadership roles in the IT industry and higher research.
              The programme covers emerging technologies such as Artificial Intelligence, Machine Learning, Cloud Computing, Cyber Security, Data Science, Web Technologies, Software Engineering, Mobile Application Development, Deep Learning, and Enterprise Applications.
            </p>
          </div>
          <div className="overview_right">
            <div className="overview_rightinner">
              <div className="overview_right1">
                <Image
                  src="/images/program/mba-overview1.webp"
                  alt="Intake"
                  width={730}
                  height={700}
                  className="img-fluid w-100 h-auto"
                />
              </div>
              <div className="overview_right2">
                <span>Master in Computer</span> Administration Programme
              </div>
            </div>
            <div className="overview_left2">
              <Image
                src="/images/program/mba-overview2.webp"
                alt="Intake"
                width={650}
                height={974}
                className="img-fluid w-100 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="heading mb-2 d-none ">Specializations Offered</div>
      <div className="subheading m-0 d-none">
        The following specializations shall be offered 
      </div>
      <section className="specialization-section d-none">
        <div className="specialization_inner mt-2">
          <div className="left-box">
            <Image
              src="/images/program/Specializationsbg.webp"
              alt="Students"
              fill
              priority
              className="image"
            />
            <div className="overlay"></div>
            <div className="content">
              {/* <div className="subheading">Major Specializations</div>
              <p>
                Our major specializations form the strategic core of your
                management expertise.
              </p> */}
            </div>
          </div>
          <div className="right-box">
            <ul>
              <li>Marketing Management (MKT)</li>
              <li>Financial Management (FIN)</li>
              <li>Human Resources Management (HRM)</li>
              <li>Operations & Supply Chain Management (OSCM)</li>
              <li>Business Analytics (BA)</li>
              <li>Agri -Business Management (ABM)</li>
              <li>Pharma & Healthcare Management (PHM)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="specialization-section d-none">
        <div className="specialization_inner specialization_inner2">
          <div className="left-box">
            <Image
              src="/images/program/Specializationsbg-right.webp"
              alt="Students"
              fill
              priority
              className="image"
            />
            <div className="overlay"></div>
            <div className="content">
              {/* <div className="subheading">Minor Specializations</div>
              <p>
                Our minor specializations broaden your perspective and add
                cross-functional versatility.
              </p> */}
            </div>
          </div>
          <div className="right-box">
            <ul>
              <li>Rural & Agribusiness Management (RABM)</li>
              <li>Pharma & Healthcare Management (PHM)</li>
              <li>Tourism & Hospitality Management (THM)</li>
              <li>International Business Management (IB)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
