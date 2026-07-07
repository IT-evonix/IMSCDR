import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";
const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">Specializations</div>
      <div className="specializations_page">
        <div className="specializations_inner">

          <div className="specializations_box majorbox">
            <div className="majorminor_box">
              <div className="specialization_icon">
                <GraduationCap size={50} />
              </div>
              <div className="subheading">Major Specializations</div>
              <p>
                Our major specializations form the strategic core of your
                management expertise.
              </p>
              <ul>
                <li>Marketing Management (MKT)</li>
                <li>Financial Management (FIN)</li>
                <li>Human Resources Management (HRM)</li>
                <li>Operations & Supply Chain Management (OSCM)</li>
                <li>Business Analytics (BA)</li>
              </ul>
            </div>
          </div>

          <div className="specializations_box minorbox">
            <div className="majorminor_box">
              <div className="specialization_icon">
                <BookOpen size={45} />
              </div>
              <div className="subheading">Minor Specializations</div>
              <p>
                Our minor specializations broaden your perspective and add cross-functional versatility.
              </p>
              <ul>
                <li>Rural & Agribusiness Management (RABM)</li>
                <li>Pharma & Healthcare Management (PHM)</li>
                <li>Tourism & Hospitality Management (THM)</li>
                <li>International Business Management (IB)</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
