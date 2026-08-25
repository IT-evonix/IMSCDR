
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
          <div className="heading">Cultural Activities & Flagship Events</div>
          <div className="row">
            <div className="col-md-6">
              <p className="infrapara">
                IMSCDR organizes a variety of academic, cultural, management, and technical events that promote experiential learning and holistic student development. <span>Management Games</span> offers competitions such as Ad-Mad, HR Team Building, Mock Stock, Brand Wagon, and the <span>Best Manager</span> contest to enhance leadership, teamwork, creativity, and decision-making skills. <span>Fusion</span> follows a similar format, featuring the Best Intern competition. Aagneyum is an inter-collegiate event that provides undergraduate students with a platform to showcase their talents and management skills. <span>IT Waves</span> encourages creativity and teamwork through activities like poster presentations, team games, board decoration, and dance. <span>Fest Der Tech</span> develops technical and problem-solving skills through competitions in coding, website development, C programming, and aptitude. The <span>Elevator Pitch</span> competition challenges students to present innovative business ideas in just 100 seconds, fostering entrepreneurship, confidence, and effective communication.
              </p>
            </div>
            <div className="col-md-6">
              <div className="career_opportunities_images">
                <div className="career_opportunities_img">
                  <Image
                    src="/images/program/career_opportunities1.webp"
                    alt="Students"
                    width={400}
                    height={250}
                    className="img-fluid"
                  />
                </div>
                <div className="logobox_img">
                  <Image
                    src="/images/home/black_logo.webp"
                    alt="Students"
                    width={200}
                    height={150}
                    className="img-fluid"
                  />
                </div>
                <div className="career_opportunities_img">
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
        </div>  
  );
};

export default page;
