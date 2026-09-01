// import ApprovalList from "@/components/abouttab/ApprovalList";
// import InnerpageBanner from "@/components/InnerpageBanner";
// import { approvalData } from "@/data/approvalData";

// export default function Page() {
//   return (
//     <div>
//       <InnerpageBanner
//         title="Governance & Compliance"
//         breadcrumbs={[{ label: "Director’s Message" }]}
//       />
//       <div className="fullwidth_page">
//         <ApprovalList
//           title="Mandatory Disclosure"
//           data={approvalData.mandatoryDisclosure}
//         />
//       </div>
//     </div>
//   );
// }

import InnerpageBanner from "@/components/InnerpageBanner";
// import React from "react";

const page = () => {
  return (
    <div>
    <InnerpageBanner
        title="Mandatory Disclosure"
        breadcrumbs={[
          {
            label: "Mandatory Disclosure",
          },
        ]}
      />
      <div className="innerpagewrapper">
        <div className="container">
            {/* <div className="heading">Coming Soon</div> */}
            <p className="text-center subheading">Mandatory Disclosure for the Academic Year 2026–2027</p>
        </div>
      </div>
    </div>
  );
};

export default page;