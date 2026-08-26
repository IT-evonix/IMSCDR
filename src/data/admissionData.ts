
export interface AdmissionStepType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface AdmissionPhaseType {
  id: number;
  phase: string;
  title: string;
  color: string;
  phaseIcon: string;
  steps: AdmissionStepType[];
}
export const admissionJourneyData: AdmissionPhaseType[] = [
  {
    id: 1,
    phase: "PHASE 01",
    title: "CET Examination",
    color: "#1F66E5",
    phaseIcon: "/images/admission/checklist.svg",

    steps: [
      {
        id: 1,
        title: "CET Registration",
        description:
          "CET Cell declares registration for CET Examination.",
        icon: "/images/admission/user-plus.svg",
      },

      {
        id: 2,
        title: "Register for CET",
        description:
          "Student registers for the respective CET Examination.",
        icon: "/images/admission/register.svg",
      },

      {
        id: 3,
        title: "Attend Examination",
        description:
          "Student appears for the CET Examination.",
        icon: "/images/admission/exam.svg",
      },

      {
        id: 4,
        title: "CET Result",
        description:
          "CET Cell publishes examination result.",
        icon: "/images/admission/result.svg",
      },
    ],
  },

  {
    id: 2,
    phase: "PHASE 02",
    title: "Course Registration & Merit List",
    color: "#8E42DA",
    phaseIcon: "/images/admission/group.svg",

    steps: [
      {
        id: 5,
        title: "Registration Schedule",
        description:
          "CET Cell publishes course registration schedule.",
        icon: "/images/admission/calendar.svg",
      },

      {
        id: 6,
        title: "Course Registration",
        description:
          "Student registers for preferred course.",
        icon: "/images/admission/add-user.svg",
      },

      {
        id: 7,
        title: "Provisional Merit",
        description:
          "Provisional Merit List published.",
        icon: "/images/admission/list.svg",
      },

      {
        id: 8,
        title: "Grievance Round",
        description:
          "Students submit grievances if required.",
        icon: "/images/admission/chat.svg",
      },

      {
        id: 9,
        title: "Final Merit List",
        description:
          "Final Merit List declared.",
        icon: "/images/admission/trophy.svg",
      },
    ],
  },

  {
    id: 3,
    phase: "PHASE 03",
    title: "Option Filling & Seat Allotment",
    color: "#35A852",
    phaseIcon: "/images/admission/college.svg",

    steps: [
      {
        id: 10,
        title: "Option Round",
        description:
          "CET Cell announces option round.",
        icon: "/images/admission/exchange.svg",
      },

      {
        id: 11,
        title: "Fill Choices",
        description:
          "Student fills preferred institute choices.",
        icon: "/images/admission/document.svg",
      },

      {
        id: 12,
        title: "Seat Allotment",
        description:
          "Institute-wise seat allotment declared.",
        icon: "/images/admission/building.svg",
      },
    ],
  },

  // Future Ready
  // {
  //   id:4,
  //   phase:"PHASE 04",
  //   title:"Admission Confirmation",
  //   color:"#F39C12",
  //   phaseIcon:"/images/admission/graduation.svg",
  //   steps:[]
  // }
];