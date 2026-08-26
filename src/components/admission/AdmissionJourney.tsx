"use client";

import AdmissionPhase from "./AdmissionPhase";
import { admissionJourneyData } from "@/data/admissionData";

const AdmissionJourney = () => {
  return (
    <section className="admission-journey">

      <div className="container">

        {/* Heading */}

        <div className="section-heading">

          <span className="section-badge">
            Admission Process
          </span>

          <h2>
            Admission Journey
          </h2>

          <p>
            Follow the complete admission process step-by-step from CET
            Registration to Final Seat Allotment.
          </p>

        </div>

        {/* Phases */}

        <div className="journey-wrapper">

          {admissionJourneyData.map((phase) => (
            <AdmissionPhase
              key={phase.id}
              phase={phase}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default AdmissionJourney;