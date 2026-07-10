import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  grievanceRedressalCommitteeColumns,
  agrievanceRedressalCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Grievance Redressal Committee"
        breadcrumbs={[{ label: "Grievance Redressal Committee" }]}
      />
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members </div>
          </div>
          <Table columns={grievanceRedressalCommitteeColumns} data={agrievanceRedressalCommitteeMembers} />
        </div>
      </div>
    </section>
  );
}
