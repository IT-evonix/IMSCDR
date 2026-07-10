import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  antiRaggingCommitteeColumns,
  antiRaggingCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Anti-Ragging And Discipline Cell"
        breadcrumbs={[{ label: "Anti-Ragging And Discipline Cell" }]}
      />
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members </div>
          </div>
          <Table columns={antiRaggingCommitteeColumns} data={antiRaggingCommitteeMembers} />
        </div>
      </div>
    </section>
  );
}
