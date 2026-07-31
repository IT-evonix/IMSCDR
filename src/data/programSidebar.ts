export const programSidebar = {
  about: {
    heading: "About",
    menuItems: [
      { title: "About IMS", href: "/about-ims" },
      { title: "Vision & Mission", href: "/about-ims/#vision-and-mision" },

      {
        title: "Leadership",
        href: "/",
        children: [
          {
            title: "Director's Message",
            href: "/about-director-message",
          },
          {
            title: "Deputy Director's Message",
            href: "/about-dy-director-msg",
          },
        ],
      },

      { title: "Governing Body", href: "/governing-body" },

      {
        title: "College Development Committee (CDC)",
        href: "/college-development-commitee",
      },
      {
        title: "Approvals & Affiliations",
        href: "/approvals-and-affiliations",
      },

    ],
  },

  mba: {
    heading: "MBA",
    menuItems: [
      { title: "Overview", href: "/program-mba/overview" },
      { title: "Specializations", href: "/program-mba/specializations" },
      { title: "Curriculum", href: "/program-mba/curriculum" },
      { title: "Eligibility", href: "/program-mba/eligibility" },
      { title: "Intake", href: "/program-mba/intake" },
      { title: "Faculty", href: "/program-mba/faculty" },
      { title: "Syllabus", href: "/program-mba/syllabus" },
      { title: "Academic Calendar", href: "/program-mba/academic-calendar" },
      { title: "FAQ", href: "/program-mba/faq" },
    ],
  },

  admission: {
    heading: "Admission",
    menuItems: [
      { title: "Admission Process", href: "/admission-process" },
      { title: "Eligibility", href: "/eligibility" },
      { title: "Fee Structure", href: "/fee-structure" },
      { title: "Scholarships", href: "/scholarships" },
      { title: "Apply Online", href: "/" },
      { title: "Downloads", href: "/downloads" },
      { title: "Prospectus", 
        href: "pdf/admission/IMS-MBA-MCA-Prospectus25-26.pdf",
        target: "_blank",
        isExternal: true,
      },
      { title: "Documents Required", href: "/documents-required" },
      { title: "Reservation Policy", href: "/reservation-policy" },
    ],
  },
};
