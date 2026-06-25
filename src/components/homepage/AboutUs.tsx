import React from "react";
import Image from "next/image";
import ExploreBtn from "../ui/ExploreBtn";
// import Link from "next/link";

const AboutUs = () => {
  return (
    <section>
      <div className="aboutus_section">
        <div className="container">
          <div className="aboutsec_inner">
            <div className="aboutus_left">
              <Image
                src="/images/home/homeb-aboutimg.webp"
                alt="Banner"
                width={1200}
                height={600}
                className="img-fluid"
              />
            </div>
            <div className="aboutus_right">
              <div className="aboutus_right_inner">
                <div className="subheading">
                  About Institute of Management Studies
                </div>
                <div className="heading">
                  Bhaskar Pandurang Hivale Education (B.P.H.E.)
                </div>
                <p>
                  The Bhaskar Pandurang Hivale Education (B.P.H.E.) Society’s
                  Institute of Management Studies, Career Development and
                  Research (IMS) is a premier management institute conducting
                  various quality programmes in Management and Information
                  Technology in Ahmednagar.{" "}
                </p>
                <p>
                  IMS is affiliated to the Savitribai Phule Pune University,
                  Pune and is recognized by the All India Council for Technical
                  Education (AICTE), New Delhi. IMS has reputation for novel and
                  need based courses, visionary leadership, well qualified and
                  experienced faculty...
                </p>
                <ExploreBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
