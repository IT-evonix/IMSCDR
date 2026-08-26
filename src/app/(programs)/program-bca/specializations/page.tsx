import React from "react";
import Image from "next/image";
// import { GraduationCap, BookOpen } from "lucide-react";
const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">Specializations</div>
      <section className="specialization-section">
        <div className="specialization_inner">
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
              <div className="subheading">Major Specializations</div>
              <p>
                Our major specializations form the strategic core of your management expertise. 
              </p>
            </div>
          </div>
          <div className="right-box">
            <ul>
              <li>Marketing Management (MKT)</li>
              <li>Financial Management (FIN)</li>
              <li>Human Resources Management (HRM)</li>
              <li>Operations & Supply Chain Management (OSCM)</li>
              <li>Business Analytics (BA)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="specialization-section">
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
              <div className="subheading">Minor Specializations</div>
              <p>
                Our minor specializations broaden your perspective and add cross-functional versatility.
              </p>
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
