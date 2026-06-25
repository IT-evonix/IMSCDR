import React from "react";
// import { GraduationCap, Video, CircleHelp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
Link;

const CoursesStrip = () => {
  return (
    <div className="coursesstrip">
      <div className="container">
        <div className="educationinner">
          <div className="educationbox">
            <Link href="/">
              <div className="eduiconbox">
                <Image
                  src="/images/home/education-cap.png"
                  alt="Excellent-img"
                  width={65}
                  height={65}
                  className="img-fluid"
                />
              </div>
              <div className="educationtext">
                <h6>MBA</h6>
                <p>Master of Business Administration </p>
              </div>
            </Link>
          </div>
          <div className="educationbox">
            <Link href="/">
              <div className="eduiconbox">
                <Image
                  src="/images/home/education-cap.png"
                  alt="Excellent-img"
                  width={65}
                  height={65}
                  className="img-fluid"
                />
              </div>
              <div className="educationtext">
                <h6>MCA</h6>
                <p>Master In Computer Application </p>
              </div>
            </Link>
          </div>
          <div className="educationbox">
            <Link href="/">
              <div className="eduiconbox">
                <Image
                  src="/images/home/education-cap.png"
                  alt="Excellent-img"
                  width={65}
                  height={65}
                  className="img-fluid"
                />
              </div>
              <div className="educationtext">
                <h6>PH.D</h6>
                <p>Doctor of Philosophy </p>
              </div>
            </Link>
          </div>
          <div className="educationbox">
            <Link href="/">
              <div className="eduiconbox">
                <Image
                  src="/images/home/education-cap.png"
                  alt="Excellent-img"
                  width={65}
                  height={65}
                  className="img-fluid"
                />
              </div>
              <div className="educationtext">
                <h6>BBA/BCA</h6>
                <p>Program </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesStrip;
