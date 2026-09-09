

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
            <p className="text-center subheading">Mandatory Disclosure for the Academic Year 2026–2027 is currently under process. It will be uploaded as soon as the admission process is completed.</p>
        </div>
      </div>
    </div>
  );
};

export default page;