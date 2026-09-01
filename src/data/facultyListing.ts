export interface Faculty {
  id: number;
  name: string;
  designation?: string;
  education?: string;
  image?: string;
  department?: string;
  // qualification?: string;
  // experience?: string;
  // link: string;
}

export interface FacultyCardProps {
  faculty: Faculty;
  showImage?: boolean;
  showDesignation?: boolean;
  showEducation? :boolean;
  showButton?: boolean;
  buttonText?: string;
  onKnowMore?: (faculty: Faculty) => void;
}

export const facultyListing: Faculty[] = [
  {
    id: 1,
    name: "Dr. Pronoti V. Telore",
    designation: "In-Charge Director",
    education: "PhD (Marketing), MBA (Marketing Management)",
    image: "/images/about/In-Charge-director.webp",
    department: "MBA",
  },
  {
    id: 2,
    name: "CA. D. A. Kulkarni",
    designation: "Assistant Professor",
    education: "M.Com., C.A.",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 3,
    name: "Dr. Rahul K. Khandelwal",
    designation: "Assistant Professor",
    education: "Ph.D., LL.B., MMS, MBS, PGDBM, B.Com.",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 4,
    name: "Dr. Anjali A. Vaidya",
    designation: "Assistant Professor",
    education: "M.Sc. in Physics (Electronics), MCA, and Ph.D.",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 5,
    name: "Dr. Hatim Fakhruddin Kayumi",
    designation: "Associate Professor, H.O.D",
    education: "Ph. D. (Commerce, Finance)",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 6,
    name: "Dr. Mahesh P. Potdar",
    designation: "Associate Professor",
    education: "MCM, MMS (System), Ph. D.",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 7,
    name: "Dr. Manoj Shamrao Kulkarni",
    designation: "Associate Professor",
    education: "B.Sc., M.B.A., Ph.D.",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },

  {
    id: 8,
    name: "Dr. Sanjay P. Bhakkad",
    designation: "Associate Professor",
    education: "M.Sc., M.C.A, Ph.D.",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 9,
    name: "Dr. Sayyed Mudassar Nazir",
    designation: "Associate Professor",
    education: "Ph. D. (Management, HRM), UGC NET (Management),",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 10,
    name: "Dr. Shradha S. Bhandari",
    designation: "Associate Professor",
    education: "Ph.D. in Commerce & Management, MBA (Financial Management), ",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 11,
    name: "Dr. Swati Barnabas",
    designation: "Librarian",
    education: "M.Sc.; M.lib.I.Sc. Ph.D (Library & Information Science)",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 12,
    name: "Prof. Gauri Patil",
    designation: "Assistant Professor",
    education: "B.C.S , M.C.S., M.C.A , Research Scholar",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 13,
    name: "Ms. Poonam Tiwari",
    designation: "Assistant Professor & Research Scholar",
    education: "Pursuing Ph.D. in Management, MBA (Dual Specialization), B.Com.",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 14,
    name: "Ass. Prof. Ajit Sanjay Kute",
    designation: "Associate Professor",
    education: "Master of Computer Applications (MCA) in IMS-CDR, Ahmednagar",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 15,
    name: "Prof. Ashwini Arun Barathe",
    designation: "Associate Professor",
    education: "Master of Computer Applications (MCA), Bachelor of Computer Applications (BCA)",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 16,
    name: "Ms. Ashwini Thorat",
    designation: "Associate Professor",
    education: "Ph.D. in Marketing (Pursuing), MMS - Marketing, MBS - Human Resources Management",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 17,
    name: "Ms. Sakshi Madhyan",
    designation: "Associate Professor",
    education: "Currently Pursuing Ph.D. (HRM), MBA (Finance), BBA (Finance)",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 18,
    name: "Ms. Shital Ashish Upadhyay (Nabariya)",
    designation: "Assistant Professor,(BBA)",
    education: "B.Ed. (Mathematics & Geography), M.Com. (Cost Accounting), MBA (Marketing), M.B.S. (Financial Management), P.G.D.B.M. (Marketing Management), B.Com. (Costing)",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 19,
    name: "Prof. Shruti M. Rao",
    designation: "Associate Professor",
    education: "MBA (Dual Specialisation Marketing and HR), Certification course in Advertising, BBA. (Bachelors of Business Administration)",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 20,
    name: "Prof. Suresh Manohar Khanna",
    designation: "Assistant Professor & Training and Placement Officer.",
    education: "MBA Human Resource Management , MBA Marketing",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 21,
    name: "Prof. Sayali Sunil Torane",
    designation: "Associate Professor",
    education: "MBA in Digital Media Communication Marketing (Savitribai Phule Pune University), Bachelor of Journalism & Mass Communication (BJMC) (Tilak Maharashtra Vidyapeeth), Degree / Training in Biomedical Engineering, Diploma in Bharatanatyam, Advanced Certificate Course in Digital Marketing",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 22,
    name: "Ass.Prof.Shubhangi Ashok Kharmate",
    designation: "Associate Professor",
    education: "MCA (Masters in computer Application), Certification course in Manual testing., BCA.",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 23,
    name: "Swati Vaibhav Thombare",
    designation: "Assistant Professor (BCA) Department",
    education: "Master of Computer Application(MCA), Bachelor of Computer Application(BCA)",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 24,
    name: "Dr. Rucha Tandulwadkar",
    designation: "Associate Professor",
    education: "Ph.D. : Marketing Management from S.P.Pune University, Master's Degree MBA in Marketing and Human Resource, Bachelor's Degree Bachelor in Computer Science, Other Professional Qualifications Bachelor in Journalism",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 25,
    name: "Supriya G Sapa",
    designation: "Associate Professor",
    education: "Master of Technology (Information Technology) , Bachelor of Engineering (Computer Science and Engineering)",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 26,
    name: "Mr. Abhishek Subhash Kawane",
    designation: "Associate Professor",
    education: "UGC-NET, MH-SET, MCA(Commerce and Management), B.C.S.",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
  {
    id: 27,
    name: "Ms. Utkarsha R. Dethe",
    designation: "Associate Professor",
    education: "MCS,MCA,SET(Computer Science & Application).",
    image: "/images/faculty/male.webp",
    department: "MBA",
  },
];