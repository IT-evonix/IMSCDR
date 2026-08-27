import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  antiRaggingCommitteeColumns,
  antiRaggingCommitteeMembers,
} from "@/data/tablemembers";


export default function AntiRaggingCommitteePage() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Anti Ragging Committee"
        breadcrumbs={[{ label: "Anti Ragging Committee" }]}
      />
      <div className="fullwidth_page">
        <div className="tablemain_section">
          <div className="container">
            <div className="mb-4">
              <div className="heading text-center">Committee Members</div>
            </div>
            <Table columns={antiRaggingCommitteeColumns} data={antiRaggingCommitteeMembers} />
          </div>
        </div>
      </div>
    </section>
  );
}

