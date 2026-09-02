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
                Internship and Industry Connect
              </div>
              <p>
                As a part of the curriculum of MBA , MCA, BBA and BCA students have to undergo practical work experience training in the company. The training program helps the students to build strong practical skills by implementing theoretical knowledge gained during academic programs of the curriculum. Students take up project work under the guidance of a faculty member of the batch. The university appoints external experts to evaluate the project work by conducting viva voce examination for the students.
              </p>
              <p>
                This year IMS has been registered under National Apprentice Training Scheme (NATS) which is a central government body , Under the NATS scheme , the top 1000 companies ,Global and National stature are bounded by the policies to hire students as apprentice initially for a year with salary and then continue them subject to the students performance. The Institute has a MoU with Bajaj CPBFI which not only provides internships but also ensures them full time job after internship/training completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
