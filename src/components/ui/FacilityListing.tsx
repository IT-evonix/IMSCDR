"use client";

import React from "react";
import Image from "next/image";

import { FacilityItem } from "@/data/hostelFacilities";

interface FacilityGridProps {
  data: FacilityItem[];
  className?: string;
}

const FacilityGrid: React.FC<FacilityGridProps> = ({
  data,
  className = "",
}) => {
  return (
    <div className="facilities_listing_main">
      <div className={`facility-grid ${className}`}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`facility-card ${
              item.fullWidth ? "facility-card-full" : ""
            }`}
          >
            <div className="facility-icon">
              <Image src={item.icon} alt={item.title} width={60} height={60} />
            </div>

            <div className="facility-content">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityGrid;
