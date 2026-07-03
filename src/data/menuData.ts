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
        href: "/",
      },
      {
        label: "Messages",
        children: [
          {
            label: "Chairman Message",
            href: "/about-director-message",
          },
          {
            label: "Directors-Message",
            href: "/",
          },
          {
            label: "Leadership-Team",
            href: "/",
          },
        ],
      },
      {
        label: "Governing Body",
        href: "/governance-governing-body",
      },
      {
        label: "College Development Committee",
        href: "/governance-college-development-commitee",
      },
      {
        label: "Approvals & Affiliations",
        href: "/",
      },
      {
        label: "AICTE Approval",
        href: "/",
      },
      {
        label: "DTE Approval",
        href: "/",
      },
      {
        label: "University Affiliation",
        href: "/",
      },
      {
        label: "NAAC Accreditation",
        href: "/",
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
        href: "/",
      },
      {
        label: "BBA / BCA",
        href: "/",
      },
      {
        label: "PhD",
        href: "/",
      },
    ],
  },

  {
    label: "Admissions",
    children: [
      {
        label: "Admission Process ",
        href: "/",
      },
      {
        label: "Eligibility Criteria",
        href: "/",
      },
      {
        label: "Admission Schedule",
        href: "/",
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
        href: "/",
      },
      {
        label: "online-admission-inquiry",
        href: "/",
      },
      {
        label: "Reservation Policy",
        href: "/",
      },{
        label: "FAQs",
        href: "/",
      },
      {
        label: "Documents Required",
        href: "/",
      },
      {
        label: "Education Loan Assistance",
        href: "/",
      },
      {
        label: "Hostel Information",
        href: "/",
      },
    ],
  },

  {
    label: "Placements",
    children: [
      {
        label: "Placement Overview",
        href: "/",
      },
      {
        label: "Training & Placement Cell",
        href: "/",
      },
      {
        label: "Industry Internship",
        href: "/",
      },
      {
        label: "Industry Collobration",
        href: "/",
      },
      {
        label: "Top Recruiters",
        href: "/",
      },
      {
        label: "Placement Report",
        href: "/",
      },
      {
        label: "Testimonials",
        href: "/",
      },
      
    ],
  },

  {
    label: "Faculty & Research",
    children: [
      {
        label: "Faculty",
        children: [
          {
            label: "Members",
            href: "/",
          },
          {
            label: "Achivements",
            href: "/",
          },
          {
            label: "Publication",
            href: "/",
          },
          {
            label: "Research Project",
            href: "/",
          }, 
          {
            label: "Patent & Design Registration",
            href: "/",
          },          
        ],
      },
      {
        label: "Administrative Staff",
        href: "/",
      },
      {
        label: "Journels",
        href: "/",
      },
      
    ],
  },

  {
    label: "Student Corner",
    children: [
      
      {
        label: "Academic Calendar",
        href: "/",
      },
      {
        label: "Student Projects",
        href: "/",
      },
      {
        label: "Code of Conduct",
        href: "/",
      },
      {
        label: "Anti Ragging",
        href: "/",
      },
      {
        label: "Scholarship",
        href: "/",
      },
      {
        label: "Internal Complaint Commiittee",
        href: "/",
      },
      {
        label: "Grievance",
        href: "/",
      },
      {
        label: "Student Council",
        href: "/",
      },
      {
        label: "Sports Council",
        href: "/",
      },

      {
        label: "Student Achivements",
        children: [
          {
            label: "Curricular",
            href: "/",
          },
          {
            label: "Non Curricular",
            href: "/",
          },
          {
            label: "Report",
            href: "/",
          },      
        ],
      },

      {
        label: "Student Club",
        href: "/",
      },

      {
        label: "Infrastructure",
        children: [
          {
            label: "Hostel",
            href: "/",
          },
          {
            label: "Library",
            href: "/",
          },
          {
            label: "Amminities",
            href: "/",
          },
          // {
          //   label: "Laboratory",
          //   href: "/",
          // },  
          // {
          //   label: "Canteen",
          //   href: "/",
          // },  
          // {
          //   label: "Computer Center",
          //   href: "/",
          // },       
        ],
      },

      {
        label: "Events",
        children: [
          {
            label: "Cultural",
            href: "/",
          },
          {
            label: "Technical",
            href: "/",
          },
          // {
          //   label: "Festivals",
          //   href: "/",
          // },
          // {
          //   label: "Gender Equality",
          //   href: "/",
          // },  
        ],
      },
      
      {
        label: "Alumni",
        href: "/",
      },
      
    ],
  },


  {
    label: "Governance & Compliance",
    children: [
      {
        label: "Mandatory Disclosure ",
        href: "/",
      },
      {
        label: "AICTE Approval Letters",
        href: "/",
      },
      {
        label: "Anti-Ragging Committee",
        href: "/",
      },
      {
        label: "Grievance Redressal Committee",
        href: "/",
      },
      {
        label: "Internal Complaint Committee (ICC)",
        href: "/",
      },
      {
        label: "SC/ST Cell",
        href: "/",
      },
      {
        label: "OBC Cell",
        href: "/",
      },
      {
        label: "Women Development Cell",
        href: "/",
      },
      {
        label: "Sexual Harassment Policy",
        href: "/",
      },
      {
        label: "Equal Opportunity Cell",
        href: "/",
      },
      {
        label: "Academic Audit Reports",
        href: "/",
      },
      {
        label: "NAAC / AQAR Reports",
        href: "/",
      },
      {
        label: "Finance & Audit Statements",
        href: "/",
      },
      {
        label: "Statutory Committees",
        href: "/",
      },
      // {
      //   label: "Governing Body",
      //   href: "/",
      // },
      // {
      //   label: "College Development Committee",
      //   href: "/",
      // },
    ],
  },

  {
    label: "News & Media",
    children: [
      {
        label: "News & Media ",
        href: "/",
      },
      {
        label: "Blogs",
        href: "/",
      },
      
    ],
  },

  {
    label: "IQAC",
    href: "/iqac",
  },
];





