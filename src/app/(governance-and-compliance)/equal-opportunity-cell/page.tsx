import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  EqualOpportunityCellCommitteeColumns,
  EqualOpportunityCellCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Equal Opportunity Cell"
        breadcrumbs={[{ label: "Equal Opportunity Cell" }]}
      />
      <div className="fullwidth_page">
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members </div>
          </div>
          <Table columns={EqualOpportunityCellCommitteeColumns} data={EqualOpportunityCellCommitteeMembers} />
        </div>
      </div>
      </div>
    </section>
  );
}
