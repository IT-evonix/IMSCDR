export interface MenuItem {
  label: string;
  href?: string;
  target?: string;
  isExternal?: boolean;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "About",
    children: [
      {
        label: "About IMS-CDR",
        href: "/about-ims",
      },
      {
        label: "Vision & Mission",
        href: "/about-ims#vision-and-mision",
      },
      {
        label: "Leadership",
        children: [
          {
            label: "Directors Message",
            href: "/about-director-message",
          },
          {
            label: "Dy Director Message",
            href: "/about-dy-director-message",
          },
        ],
      },
      {
        label: "Governing Body",
        href: "/governing-body",
      },
      {
        label: "College Development Committee (CDC)",
        href: "/college-development-commitee",
      },
      // {
      //   label: "Approvals & Affiliations",
      //   href: "/approvals-and-affiliations",
      // },
    ],
  },

  {
    label: "Programs",
    children: [
      {
        label: "MBA",
        href: "/program-mba/overview",
      },
      {
        label: "MCA",
        href: "/program-mca/overview",
      },
      {
        label: "BBA",
        href: "/program-bba/overview",
      },
      {
        label: "BCA",
        href: "/program-bca/overview",
      },
      // {
      //   label: "Ph.D",
      //   href: "/program-phd",
      // },
      {
        label: "Faculty",
        href: "/faculty",
      },
      // {
      //   label: "Academic Calendar",
      //   href: "/academic-calendar",
      // },
      // {
      //   label: "Research & Innovation",
      //   href: "/research-and-innovation",
      // },
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
        label: "Eligibility",
        href: "/eligibility",
      },
      {
        label: "Fee Structure",
        href: "/fee-structure",
      },
      {
        label: "Scholarships",
        href: "/scholarships",
      },
      {
        label: "Apply Online",
        href: "https://admissions.imscdr.ac.in/",
      },
      // {
      //   label: "Downloads",
      //   href: "/downloads",
      // },
      // {
      //   label: "Prospectus",
      //   href: "/pdf/admission/IMS-MBA-MCA-Prospectus25-26.pdf",
      //   target: "_blank",
      //   isExternal: true,
      // },
      {
        label: "Documents Required",
        href: "/documents-required",
      },
      // {
      //   label: "Reservation Policy",
      //   href: "/reservation-policy",
      // },
    ],
  },
  {
    label: "Placements",
    href: "/placement",
  },

  // {
  //   label: "Placements",
  //   children: [
  //     {
  //       label: "Placement Overview",
  //       href: "/",
  //     },
  //     {
  //       label: "Training & Placement Cell",
  //       href: "/",
  //     },
  //     {
  //       label: "Internship & Industry Connect",
  //       href: "/",
  //     },
  //     {
  //       label: "Top Recruiters",
  //       href: "/",
  //     },
  //     {
  //       label: "Placement Statistics",
  //       href: "/",
  //     },
  //     {
  //       label: "Success Stories",
  //       href: "/",
  //     },
  //   ],
  // },

  {
    label: "Life@IMS",
    href: "/lifeatims/campus-overview",
  },

  // {
  //   label: "Life@IMS",
  //   children: [
  //     {
  //       label: "Campus Overview",
  //       href: "/lifeatims/campus-overview",
  //     },
  //     {
  //       label: "Infrastructure",
  //       href: "/lifeatims/infrastructure",
  //     },
  //     {
  //       label: "Library",
  //       href: "/lifeatims/library",
  //     },
  //     {
  //       label: "Hostel",
  //       href: "/lifeatims/hostel",
  //     },
  //     {
  //       label: "Sports",
  //       href: "/lifeatims/sports",
  //     },
  //     {
  //       label: "Student Clubs",
  //       href: "/lifeatims/student-clubs",
  //     },
  //     {
  //       label: "Cultural Activities",
  //       href: "/lifeatims/cultural-activities",
  //     },
  //     {
  //       label: "Technical Events",
  //       href: "/lifeatims/technical-events",
  //     },
  //     {
  //       label: "Student Achievements",
  //       href: "/lifeatims/student-achievements",
  //     },
  //     {
  //       label: "Alumni",
  //       href: "/lifeatims/alumni",
  //     },
  //     {
  //       label: "Gallery",
  //       href: "/lifeatims/gallery",
  //     },
  //   ],
  // },

  // {
  //   label: "Student Corner",
  //   href: "/student-corner",
  // },

  // {
  //   label: "Student Corner",
  //   children: [
  //     {
  //       label: "Academic Calendar",
  //       href: "/",
  //     },
  //     {
  //       label: "Student Projects",
  //       href: "/",
  //     },
  //     {
  //       label: "Code of Conduct",
  //       href: "/",
  //     },
  //     {
  //       label: "Anti Ragging",
  //       href: "/",
  //     },
  //     {
  //       label: "Scholarship",
  //       href: "/",
  //     },
  //     {
  //       label: "Internal Complaint Commiittee",
  //       href: "/",
  //     },
  //     {
  //       label: "Grievance",
  //       href: "/",
  //     },
  //     {
  //       label: "Student Council",
  //       href: "/",
  //     },
  //     {
  //       label: "Sports Council",
  //       href: "/",
  //     },

  //     {
  //       label: "Student Achivements",
  //       children: [
  //         {
  //           label: "Curricular",
  //           href: "/",
  //         },
  //         {
  //           label: "Non Curricular",
  //           href: "/",
  //         },
  //         {
  //           label: "Report",
  //           href: "/",
  //         },
  //       ],
  //     },

  //     {
  //       label: "Student Club",
  //       href: "/",
  //     },

  //     {
  //       label: "Infrastructure",
  //       children: [
  //         {
  //           label: "Hostel",
  //           href: "/",
  //         },
  //         {
  //           label: "Library",
  //           href: "/",
  //         },
  //         {
  //           label: "Amminities",
  //           href: "/",
  //         },
  //       ],
  //     },

  //     {
  //       label: "Events",
  //       children: [
  //         {
  //           label: "Cultural",
  //           href: "/",
  //         },
  //         {
  //           label: "Technical",
  //           href: "/",
  //         },
  //         // {
  //         //   label: "Festivals",
  //         //   href: "/",
  //         // },
  //         // {
  //         //   label: "Gender Equality",
  //         //   href: "/",
  //         // },
  //       ],
  //     },

  //     {
  //       label: "Alumni",
  //       href: "/",
  //     },
  //   ],
  // },

  {
    label: "Governance & Compliance",
    children: [
      {
        label: "FRA Fee Structure ",
        href: "/frafeesstructure",
      },
      {
        label: "Mandatory Disclosure",
        href: "/mandatory-disclosure",
      },
      // {
      //   label: "IQAC",
      //   href: "/IQAC",
      // },
      // {
      //   label: "Policies",
      //   href: "/policies",
      // },

      {
        label: "Statutory Committees",
        children: [
          {
            label: "Anti-Ragging Committee",
            href: "/anti-ragging-committee",
          },
          {
            label: "Anti-Ragging Squad",
            href: "/anti-ragging-squad",
          },
          {
            label: "Grievance Redressal  Committee",
            href: "/student-grievance-redressal-committee",
          },
          {
            label: "Internal Complaint Committee",
            href: "/internal-commitee",
          },
          {
            label: "SC/ST Cell",
            href: "/sc-st-cell",
          },
          {
            label: "Equal Opportunity Cell",
            href: "/equal-opportunity-cell",
          },
          {
            label: "Governing Body",
            href: "/governing-body",
          },
          {
            label: "College Development Committee (CDC)",
            href: "/college-development-commitee",
          },
          // {
          //   label: "Online Grievance Portal",
          //   href: "/",
          // },          
        ],
      },
    ],
  },

  {
    label: "News & Media",
    children: [
      {
        label: "News & Media ",
        href: "/news-events",
      },
      {
        label: "Blogs",
        href: "/blogs",
      },
    ],
  },

  // {
  //   label: "IQAC",
  //   href: "/IQAC",
  // },
];
