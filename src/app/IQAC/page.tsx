// import InnerpageBanner from "@/components/InnerpageBanner";
// import Table from "@/components/ui/Table";
// import {
//   iqacCommitteeColumns,
//   iqacCommitteeMembers,
// } from "@/data/tablemembers";

// export default function GovernanceGoverningBody() {
//   return (
//     <section className="innerpage-wrapper">
//       <InnerpageBanner
//         title="IQAC"
//         breadcrumbs={[{ label: "IQAC" }]}
//       />
//       <div className="tablemain_section">
//         <div className="container">
//           <div className="mb-4">
//             <div className="heading text-center">Internal Quality Assurance Cell (IQAC)</div>
//           </div>
//           <Table columns={iqacCommitteeColumns} data={iqacCommitteeMembers} />
//         </div>
//       </div>
//     </section>
//   );
// }



import InnerpageBanner from "@/components/InnerpageBanner";
// import React from "react";

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
            <div className="heading">Coming Soon</div>
        </div>
      </div>
    </div>
  );
};

export default page;

