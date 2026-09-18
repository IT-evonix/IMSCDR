import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="row">
        <div className="col-lg-12 heading">Training & Placement Cell</div>
      </div>
      <div className="row">
        <div className="col-lg-12 mb-4 mb-md-5">
          The IMS Placement Cell  ensures  its commitment to provide 100 percent placement assistance to the students . With the rising competition in the corporate world and the challenges with respect to the jobs , the placement cell works and strives for the students placements . The Training and Placement Cell is to guide students to choose right career and to give knowledge, skill, and aptitude and meet the manpower requirements of the Industry.
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="place_training_box">
            <div className="row">
              <div className="col-lg-12 subheading mb-3">Motive</div>
              <div className="col-lg-12">
                <span>To assist students to develop/clarify their academic and career interests, and their short and long-term goals through individual counseling and group sessions.</span>
                <span>Coordinating with companies to learn about their requirements and recruitment procedures.</span>
                <span>Organizing pre-placement training/workshops/seminars for students.</span>
                <span>To assist students for industrial training.</span>
                <span>To assist students in obtaining placement in reputed companies.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="place_training_box" style={{backgroundColor:"#ffe6f4"}}>
            <div className="row">
              <div className="col-lg-12 subheading mb-3">Career Guidance</div>
              <div className="col-lg-12">
                <span>Inform students about the available job opportunities in government sectors and off campus drives.</span>
                <span>Arranging Motivational Talks.</span>
                <span>Conducting Psychometric Test.</span>
                <span>Conducting Expectation Management Workshops.</span>
                <span>Conducting Personality Development Programs.</span>
                <span>Conducting Skill Imbibing Programs.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-4">
          <div className="place_training_box" style={{backgroundColor:"#f8eee2"}}>
            <div className="row">
              <div className="col-lg-12 subheading mb-3">Training & Development</div>
              <div className="col-lg-6">
                <span>Keeping in view the industry requirements, the training curriculum is designed for preparing the students for entry-level executive positions.</span>
                <span>Arranging Motivational Talks.</span>
                <span>Personality Development.</span>
                <span>Communication Skills & Vocabulary.</span>
              </div>
              <div className="col-lg-6">
                <span>Resume Preparation & Email Writing.</span>
                <span>Group Discussion.</span>
                <span>Interview Skills.</span>
                <span>Aptitude Training & Practice Tests.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
