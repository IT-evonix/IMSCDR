import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  boardofcontrolCommitteeColumns,
  boardofcontrolCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Board of Control"
        breadcrumbs={[{ label: "Board of Control" }]}
      />
      <div className="fullwidth_page">
        <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members</div>
          </div>
          <Table columns={boardofcontrolCommitteeColumns} data={boardofcontrolCommitteeMembers} />
        </div>
      </div>
      </div>
    </section>
  );
}
