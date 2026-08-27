import InnerpageBanner from "@/components/InnerpageBanner";
import React from "react";

const page = () => {
  return (
    <div>
    <InnerpageBanner
        title="Academic Calendar"
        breadcrumbs={[
          {
            label: "Academic Calendar",
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
