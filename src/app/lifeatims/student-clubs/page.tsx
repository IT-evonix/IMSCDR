import React from "react";
import Table from "@/components/ui/Table";
import {
  committeesColumns,
  committeesText,
} from "@/data/tablemembers";

const Page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">Student Committees & Clubs</div>
      <p className="mb-3">IMSCDR promotes leadership, teamwork, and holistic development through active student participation in various committees and clubs.</p>
      <Table
        columns={committeesColumns}
        data={committeesText}
      />
      <p className="mt-4">These committees provide students with valuable opportunities to develop leadership, communication, teamwork, and organizational skills beyond the classroom.</p>
    </div>
  );
};

export default Page;