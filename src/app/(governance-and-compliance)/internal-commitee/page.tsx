import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  InternalCommitteeCommitteeColumns,
  InternalCommitteeCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Internal Complaint Committee"
        breadcrumbs={[{ label: "Internal Complaint Committee" }]}
      />
      <div className="fullwidth_page">
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members</div>
          </div>
          <Table columns={InternalCommitteeCommitteeColumns} data={InternalCommitteeCommitteeMembers} />
        </div>
      </div>
      </div>
    </section>
  );
}
