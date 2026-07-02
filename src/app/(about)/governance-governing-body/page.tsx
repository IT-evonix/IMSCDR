import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  governingBodyColumns,
  governingBodyMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Director’s Message"
        breadcrumbs={[{ label: "Director’s Message" }]}
      />
      <div className="tablemain_section">
        <div className="container">
          <div className="heading text-center">Governing Body</div>

          <Table columns={governingBodyColumns} data={governingBodyMembers} />
        </div>
      </div>
    </section>
  );
}
