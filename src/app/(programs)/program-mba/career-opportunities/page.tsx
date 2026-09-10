import React from "react";
import Image from "next/image";

import {
  Megaphone,
  Landmark,
  Users,
  Settings,
  BarChart3,
  Truck,
  Globe2,
  BriefcaseBusiness,
  Rocket,
  UserRoundCheck,
  FolderKanban,
  Boxes,
  Handshake,
} from "lucide-react";

interface Facility {
  title: string;
  icon: React.ElementType;
}

const facilities: Facility[] = [
  {
    title: "Marketing",
    icon: Megaphone,
  },
  {
    title: "Finance",
    icon: Landmark,
  },
  {
    title: "Human Resource Management",
    icon: Users,
  },
  {
    title: "Operations",
    icon: Settings,
  },
  {
    title: "Business Analytics",
    icon: BarChart3,
  },
  {
    title: "Supply Chain Management",
    icon: Truck,
  },
  {
    title: "International Business",
    icon: Globe2,
  },
  {
    title: "Consulting",
    icon: BriefcaseBusiness,
  },
  {
    title: "Entrepreneurship",
    icon: Rocket,
  },
];

const higherEducation: Facility[] = [
  {
    title: "Marketing Manager",
    icon: Megaphone,
  },
  {
    title: "Financial Analyst",
    icon: BarChart3,
  },
  {
    title: "HR Manager",
    icon: UserRoundCheck,
  },
  {
    title: "Operations Manager",
    icon: Settings,
  },
  {
    title: "Business Development Manager",
    icon: Handshake,
  },
  {
    title: "Project Manager",
    icon: FolderKanban,
  },
  {
    title: "Supply Chain Manager",
    icon: Boxes,
  },
  {
    title: "Management Consultant",
    icon: BriefcaseBusiness,
  },
];

const page = () => {
  return (
    <div className="innerpagerightside career_opportunities_main">
      <div className="heading">Career opportunities after MBA</div>
      <div className="mca_career_opportunities_main">
        <div className="row flex-sm-row-reverse mb-5">
          <div className="col-md-6">
            <div className="careerimages_sticky">
              <div className="career_opportunities_images">
                <div className="career_opportunities_img ">
                  <Image
                    src="/images/program/career_opportunities1.webp"
                    alt="Students"
                    width={400}
                    height={250}
                    className="img-fluid"
                  />
                </div>
                <div className="logobox_img ">
                  <Image
                    src="/images/home/black_logo.webp"
                    alt="Students"
                    width={200}
                    height={150}
                    className="img-fluid"
                  />
                </div>
                <div className="career_opportunities_img ">
                  <Image
                    src="/images/program/career_opportunities2.webp"
                    alt="Students"
                    width={400}
                    height={250}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mca_career_opportunities">
              <p>
                A Master of Business Administration programme opens the door to diverse and rewarding career opportunities across industries. At BPHES IMSCDR, one of the leading MBA colleges in Ahmednagar, we prepare students for successful careers in:
              </p>
              <div className="col-lg-12">
                <div className="subheading">Career Roles</div>
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

      <div className="higher_education row">
        <div className="col-lg-12">
          <div className="subheading">Popular Job Profiles</div>

          <div className="facilities-wrapper">
            {higherEducation.map((facility) => {
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
      <p className="mt-3 mt-sm-5">An MBA in business management also equips students with strategic thinking, problem-solving, leadership, communication, and decision-making skills, making them valuable assets to organizations. Those with an entrepreneurial mindset can establish and successfully manage their own ventures. </p>
      <p>Additionally, MBA graduates across India may explore careers in academia, research, government organizations, public sector undertakings, and multinational corporations. With our MBA with placement support, continuous learning opportunities, professional networking, internships, and industry certifications, graduates are well-positioned for long-term career growth and success. </p>
    </div>
  );
};

export default page;
