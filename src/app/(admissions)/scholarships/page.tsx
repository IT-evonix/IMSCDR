import Table from "@/components/ui/Table";

import {
  scholarshipColumns,
  scholarshipHeaderGroups,
  scholarshipData,

  scholarshipColumns2,
  scholarshipHeaderGroups2,
  scholarshipData2,
} from "@/data/scholarshipData";

export default function ScholarshipsPage() {
  return (
    <div className="innerpagerightside">
      <div className="heading">Fee Structure & Percentage of Scholarship Receivable for the Academic Year 2026 - 2027</div>
      <div className="scholarships_page mb-5">
        <Table
          columns={scholarshipColumns}
          headerGroups={scholarshipHeaderGroups}
          data={scholarshipData}
        />
      </div>

      <div className="scholarships_page">
        <Table
          columns={scholarshipColumns2}
          headerGroups={scholarshipHeaderGroups2}
          data={scholarshipData2}
        />
      </div>
    </div>
  );
}
