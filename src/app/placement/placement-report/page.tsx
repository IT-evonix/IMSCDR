// import React from "react";
// import Image from "next/image";

// const page = () => {
//   return (
//     <div className="innerpagerightside">
//       <div className="row">
//         <div className="col-lg-12 heading">Placement Report</div>
//       </div>
//     </div>
//   );
// };

// export default page;

import Table from "@/components/ui/Table";
import {
  PlacementStatisticsMBAColumns,
  PlacementStatisticsMBAProgramme,
  PlacementStatisticsMCAColumns,
  PlacementStatisticsMCAProgramme,
} from "@/data/tablemembers";

export default function AntiRaggingCommitteePage() {
  return (
    <section className="innerpagerightside">
      <div className="tablemain_section">
        <div className="container">
          <div className="mb-4">
            <div className="col-lg-12 heading">Placement Statistics Data </div>
          </div>
          <div className="">
            <div className="subheading mb-2">MBA Programme</div>
            <Table
              columns={PlacementStatisticsMBAColumns}
              data={PlacementStatisticsMBAProgramme}
            />
          </div>
          <div className="mt-5">
            <div className="subheading mb-2">MCA Programme</div>
            <Table
              columns={PlacementStatisticsMCAColumns}
              data={PlacementStatisticsMCAProgramme}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
