import Image from "next/image";
import ApprovalList from "@/components/abouttab/ApprovalList";
import { approvalData } from "@/data/approvalData";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="research_journalmain">
        <div className="aboutsec_inner">
          <div className="aboutus_left">
            <Image
              src="/images/research/research_journa.webp"
              alt="Banner"
              width={1200}
              height={700}
              className="img-fluid"
            />
          </div>
          <div className="aboutus_right">
            <div className="heading">
              Indian Journal Of Current Trends In Management Science
            </div>
            Institute also invites and publishes research papers in institute
            journal Indian Journal of Current trends in Management science”
            promoting research across the country. Faculty members are motivated
            about publication of research papers in reputed journals. The
            journal is published Bi-Annually in moth of April and August every
            year.
          </div>
        </div>
      </div>
      <div className="fee_structure_pdf mt-5">
        <ApprovalList
          title="AICTE Approvals"
          data={approvalData.researchJournal}
        />
      </div>
    </div>
  );
};

export default page;
