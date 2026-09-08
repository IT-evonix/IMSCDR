import {
  mcaCurriculumColumns,
  mcaSem1Data,
  mcaSem2Data,
  mcaSem3Data,
  mcaSem4Data,
  mcaSummaryColumns,
  mcaSummaryData,
} from "@/data/mcaSyllabus";
import React from "react";
import Table from "@/components/ui/Table";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="mca_curriculum">
        <div className="mb-5">
          <div className="heading">Semister I</div>
          <Table columns={mcaCurriculumColumns} data={mcaSem1Data} />
        </div>
        <div className="mb-5">
          <div className="heading">Semister II</div>
          <Table columns={mcaCurriculumColumns} data={mcaSem2Data} />
        </div>
        <div className="mb-5">
          <div className="heading">Semister III</div>
          <Table columns={mcaCurriculumColumns} data={mcaSem3Data} />
        </div>
        <div className="mb-5">
          <div className="heading">Semister IV</div>
          <Table columns={mcaCurriculumColumns} data={mcaSem4Data} />
        </div>
        <div className="mb-0">
          <Table columns={mcaSummaryColumns} data={mcaSummaryData} />
        </div>
      </div>
    </div>
  );
};

export default page;
