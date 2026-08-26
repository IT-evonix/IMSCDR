import InnerpageBanner from "@/components/InnerpageBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerpageBanner
        title="Faculty"
        breadcrumbs={[
          {
            label: "Research & Innovation",
          },
        ]}
      />
      <div className="heading">Research & Innovation</div>
    </div>
  );
};

export default page;
