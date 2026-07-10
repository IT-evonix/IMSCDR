import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  casteBasedCommitteeColumns,
  casteBasedCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="SC/ ST Cell and Caste Based Discrimination Committee"
        breadcrumbs={[{ label: "Women Development Cell" }]}
      />
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members </div>
          </div>
          <Table columns={casteBasedCommitteeColumns} data={casteBasedCommitteeMembers} />
        </div>
      </div>
    </section>
  );
}
