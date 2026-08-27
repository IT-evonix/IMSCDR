"use client";
import React from "react";
import Image from "next/image";

import {
  Wifi,
  Monitor,
  Projector,
  Library,
  BookOpen,
  FlaskConical,
  BriefcaseBusiness,
  Presentation,
  Lightbulb,
} from "lucide-react";

interface Facility {
  title: string;
  icon: React.ElementType;
}

const facilities: Facility[] = [
  {
    title: "High-Speed Internet & Wi-Fi Campus",
    icon: Wifi,
  },
  {
    title: "Smart Classrooms",
    icon: Monitor,
  },
  {
    title: "LCD Projectors",
    icon: Projector,
  },
  {
    title: "Digital Library",
    icon: Library,
  },
  {
    title: "Departmental Library",
    icon: BookOpen,
  },
  {
    title: "Research Support",
    icon: FlaskConical,
  },
  {
    title: "Placement Assistance",
    icon: BriefcaseBusiness,
  },
  {
    title: "Seminar Hall",
    icon: Presentation,
  },
  {
    title: "Innovation & Project Development Support",
    icon: Lightbulb,
  },
];

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="div">
        <div className="innerpageabout_section">
          <div className="heading">Laboratories & Facilities</div>
          <p>
            The department provides a modern learning environment with
            state-of-the-art infrastructure.
          </p>
          <div className="row">
            <div className="col-lg-5">
              <div className="about_inner_img">
                <Image
                  className="img-fluid"
                  src="/images/program/academic-facilities.webp"
                  alt="about imscdr"
                  width={350}
                  height={350}
                />
                <div className="imscdr_box">
                  <h4 style={{ margin: "0px" }}>
                    Advanced Programming Laboratory
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              {/* <div className="subheading">Academic Facilities</div> */}
              <div className="facilities-wrapper">
                {facilities.map((facility) => {
                  const Icon = facility.icon;

                  return (
                    <div className="facility-item" key={facility.title}>
                      <div className="facility-icon">
                        <Icon size={25} strokeWidth={1.7} />
                      </div>
                      <div className="facility-content">
                        <h3>{facility.title}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
