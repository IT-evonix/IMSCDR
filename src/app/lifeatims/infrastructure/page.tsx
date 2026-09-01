import React from "react";
import ImageGallery from "@/components/ui/ImageGallery";
import { galleryData } from "@/data/galleryData";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="row">
        <div className="col-md-7">
          <div className="subheading">
            A Modern Campus Designed for Learning
          </div>
          <div className="infrapara">
            Spread <span>across 2.62 acres</span>, IMS-CDR offers a state-of-the-art campus
            that provides an ideal environment for academic excellence and
            holistic development. The institute is housed in a well-planned
             <span> three-storeyed academic building</span> along with an additional <span>SEED-C
            Building</span>, offering excellent facilities for teaching, learning,
            research, and student engagement.
          </div>
        </div>
        <div className="col-md-5">
          <Image
              src="/images/campus/infraline.webp"
              alt="infrastructure"
              width={400}
              height={212}
              className="img-fluid"
              style={{ opacity: 0.6 }}
            />
        </div>
        <div className="col-md-12">
          <div className="infrastructure_main">
            <Image
              src="/images/campus/infrastructure.webp"
              alt="infrastructure"
              width={1400}
              height={522}
              className="img-fluid"
            />
            <div className="infrastructure_main_content">
              IMS-CDR spread across 2.62 acres
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="subheading mb-3">
          The campus infrastructure includes:
        </div>
        <ImageGallery images={galleryData} />
      </div>
    </div>
  );
};

export default page;
