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
                {/* <div className="subheading">
                  About Institute of Management Studies
                </div> */}
                <div className="heading">
                  About BPHES IMSCDR
                </div>
                <p>
                  BPHES Institute of Management Studies, Career Development and Research (IMSCDR), Ahilyanagar, is a premier institute offering a range of education programs including MBA, MCA, BBA, BCA, and Ph.D. Affiliated to Savitribai Phule Pune University, recognized by AICTE, New Delhi, and NAAC Re-Accredited, we are also honored with the Best Institute Award from Savitribai Phule Pune University. With over 65% of our faculty holding Ph.D. degrees, we are known as one of the best management institutes in India, delivering education through experienced teachers, modern teaching methods, and strong industry connections. Our MBA with placement support, transparent governance, and student-first approach ensure your success remains our topmost priority.
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
