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
        href: "/mba",
      },
      {
        label: "BBA",
        href: "/bba",
      },
    ],
  },

  {
    label: "Admissions",
    href: "/admissions",
  },

  {
    label: "Placements",
    href: "/placements",
  },

  {
    label: "Faculty & Research",
    href: "/faculty-and-research",
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





