export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "About",
    children: [
      {
        label: "About IMS",
        href: "/about-ims",
      },
      {
        label: "Messages",
        children: [
          {
            label: "Chairman Message",
            href: "/messages/chairman-message",
          },
          {
            label: "Directors-Message",
            href: "/messages/directors-message",
          },
          {
            label: "Leadership-Team",
            href: "/messages/leadership-team",
          },
        ],
      },
      {
        label: "Governing Body",
        href: "/governing-body",
      },
      {
        label: "College Development Committee",
        href: "/college-development-committee",
      },
      {
        label: "Approvals & Affiliations",
        href: "/approvals-and-affiliations",
      },
      {
        label: "AICTE Approval",
        href: "/AICTE-approval",
      },
      {
        label: "DTE Approval",
        href: "/DTE-approval",
      },
      {
        label: "University Affiliation",
        href: "/university-affiliation",
      },
      {
        label: "NAAC Accreditation",
        href: "/NAAC-accreditation",
      },
    ],
  },

  {
    label: "Programs",
    children: [
      {
        label: "MBA",
        href: "/program-mba/overview" ,
      },
      {
        label: "MCA",
        href: "/bba",
      },
      {
        label: "BBA / BCA",
        href: "/bba",
      },
      {
        label: "PhD",
        href: "/bba",
      },
    ],
  },

  {
    label: "Admissions",
    children: [
      {
        label: "Admission Process ",
        href: "/admission-process",
      },
      {
        label: "Eligibility Criteria",
        href: "/eligibility-criteria",
      },
      {
        label: "Admission Schedule",
        href: "/admission-schedule",
      },
      {
        label: "Prospectus Download",
        href: "/",
      },
      {
        label: "Scholarships",
        href: "/",
      },
      {
        label: "Fees Structure and Refund Policy",
        href: "/fees-structure-and-refund-policy",
      },
      {
        label: "online-admission-inquiry",
        href: "/bba",
      },
      {
        label: "Reservation Policy",
        href: "/reservation-policy",
      },{
        label: "FAQs",
        href: "/faqs",
      },
      {
        label: "Documents Required",
        href: "/documents-required",
      },
      {
        label: "Education Loan Assistance",
        href: "/education-loan-assistance",
      },
      {
        label: "Hostel Information",
        href: "/hostel-information",
      },
    ],
  },

  {
    label: "Placements",
    href: "/placements",
  },

  // {
  //   label: "Faculty & Research",
  //   href: "/faculty-and-research",
  // },

  {
    label: "Faculty & Research",
    children: [
      {
        label: "Faculty",
        children: [
          {
            label: "Members",
            href: "/members",
          },
          {
            label: "Achivements",
            href: "/achivements",
          },
          {
            label: "Publication",
            href: "/publication",
          },
          {
            label: "Research Project",
            href: "/research-project",
          }, 
          {
            label: "Patent & Design Registration",
            href: "/patent-and-design-registration",
          },          
        ],
      },
      {
        label: "Administrative Staff",
        href: "/administrative-staff",
      },
      {
        label: "Journels",
        href: "/journels",
      },
      
    ],
  },

  {
    label: "Student Corner",
    href: "/student-corner",
  },
  {
    label: "Governance & Compliance",
    href: "/governance",
  },
  {
    label: "News & Media",
    href: "/news-and-media",
  },
  // {
  //   label: "Contact",
  //   href: "/contact",
  // },
];





