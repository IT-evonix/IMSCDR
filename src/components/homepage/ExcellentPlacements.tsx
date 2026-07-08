import React from "react";
import Image from "next/image";

const ExcellentPlacements = () => {
  return (
    <section className="excellent_placements_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading text-center excellent_heading mb-3 mb-sm-5">
              Excellent Placements
            </div>
          </div>
        </div>
        <div className="row" style={{ position: "relative" }}>
          <div className="col-lg-12">
            <div className="excellent_placements_inner">
              <div className="excell_bluebox">
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <b>
                      IMSCDR, BPHES Ahilyanagar has established itself as one of the
                      leading management institutes, with top-class faculty
                    </b>
                  </div>
                  <div className="col-lg-12">
                    Our students are exposed to challenging research-based
                    education along with a variety of cultural, sport and
                    organizational activities. In this era of knowledge,
                    companies know the value of talent and of Innovation. We
                    invite all such corporations, working in the forefront of
                    different verticals to visit IMS for recruitment.
                  </div>
                </div>
              </div>
              <div className="excell_redbox">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="placement_whitebox">
                      <div className="row">
                        <div className="col-lg-12 mb-3">
                          <Image
                            src="/images/home/placement_cap.png"
                            alt="Excellent-img"
                            width={1200}
                            height={600}
                            className="img-fluid"
                          />
                        </div>
                        <div className="PlacementsHead">MBA</div>
                        <div className="subheading">
                          <span>(85% Placement)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="placement_whitebox">
                      <div className="row">
                        <div className="col-lg-12 mb-3">
                          <Image
                            src="/images/home/placement_cap.png"
                            alt="Excellent-img"
                            width={1200}
                            height={600}
                            className="img-fluid"
                          />
                        </div>
                        <div className="PlacementsHead">MCA</div>
                        <div className="subheading">
                          <span>(87% Placement)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="excell_girlbox">
                <Image
                  src="/images/home/excellent_img.webp"
                  alt="Excellent-img"
                  width={1200}
                  height={600}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellentPlacements;
