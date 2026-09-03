import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="lifeat_campus_main">
        <div className="aboutsec_inner">
          <div className="aboutus_left">
            <Image
              src="/images/campus/campus-overview.webp"
              alt="Banner"
              width={1200}
              height={900}
              className="img-fluid"
            />
          </div>
          <div className="aboutus_right">
            <div className="aboutus_right_inner">
              <div className="subheading mb-1">
                Placement Overview
              </div>
              <p>
                The IMS  Placement cell works to ensure that our students are well equipped to take up the challenges of the professional environment. The main objective of the Placement Cell is to bridge the gap between the stringent competition in the industry and talent available in the college. Not only does the Placement Cell offer training programs to students to develop various significant skills, but also facilitates the process of recruitment for all the eligible students.
              </p>
              <p>
                The placement cell is successful in maintaining high placement statistics over the years and the fact that our students bear the recession blues with record-breaking placements itself is a testimony to their quality. The collaboration with the companies has in fact made much more easier for the institute to ensure good placements for the students of MBA, MCA, BBA and BCA. Last but not the least , the presence of  MIDC’s in Ahmednagar, Kedgaon,Supa and Newasa has boosted the scope of  placement opportunites for our students and the institute at large.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
