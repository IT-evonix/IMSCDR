export interface ApprovalItem {
  id: number;
  title: string;
  file?: string;
  url?: string;
  href?: string;
}

export const approvalData = {
  // ============================================
  // AICTE
  // ============================================

  feestructureims: [
    {
      id: 1,
      title: "View Detailed Fee Structure 2026 - 27 (English)",
      file: "/pdf/admission/English-Fee-Structure-24.pdf",
    },
    {
      id: 2,
      title: "View Detailed Fee Structure 2026 - 27 (Marathi)",
      file: "/pdf/admission/Marathi-Fee-Structure-24.pdf",
    },
  ] as ApprovalItem[],

  // ============================================
  // DTE
  // ============================================

  dte: [
    {
      id: 1,
      title: "DTE Approval 2023-24",
      file: "/pdf/dte-2023.pdf",
    },
    {
      id: 2,
      title: "DTE Approval 2024-25",
      file: "/pdf/dte-2024.pdf",
    },
  ] as ApprovalItem[],

  // ============================================
  // UNIVERSITY AFFILIATION
  // ============================================

  universityAffiliation: [
    {
      id: 1,
      title: "University Affiliation 2023-24",
      file: "/pdf/university-2023.pdf",
    },
    {
      id: 2,
      title: "University Affiliation 2024-25",
      file: "/pdf/university-2024.pdf",
    },
  ] as ApprovalItem[],

  // ============================================
  // NAAC
  // ============================================

  naac: [
    {
      id: 1,
      title: "NAAC Accreditation Report",
      file: "/pdf/naac-report.pdf",
    },
    {
      id: 2,
      title: "NAAC Certificate",
      file: "/pdf/naac-certificate.pdf",
    },
  ] as ApprovalItem[],

  // ============================================
  // MANDATORY DISCLOSURE
  // ============================================

  mandatoryDisclosure: [
    {
      id: 1,
      title: "Time Table MCA",
      file:
        "/pdf/governance/division_wise_MCA_time_tables_workload_calendar__2023-24.xlsx",
    },

    {
      id: 2,
      title: "Time Table MBA Sem I",
      file:
        "/pdf/governance/MBA-SEM-I-2023-24.xls",
    },

  
    // {
    //   id: 15,
    //   title: "Student / Faculty Feedback on AICTE Website",
    //   url:
    //     "https://www.aicte.gov.in/feedback/index.php",
    // },

    {
      id: 16,
      title: "Click here to see Geotagged Photos",
      href: "/",
    },
  ] as ApprovalItem[],
};