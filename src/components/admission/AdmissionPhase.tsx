import Image from "next/image";
import AdmissionStep from "./AdmissionStep";
import { AdmissionPhaseType } from "@/data/admissionData";

interface AdmissionPhaseProps {
  phase: AdmissionPhaseType;
}

const AdmissionPhase = ({ phase }: AdmissionPhaseProps) => {
  return (
    <section className="phase-card">

      {/* Ribbon */}

      <div
        className="phase-header"
        style={{ background: phase.color }}
      >
        <div className="phase-left">

          <Image
            src={phase.phaseIcon}
            alt={phase.title}
            width={26}
            height={26}
          />

          <span>{phase.phase}</span>

        </div>

        <div className="phase-title">
          {phase.title}
        </div>

      </div>

      {/* Timeline */}

      <div className="phase-steps">

        {phase.steps.map((step, index) => (
          <div className="phase-item" key={step.id}>
            <AdmissionStep
              step={step}
              color={phase.color}
            />

            {index !== phase.steps.length - 1 && (
              <div
                className="phase-connector"
                style={{
                  background: `linear-gradient(to right, ${phase.color}, transparent)`,
                }}
              >
                <span></span>
              </div>
            )}
          </div>
        ))}

      </div>

    </section>
  );
};

export default AdmissionPhase;