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
                The Governing Body of the B. P. H. E Society is responsible for the overall policy setting and management of each educational Institute which is established under the society, including IMS. The Governing body consists of senior academicians and professionals. The Chairman of B. P. H. E society is Dr. Sanjeevan S Arsud and the Secretary is Mr. Vishal Barnabas.
            </p>
          </div>
          <Table columns={collegeCommitteeColumns} data={collegeCommitteeMembers} />
        </div>
      </div>
    </section>
  );
}
