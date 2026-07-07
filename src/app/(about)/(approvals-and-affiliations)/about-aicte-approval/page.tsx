import ApprovalList from "@/components/abouttab/ApprovalList";
import { approvalData } from "@/data/approvalData";

export default function Page() {
  return (
    <ApprovalList
      title="AICTE Approval"
      data={approvalData.aicte}
    />
  );
}