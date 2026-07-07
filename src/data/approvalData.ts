export interface ApprovalItem {
  id: number;
  title: string;
  file: string;
}

export const approvalData = {
  aicte: [
    {
      id: 1,
      title: "AICTE Extension Of Approval 2011-12 To 2024-25",
      file: "/pdfs/aicte-2024.pdf",
    },
    {
      id: 2,
      title: "AICTE Extension Of Approval 2011-12 To 2023-24",
      file: "/pdfs/aicte-2023.pdf",
    },
    
  ],

  dte: [
    {
      id: 1,
      title: "DTE Approval 2023-24",
      file: "/pdfs/dte-2023.pdf",
    },
    {
      id: 2,
      title: "DTE Approval 2024-25",
      file: "/pdfs/dte-2024.pdf",
    },
  ],

  universityAffiliation: [
    {
      id: 1,
      title: "University Affiliation 2023-24",
      file: "/pdfs/university-2023.pdf",
    },
    {
      id: 2,
      title: "University Affiliation 2024-25",
      file: "/pdfs/university-2024.pdf",
    },
  ],

  naac: [
    {
      id: 1,
      title: "NAAC Accreditation Report",
      file: "/pdfs/naac-report.pdf",
    },
    {
      id: 2,
      title: "NAAC Certificate",
      file: "/pdfs/naac-certificate.pdf",
    },
  ],
};