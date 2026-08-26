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
            href: "/about-dy-director-message",
          },
        ],
      },

      { title: "Governing Body", href: "/governing-body" },

      {
        title: "College Development Committee (CDC)",
        href: "/college-development-commitee",
      },
      // {
      //   title: "Approvals & Affiliations",
      //   href: "/approvals-and-affiliations",
      // },

    ],
  },

  mba: {
    heading: "MBA",
    menuItems: [
      { title: "Overview", href: "/program-mba/overview" },
      { title: "Intake", href: "/program-mba/intake" },
      { title: "Eligibility", href: "/program-mba/eligibility" },
      { title: "Curriculum / Syllabus", href: "/program-mba/curriculum" },
      { title: "Programme Outcomes", href: "/program-mba/programme-outcomes" },
      { title: "Career Opportunities", href: "/program-mba/career-opportunities" },
      { title: "Faculty", href: "/program-mba/faculty" },
      { title: "Laboratories / Facilities", href: "/program-mba/laboratories" },
      { title: "Downloads", href: "/program-mba/downloads" },
      { title: "FAQ", href: "/program-mba/faq" },
    ],
  },

  // mba: {
  //   heading: "MBA",
  //   menuItems: [
  //     { title: "Overview", href: "/program-mba/overview" },
  //     { title: "Specializations", href: "/program-mba/specializations" },
  //     { title: "Curriculum", href: "/program-mba/curriculum" },
  //     { title: "Eligibility", href: "/program-mba/eligibility" },
  //     { title: "Intake", href: "/program-mba/intake" },
  //     { title: "Faculty", href: "/program-mba/faculty" },
  //     { title: "Syllabus", href: "/program-mba/syllabus" },
  //     { title: "Academic Calendar", href: "/program-mba/academic-calendar" },
  //     { title: "FAQ", href: "/program-mba/faq" },
  //   ],
  // },

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


  lifeatims: {
    heading: "Life at IMS",
    menuItems: [
      { title: "Campus Overview", href: "/lifeatims/campus-overview" },
      { title: "Infrastructure", href: "/lifeatims/infrastructure" },
      { title: "Library", href: "/lifeatims/library" },
      { title: "Hostel", href: "/lifeatims/hostel" },
      { title: "Sports", href: "/lifeatims/sports" },
      { title: "Student Clubs", href: "/lifeatims/student-clubs" },
      { title: "Cultural Activities", href: "/lifeatims/cultural-activities"},
      { title: "Technical Events", href: "/lifeatims/technical-events" },
      { title: "Student Achievements", href: "/lifeatims/student-achievements" },
      { title: "Alumni", href: "/lifeatims/alumni" },
      { title: "Gallery", href: "/lifeatims/gallery" },
    ],
  },

};
