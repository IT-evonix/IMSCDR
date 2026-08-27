import React from "react";
import Image from "next/image";

import {
  FolderCode,
  Monitor,
  // Projector,
  // Library,
  // BookOpen,
  FlaskConical,
  BriefcaseBusiness,
  // Presentation,
  Lightbulb,
  Code,
  CodeXml,
  Cloud,
  Server,
  Database,
  BarChart3,
  Brain,
  ShieldCheck,
  Smartphone,
  Settings,
  Network,
  UserRoundCog,
  GraduationCap,
  Search,
  Award,
  BookMarked,
} from "lucide-react";

interface Facility {
  title: string;
  icon: React.ElementType;
}

const facilities: Facility[] = [
  {
    title: "Software Developer",
    icon: FolderCode,
  },
  {
    title: "Full Stack Developer",
    icon: Code,
  },
  {
    title: "Java Developer",
    icon: CodeXml,
  },
  {
    title: "Python Developer",
    icon: Code,
  },
  {
    title: "Cloud Engineer",
    icon: Cloud,
  },
  {
    title: "DevOps Engineer",
    icon: Server,
  },
  {
    title: "Data Analyst",
    icon: BarChart3,
  },
  {
    title: "Business Intelligence Analyst",
    icon: BarChart3,
  },
  {
    title: "Machine Learning Engineer",
    icon: Brain,
  },
  {
    title: "AI Engineer",
    icon: Brain,
  },
  {
    title: "Cyber Security Analyst",
    icon: ShieldCheck,
  },
  {
    title: "Software Tester / QA Engineer",
    icon: Settings,
  },
  {
    title: "Database Administrator",
    icon: Database,
  },
  {
    title: "Mobile Application Developer",
    icon: Smartphone,
  },
  {
    title: "ERP Consultant",
    icon: Network,
  },
  {
    title: "System Analyst",
    icon: UserRoundCog,
  },
  {
    title: "IT Consultant",
    icon: Monitor,
  },
  {
    title: "Research Associate",
    icon: FlaskConical,
  },
  {
    title: "Project Manager",
    icon: BriefcaseBusiness,
  },
  {
    title: "Entrepreneur",
    icon: Lightbulb,
  },
];

const higherEducation: Facility[] = [
  {
    title: "Ph.D.",
    icon: GraduationCap,
  },
  {
    title: "Research Programmes",
    icon: Search,
  },
  {
    title: "International Certifications",
    icon: Award,
  },
  {
    title: "Specialized Professional Courses",
    icon: BookMarked,
  },
];

const page = () => {
  return (
    <div className="innerpagerightside career_opportunities_main">
      {/* <div className="heading">Career Opportunities</div> */}
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
                Graduates of the MCA programme are well prepared for careers in
                software development, data analytics, cloud computing, cyber
                security, artificial intelligence, and IT consulting.
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
          <div className="subheading">Higher Education</div>

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
    </div>
  );
};

export default page;
