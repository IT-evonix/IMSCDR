import InnerpageBanner from "@/components/InnerpageBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerpageBanner
        title="Student Corner"
        breadcrumbs={[
          {
            label: "Student Corner",
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
