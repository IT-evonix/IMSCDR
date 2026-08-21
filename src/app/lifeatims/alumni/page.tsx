import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="div">
        <div className="innerpageabout_section">
          <div className="row">
            <div className="col-md-5">
              <div className="about_inner_img">
                <Image
                  className="img-fluid"
                  src="/images/program/mba-overview1.webp"
                  alt="about imscdr"
                  width={350}
                  height={350}
                />
                <div className="imscdr_box">
                  <h4 style={{ margin: "0px" }}>More Than 6,000 Alumni </h4>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              {/* <div className="heading">About IMS</div> */}
              <p>
                IMS has a strong and growing network of more than 6,000 alumni
                who are working successfully in various fields across India and
                abroad. They serve as professionals, entrepreneurs,
                academicians, corporate leaders, and public servants. The
                institute maintains close connections with its alumni through
                regular interactions, alumni meets, mentoring sessions, and
                guest lectures. Alumni actively support the institute by guiding
                students, sharing industry knowledge, facilitating internships
                and placements, and inspiring future generations with their
                achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
