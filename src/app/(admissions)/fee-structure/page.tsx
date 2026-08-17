import React from "react";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">Fee Structure</div>
      <div className="fee_structure_main">

        <div className="feetabboxmain">
          <div className="feetabbox">
            <div className="heading">
              FRA Approved <br /> Fee 2026-2027
            </div>
          </div>
          <div className="feetabbox">
            <div className="heading">
              FRA Approved <br /> Fee 2025-2026
            </div>
          </div>
          <div className="feetabbox">
            <div className="heading">
              CAP & Against <br /> CAP / Management <br /> & NRI Seats Fees
            </div>
          </div>
          <div className="feetabbox">
            <div className="heading">
              Fee Proposal <br /> 2026 - 2027
            </div>
          </div>
        </div>

        <div className="fee_structure_inner">
          <div className="fee_structure_heading">
            Fee Structure 2026 - 2027 (Approved by FRA)
          </div>
          <div className="fee_structure_content">
            <div className="fee_structure_box">
              <div className="course_name">MBA-I</div>
              <div className="fee_text">1,45,500</div>
              <p>Per Year</p>
            </div>
            <div className="fee_structure_box">
              <div className="course_name" style={{background:"#44ADE2"}}>MBA-I</div>
              <div className="fee_text">1,45,500</div>
              <p>Per Year</p>
            </div>
            <div className="fee_structure_box">
              <div className="course_name" style={{background:"#F05A94"}}>MBA-I</div>
              <div className="fee_text">1,45,500</div>
              <p>Per Year</p>
            </div>
            <div className="fee_structure_box">
              <div className="course_name" style={{background:"#FFC233"}}>MBA-I</div>
              <div className="fee_text">1,45,500</div>
              <p>Per Year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
