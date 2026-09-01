
import React from "react";
import ImageGallery from "@/components/ui/ImageGallery";
import { galleryData3 } from "@/data/galleryData";
import Image from "next/image";


const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="row">
        <div className="col-md-7">
          <div className="subheading">
           Creating Future Leaders
          </div>
          <div className="infrapara">
            Students of IMS-CDR consistently excel in academics, management competitions, research, sports, cultural activities, and community engagement. Their achievements reflect the institute's commitment to excellence in education and overall personality development.
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
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="subheading mb-3">
         Students regularly participate and achieve success in:
        </div>
        <ImageGallery images={galleryData3} />
        <div className="infrapara mt-4">
          The institute's continuous emphasis on experiential learning and industry interaction enables students to become competent professionals and responsible citizens.
          </div>
      </div>
    </div>
  );
};

export default page;
