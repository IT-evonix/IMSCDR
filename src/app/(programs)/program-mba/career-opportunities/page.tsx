import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">Career opportunities after MBA</div>
      <div className="row flex-sm-row-reverse">
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
        <div className="col-md-6">
          <p>
            An MBA opens the door to diverse and rewarding career opportunities
            across industries. Graduates can pursue careers in Marketing,
            Finance, Human Resource Management, Operations, Business Analytics,
            Supply Chain Management, International Business, Consulting, and
            Entrepreneurship. Organizations in sectors such as banking,
            manufacturing, information technology, healthcare, retail,
            e-commerce, and hospitality actively recruit MBA professionals for
            managerial and leadership roles. Popular job profiles include
            Marketing Manager, Financial Analyst, HR Manager, Operations
            Manager, Business Development Manager, Project Manager, Supply Chain
            Manager, and Management Consultant. An MBA also equips students with
            strategic thinking, problem-solving, leadership, communication, and
            decision-making skills, making them valuable assets to
            organizations. Those with an entrepreneurial mindset can establish
            and successfully manage their own ventures. Additionally, MBA
            graduates may explore careers in academia, research, government
            organizations, public sector undertakings, and multinational
            corporations. Continuous learning, professional networking,
            internships, and industry certifications further enhance career
            growth and long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
