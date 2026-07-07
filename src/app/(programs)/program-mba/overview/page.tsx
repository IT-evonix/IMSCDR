import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="overview_main">
        <div className="overview_inner">
          <div className="overview_left">
            <div className="heading">Overview</div>
            <p className="m-0">
              At BPHES IMSCDR, our Master of Business Administration program is
              driven by the mission to develop performing, productive, ethical,
              and value-driven leaders ready for diverse careers in a borderless
              business world. Grounded in the dynamic, industry-aligned
              curriculum of Savitribai Phule Pune University, we blend core
              management theory with functional specializations through
              activity-based learning and innovative pedagogy. Recognizing each
              student’s unique background and learning style, we focus on
              rigorous soft skills development and strong industry engagement
              from day one, all within a deeply supportive ecosystem of faculty,
              industry, and community stakeholders. Our commitment extends well
              beyond two years as an MBA with placement opportunities, that also
              aims to transform students into lifelong learners and committed
              corporate citizens.
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
                <span>Master of Business</span> Administration Program
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
    </div>
  );
};

export default page;
