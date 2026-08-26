import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  antiRaggingSqualColumns,
  antiRaggingSqualMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Anti-Ragging Squad"
        breadcrumbs={[{ label: "Anti-Ragging Squad" }]}
      />
      <div className="fullwidth_page">
        <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Members </div>
          </div>
          <Table columns={antiRaggingSqualColumns} data={antiRaggingSqualMembers} />
        </div>
      </div>
      </div>
    </section>
  );
}
