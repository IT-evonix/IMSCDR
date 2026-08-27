import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  StudentGrievanceRedressalCommitteeColumns,
  StudentGrievanceRedressalCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Student Grievance Redressal Committee"
        breadcrumbs={[{ label: "Student Grievance Redressal Committee" }]}
      />
      <div className="fullwidth_page">
        <div className="tablemain_section">
          <div className="container">
            <div className="mb-4">
              <div className="heading text-center">Committee Members </div>
            </div>
            <Table columns={StudentGrievanceRedressalCommitteeColumns} data={StudentGrievanceRedressalCommitteeMembers} />
          </div>
        </div>
      </div>
    </section>
  );
}
