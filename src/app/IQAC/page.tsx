import InnerpageBanner from "@/components/InnerpageBanner";
import Image from "next/image";
import Table from "@/components/ui/Table";
import {
  iqacCommitteeColumns,
  iqacCommitteeMembers,
} from "@/data/tablemembers";
import ApprovalList from "@/components/abouttab/ApprovalList";
import { approvalData } from "@/data/approvalData";
const page = () => {
  return (
    <div>
      <InnerpageBanner
        title="IQAC"
        breadcrumbs={[
          {
            label: "IQAC",
          },
        ]}
      />
      <div className="innerpagewrapper">
        <div className="container">
          <section className="zigzag-section">
            <div className="zigzag-row">
              <div className="parallaximg_image">
                <Image
                  className="img-fluid"
                  src="/images/about/aicte-sspu.webp"
                  alt="about imscdr"
                  width={750}
                  height={670}
                />
              </div>
              <div className="content-box">
                <div className="heading" style={{ lineHeight: "36px" }}>
                  Internal Quality Assurance Cell (IQAC)
                </div>
                <p className="p-0 m-0">
                  The quality policy of IMS is – We are committed to impart to
                  our students, leading knowledge and experience for developing
                  appropriate attitude, skills and competency to meet the
                  corporate and organizational requirements. To live up to our
                  policy we at IMS have established an IQAC. The IQAC is meant
                  for planning, guiding and monitoring Quality Assurance and
                  Quality Enhancement activities of the institute. IMS has a
                  very structured IQAC cell with an aim to maintain detailed
                  records of various activities, stakeholders, statutory
                  requirements etc. as are required for verification, reference,
                  audit and quality improvements.
                </p>
              </div>
            </div>
          </section>

          <div className="tablemain_section">
            <div className="container">
              <div className="mb-4">
                <div className="heading text-center">
                  Composition of the IQAC
                </div>
              </div>

              <Table
                columns={iqacCommitteeColumns}
                data={iqacCommitteeMembers}
              />
            </div>
          </div>

          <div className="pdf_section">
            <div className="heading text-center">
              NAAC Cycle - 3 Revised SSR
            </div>
            <div className="fee_structure_pdf">
              <ApprovalList
                title="AICTE Approvals"
                data={approvalData.NAACCycle3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
