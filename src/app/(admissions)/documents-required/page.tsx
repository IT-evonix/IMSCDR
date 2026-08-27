import React from "react";
import Table from "@/components/ui/Table";
import {
  DocumentsRequiredColumns,
  DocumentsRequiredText,
} from "@/data/tablemembers";

const Page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">List Of Documents</div>
      <Table
        columns={DocumentsRequiredColumns}
        data={DocumentsRequiredText}
      />
      <div className="mt-4 subheading">Facilitation Center Officer Remark: The date on caste validity referring to caste certificate is 20/06/2025 but the actual date on caste certificate is 21/06/2025</div>
    </div>
  );
};

export default Page;
