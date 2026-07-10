import ApprovalList from "@/components/abouttab/ApprovalList";
import InnerpageBanner from "@/components/InnerpageBanner";
import { approvalData } from "@/data/approvalData";

export default function Page() {
  return (
    <div>
      <InnerpageBanner
        title="Governance & Compliance"
        breadcrumbs={[{ label: "Director’s Message" }]}
      />
      <ApprovalList
        title="Mandatory Disclosure"
        data={approvalData.mandatoryDisclosure}
      />
    </div>
  );
}
