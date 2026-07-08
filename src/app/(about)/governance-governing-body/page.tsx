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
        title="Governing Body"
        breadcrumbs={[{ label: "Governing Body" }]}
      />
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Board of Governance </div>
            <p className="text-center">
                The Governing Body of the B.P.H.E. Society, led by Chairman Dr. Sanjeevan S. Arsud and Secretary Mr. Vishal Barnabas, provides strategic direction and oversight for all educational institutes established under the society, including IMSCDR. Comprising senior academicians and experienced professionals, the body is responsible for policy setting and guiding the overall management of the institute.
            </p>
          </div>
          <Table columns={governingBodyColumns} data={governingBodyMembers} />
        </div>
      </div>
    </section>
  );
}
