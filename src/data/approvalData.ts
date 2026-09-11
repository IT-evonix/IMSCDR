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

  NAACCycle3: [
    {
      id: 1,
      title: "NAAC Cycle - 3 Revised SSR",
      file: "/pdf/governance/NAAC-Cycle-3-SSR-Revised-June-2024.pdf",
    },
  ] as ApprovalItem[],

  mandatorydisclosure: [
    {
      id: 1,
      title: "Draft Mandatory Disclosure 2026-27",
      file: "/pdf/mandatory-disclosure/Draft-Mandatory-Disclosure-2026-27.pdf",
    },
  ] as ApprovalItem[],
  
};