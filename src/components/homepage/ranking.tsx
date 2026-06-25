import React from "react";
import Image from "next/image";

const Ranking = () => {
  return (
    <section className="ranking_main">
      <div className="container">
        <div className="ranking_wrapper">
          <div className="ranking_card">
            <div className="ranking_icon">
              <Image
                src="/images/home/ranking1.png"
                alt="BPHES IMSCDR"
                width={50}
                height={50}
                className="img-fluid"
              />
            </div>
            <div className="ranking_content">
              <h3>6000+</h3>
              <p className="students">Students</p>
            </div>
          </div>

          <div className="ranking_card">
            <div className="ranking_icon">
              <Image
                src="/images/home/ranking2.png"
                alt="BPHES IMSCDR"
                width={50}
                height={50}
                className="img-fluid"
              />
            </div>
            <div className="ranking_content">
              <h3>NAAC</h3>
              <p className="naac">Re-Accredited</p>
            </div>
          </div>

          <div className="ranking_card">
            <div className="ranking_icon">
              <Image
                src="/images/home/ranking3.webp"
                alt="BPHES IMSCDR"
                width={50}
                height={50}
                className="img-fluid"
              />
            </div>
            <div className="ranking_content">
              <h3>16+</h3>
              <p className="awards">Awards</p>
            </div>
          </div>

          <div className="ranking_card">
            <div className="ranking_icon">
              <Image
                src="/images/home/ranking4.webp"
                alt="BPHES IMSCDR"
                width={50}
                height={50}
                className="img-fluid"
              />
            </div>
            <div className="ranking_content">
              <h3>30+ Years</h3>
              <p className="experience">Teaching Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
