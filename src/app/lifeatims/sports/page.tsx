
import React from "react";
import ImageGallery from "@/components/ui/ImageGallery";
import { galleryData2 } from "@/data/galleryData";
import Image from "next/image";


const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="row">
        <div className="col-md-7">
          <div className="subheading">
            Sports & Recreation
          </div>
          <div className="infrapara">
            At IMS-CDR, physical fitness and recreational activities are considered integral to the overall development of students. The institute provides excellent sports facilities that encourage students to participate in both competitive and recreational activities.
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
         The campus features a well-equipped Sports Complex with facilities for:
        </div>
        <ImageGallery images={galleryData2} />
          <div className="infrapara mt-4">
            Students actively utilize these facilities during their leisure time, promoting a healthy lifestyle, teamwork, discipline, and sportsmanship. The institute also encourages participation in university-level and intercollegiate sports competitions.
          </div>
      </div>
    </div>
  );
};

export default page;
