import ApprovalList from "@/components/abouttab/ApprovalList";
import { approvalData } from "@/data/approvalData";
import React from "react";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">Fee Structure</div>
      <div className="fee_structure_main">
        <div className="feetabboxmain">
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
              <div className="course_name" style={{ background: "#44ADE2" }}>
                MBA-II
              </div>
              <div className="fee_text">1,43,000</div>
              <p>Per Year</p>
            </div>
            <div className="fee_structure_box">
              <div className="course_name" style={{ background: "#F05A94" }}>
                MCA-I
              </div>
              <div className="fee_text">1,09,500</div>
              <p>Per Year</p>
            </div>
            <div className="fee_structure_box">
              <div className="course_name" style={{ background: "#FFC233" }}>
                MCA-II
              </div>
              <div className="fee_text">98,000</div>
              <p>Per Year</p>
            </div>
          </div>
        </div>
        <hr className="sepratorline" />
        <div
          className="fee_structure_inner fee_structure_inner1"
        >
          <div className="fee_structure_content">
            <div className="fee_structure_box">
              <div className="course_name">BBA-I</div>
              <div className="fee_text">40,000</div>
              <p>Per Year</p>
            </div>
            <div className="fee_structure_box">
              <div className="course_name" style={{ background: "#44ADE2" }}>
                BBA-II
              </div>
              <div className="fee_text">38,500</div>
              <p>Per Year</p>
            </div>
            <div className="lastcolumn_row">
              <div className="fee_structure_box">
                <div className="course_name" style={{ background: "#F05A94" }}>
                  BCA-I
                </div>
                <div className="fee_text">45,500</div>
                <p>Per Year</p>
              </div>
              <div className="fee_structure_box">
                <div className="course_name" style={{ background: "#FFC233" }}>
                  BCA-II
                </div>
                <div className="fee_text">44,000</div>
                <p>Per Year</p>
              </div>
              <div className="fee_structure_box">
                <div className="course_name" style={{ background: "#90c04b" }}>
                  Ph.D
                </div>
                {/* <div className="fee_text">Ph.D</div> */}
                <p>Contact the Institute</p>
              </div>
            </div>
          </div>
          <div className="fee_structure_heading">
            Fee Structure 2026 - 2027 (As per S.P. Pune University Circulars)
          </div>
        </div>
        <div className="fee_structure_pdf">
          <ApprovalList
            title="AICTE Approvals"
            data={approvalData.feestructureims}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
