import Image from "next/image";
import { AdmissionStepType } from "@/data/admissionData";

interface AdmissionStepProps {
  step: AdmissionStepType;
  color: string;
}

const AdmissionStep = ({ step, color }: AdmissionStepProps) => {
  return (
    <div className="admission-step">
      <div
        className="step-icon-wrapper"
        style={{ borderColor: color }}
      >
        <Image
          src={step.icon}
          alt={step.title}
          width={48}
          height={48}
          className="step-icon"
        />
      </div>

      <div className="step-content">
        <h4>{step.title}</h4>
        <p>{step.description}</p>
      </div>
    </div>
  );
};

export default AdmissionStep;