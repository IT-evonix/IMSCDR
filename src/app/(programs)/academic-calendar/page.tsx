import InnerpageBanner from "@/components/InnerpageBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerpageBanner
        title="Faculty"
        breadcrumbs={[
          {
            label: "Academic Calendar",
          },
        ]}
      />
      <div className="heading">Academic Calendar</div>
    </div>
  );
};

export default page;
