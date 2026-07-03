import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  collegeCommitteeColumns,
  collegeCommitteeMembers,
} from "@/data/tablemembers";

export default function GovernanceGoverningBody() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="College Development Committee"
        breadcrumbs={[{ label: "College Development Committee" }]}
      />
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="heading text-center">Committee Member's</div>
            <p className="text-center">
                In accordance with the Maharashtra Public Universities Act (MPUA) 2016, Section 97 (1), IMS has constituted a College Development Committee. The working and authority of this committee is in accordance with and as stipulated under Section 97 (5) of the above said MPU Act 2016.
            </p>
          </div>
          <Table columns={collegeCommitteeColumns} data={collegeCommitteeMembers} />
        </div>
      </div>
    </section>
  );
}
