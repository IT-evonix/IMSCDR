import AdmissionPhase from "@/components/admission/AdmissionPhase";
import { admissionProcess } from "@/data/admissionData";

export default function AdmissionProcessPage() {
  return (
    <section className="admission-process-page">
      <div className="container">
        {/* Page Heading */}

        <div className="admission-process-heading">
          <span className="sub-title">
            Admission Journey
          </span>

          <h1>
            Admission Process
          </h1>

          <p>
            Follow the admission process step by step.
            Complete each phase to successfully secure
            your admission.
          </p>
        </div>

        {/* Phases */}

        {admissionProcess.map((phase) => (
          <AdmissionPhase
            key={phase.id}
            phase={phase}
          />
        ))}
      </div>
    </section>
  );
}