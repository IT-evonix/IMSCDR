export interface Faculty {
  id: number;

  // Basic Details
  name: string;
  designation: string;
  qualification: string;
  image: string;
  email: string;

  // Research Areas
  broadAreas: string[];
  specificAreas: string[];

  // Research Profile
  orcidId?: string;
  googleScholar?: string;
  scopusId?: string;

  // Publications
  researchPapersPublished?: number;
  booksPublished?: number;
  bookChaptersPublished?: number;
  sponsoredResearchProjects?: number;

  // Research Guidance
  researchGuidance?: string;
  phdAwarded?: number;
  phdScholarsInProcess?: number;
  patents?: number;

  // Description
  profileContent: string;
}

export const facultyData: Faculty[] = [
  {
    "id": 1,
    "name": "CA. D. A. Kulkarni",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Com., C.A.",
    "image": "/images/faculty/director-1.webp",
    "email": "dakulkarni@imscdr.ac.in",
    "broadAreas": [
      "Financial Management"
    ],
    "specificAreas": [
      "Accounting",
      "Finance",
      "Investment",
      "Financial Planning",
      "Taxation"
    ],
    "researchPapersPublished": 3,
    "booksPublished": 3,
    "profileContent": "Prof. (CA) Dnyanesh A. Kulkarni has extensive experience in the areas of Financial Management, Management Accounting, and Taxation at BPHE Society's Institute of Management Studies Career Development & Research (IMSCD&R), Ahmednagar. He has 25 years of academic teaching experience at graduate and post-graduate levels alongside 25 years of professional and industrial experience. He is a Fellow Member of the Institute of Chartered Accountants of India (ICAI) and former Chairman of the Ahmednagar Branch of WIRC of ICAI. He is an Accredited Management Teacher by AIMA, New Delhi, and has served on the SEBI Financial Education Resource Person panel. He has co-authored 3 books published by Nirali Prakashan and published over 200 financial articles."
  },
  {
    "id": 2,
    "name": "Dr. Rahul K. Khandelwal",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "Ph.D., LL.B., MMS, MBS, PGDBM, B.Com.",
    "image": "/images/faculty/director-1.webp",
    "email": "khandelwalr29@gmail.com",
    "broadAreas": [
      "Marketing Management",
      "Strategic Management",
      "General Management"
    ],
    "specificAreas": [
      "Consumer Behavior",
      "International Marketing",
      "Rural Marketing",
      "Marketing Strategy",
      "Healthcare"
    ],
    "orcidId": "0000-0002-5217-4024",
    "googleScholar": "https://scholar.google.com/citations?user=3DwA9l4AAAAJ&hl=en",
    "scopusId": "57219775811",
    "researchPapersPublished": 35,
    "booksPublished": 4,
    "bookChaptersPublished": 5,
    "sponsoredResearchProjects": 2,
    "phdAwarded": 3,
    "phdScholarsInProcess": 3,
    "patents": 3,
    "profileContent": "Dr. Rahul K. Khandelwal is an Assistant Professor and Academic Research Coordinator at IMSCD&R, Ahilyanagar with 11 years of teaching experience. He is an SPPU recognized research guide in Marketing and Organizational Management with 3 Ph.D. scholars awarded under his guidance. He is Co-director of two minor research projects sponsored by the Ministry of Human Resource Development through ICSSR. He has published research papers in ABDC, Scopus, UGC CARE, and peer-reviewed journals, and presented papers at top IIMs."
  },
  {
    "id": 3,
    "name": "Dr. Anjali A. Vaidya",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "Ph.D., MCA, M.Sc. (Physics - Electronics)",
    "image": "/images/faculty/director-1.webp",
    "email": "dranjaliavaidya@imscdr.ac.in",
    "broadAreas": [
      "Computer Applications",
      "Information Technology",
      "Artificial Intelligence"
    ],
    "specificAreas": [
      "Natural Language Processing",
      "Speech Technology",
      "Web Technologies",
      "Software Development"
    ],
    "researchPapersPublished": 8,
    "profileContent": "Dr. Anjali A. Vaidya is an accomplished academician with over 23 years of teaching experience in Computer Applications and Information Technology. She holds an M.Sc. in Physics (Electronics), MCA, and Ph.D. Throughout her career, she has served in key institutional roles including MCA Coordinator, Placement Coordinator, Alumni Association Coordinator, and Web In-charge. She has also served Savitribai Phule Pune University (SPPU) as a Syllabus Framing Committee Member, Examiner, and Question Paper Setter."
  },
  {
    "id": 4,
    "name": "Dr. Hatim Fakhruddin Kayumi",
    "designation": "ASSOCIATE PROFESSOR",
    "qualification": "Ph.D. (Commerce - Finance), M-SET, M.Phil., MBA (Finance), M.Com., B.Com.",
    "image": "/images/faculty/director-1.webp",
    "email": "hatimkayumi@gmail.com",
    "broadAreas": [
      "International Business",
      "Financial Management",
      "Indian Economy",
      "General Management"
    ],
    "specificAreas": [
      "Geopolitics & International Economics",
      "International Finance Management",
      "Indian Financial System",
      "Investment Management",
      "Corporate Governance"
    ],
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=Zy7lVRUAAAAJ",
    "researchPapersPublished": 32,
    "booksPublished": 2,
    "bookChaptersPublished": 3,
    "sponsoredResearchProjects": 3,
    "phdAwarded": 10,
    "phdScholarsInProcess": 1,
    "profileContent": "Dr. Hatim Fakhruddin Kayumi is a proficient academician, researcher, and management educator with over 25 years of experience across academia, research, industry, and administration. He holds a Ph.D. in Commerce (Mutual Fund Investments) from SPPU. He has published 32 research papers, authored 2 books, completed 2 research projects funded by BCUD SPPU, and holds a registered design patent for a Sustainable Finance Monitoring Device. He is an SPPU recognized Ph.D. Guide who has successfully guided 10 doctoral scholars."
  },
  {
    "id": 5,
    "name": "Dr. Mahesh P. Potdar",
    "designation": "ASSOCIATE PROFESSOR",
    "qualification": "Ph.D. (Organisation Management), MCM, MMS (Systems), LL.B., B.Sc.",
    "image": "/images/faculty/director-1.webp",
    "email": "maheshpotdar@rediffmail.com",
    "broadAreas": [
      "Computer Management",
      "Organizational Management"
    ],
    "specificAreas": [
      "Software Engineering",
      "Software Cost Estimation",
      "Project Management",
      "Cloud Computing",
      "Cyber Security"
    ],
    "orcidId": "0000-0001-6018-4110",
    "googleScholar": "https://scholar.google.com/citations?user=VpWOQd8AAAAJ&hl=en",
    "scopusId": "57522591000",
    "researchPapersPublished": 36,
    "phdAwarded": 1,
    "phdScholarsInProcess": 5,
    "profileContent": "Dr. Mahesh Potdar holds a Ph.D. in Organisation Management from Savitribai Phule Pune University and possesses multidisciplinary qualifications in Computer Management, Systems, Law, and Chemistry. With 26 years of teaching, 10 years of research, and 2 years of industry experience, he brings a rich blend of academic and professional expertise. He is a recognized Ph.D. Research Guide in Computer Management and Organisation Management."
  },
  {
    "id": 6,
    "name": "Dr. Manoj Shamrao Kulkarni",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "Ph.D. (Marketing Management), MBA, B.Sc.",
    "image": "/images/faculty/director-1.webp",
    "email": "mskmanoj@gmail.com",
    "broadAreas": [
      "Marketing Management",
      "Product & Brand Management"
    ],
    "specificAreas": [
      "Sales & Distribution Management",
      "Branding & Advertising Management",
      "Marketing 4.0 & 5.0",
      "Integrated Marketing Communication"
    ],
    "orcidId": "0009-0007-6133-0942",
    "googleScholar": "https://scholar.google.com/citations?user=uv1fugcAAAAJ&hl=en",
    "researchPapersPublished": 9,
    "booksPublished": 1,
    "bookChaptersPublished": 3,
    "sponsoredResearchProjects": 1,
    "profileContent": "Dr. Manoj Shamrao Kulkarni received his Ph.D. in Marketing Management from Savitribai Phule Pune University. Presently working as an Assistant Professor at IMSCD&R, he has 21 years of teaching and 2 years of corporate experience. He has published research papers in UGC CARE listed journals, authored books, published a patent, completed an SPPU BCUD research project, and served on the Ahmednagar District Consumer Protection Council."
  },
  {
    "id": 7,
    "name": "Dr. Pronoti V. Telore",
    "designation": "ASSOCIATE PROFESSOR & IN-CHARGE DIRECTOR",
    "qualification": "Ph.D. (Marketing), MBA (Marketing Management)",
    "image": "/images/faculty/director-1.webp",
    "email": "pronk70@yahoo.com",
    "broadAreas": [
      "Management",
      "Marketing Management",
      "Human Resource Management"
    ],
    "specificAreas": [
      "Marketing Strategy",
      "Human Resource Management",
      "Institutional Governance",
      "Academic Leadership"
    ],
    "orcidId": "0009-0006-8353-3612",
    "researchPapersPublished": 18,
    "booksPublished": 3,
    "sponsoredResearchProjects": 1,
    "phdAwarded": 3,
    "phdScholarsInProcess": 3,
    "profileContent": "Dr. Pronoti V. Telore is a management academic and leader with 25 years of service at IMSCD&R. Currently serving as In-Charge Director and former Head of the MBA Department, she brings 8 years of prior corporate experience. She is an SPPU-approved Research Guide with 18 published research papers, actively involved in NAAC accreditation, university duties, and institutional governance."
  },
  {
    "id": 8,
    "name": "Dr. Sanjay P. Bhakkad",
    "designation": "ASSOCIATE PROFESSOR",
    "qualification": "Ph.D., M.C.A., M.Sc.",
    "image": "/images/faculty/director-1.webp",
    "email": "sanjaybhakkad@rediffmail.com",
    "broadAreas": [
      "Programming Languages",
      "Logic Building",
      "Research Methodology"
    ],
    "specificAreas": [
      "Python Programming",
      ".NET Architecture",
      "Research Methodology",
      "Management Information Systems (MIS)"
    ],
    "orcidId": "0000-0002-3309-1119",
    "researchPapersPublished": 10,
    "profileContent": "Dr. Sanjay P. Bhakkad is an experienced academician with 26 years of professional experience (24 years in higher education and 2 years in industry). He holds an M.Sc., MCA, and Ph.D. from Savitribai Phule Pune University. His expertise includes Python Programming, .NET Architecture, MIS, and Research Methodology. He has served as a BOS Member and resource person for university FDPs."
  },
  {
    "id": 9,
    "name": "Dr. Sayyed Mudassar Nazir",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "Ph.D. (Management - HRM), UGC-NET, M-SET, MBS, PGDBM, M.Sc., B.Sc.",
    "image": "/images/faculty/director-1.webp",
    "email": "sayyed.mudassar@yahoo.com",
    "broadAreas": [
      "Operations Management",
      "Supply Chain Management",
      "General Management",
      "Human Resources Management"
    ],
    "specificAreas": [
      "Succession Planning",
      "World Class Manufacturing Practices",
      "Theory of Constraints",
      "Lean Management",
      "Materials Management"
    ],
    "orcidId": "0009-0002-8533-2567",
    "googleScholar": "https://scholar.google.com/citations?user=dwRDcjAAAAAJ&hl=en",
    "researchPapersPublished": 23,
    "booksPublished": 2,
    "bookChaptersPublished": 2,
    "profileContent": "Dr. Sayyed Mudassar Nazir is an accomplished academician and management educator with over 24 years of combined experience across academia, research, and industry. He holds a Ph.D. in Management from SPPU focused on Succession Planning in Family-Owned Enterprises. He holds a UK Design Patent for an AI-Powered Supply Chain Device and has received multiple Best Teacher Awards."
  },
  {
    "id": 10,
    "name": "Dr. Shradha S. Bhandari",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "Ph.D. (Commerce & Management), MBA (Finance), DTL, GDC&A, B.Com.",
    "image": "/images/faculty/director-1.webp",
    "email": "bhandari.shradha31@gmail.com",
    "broadAreas": [
      "Commerce",
      "Management",
      "Finance",
      "Banking",
      "Marketing"
    ],
    "specificAreas": [
      "Financial Management",
      "Accounting",
      "Business Economics",
      "Financial Services",
      "Digital Banking",
      "International Finance"
    ],
    "orcidId": "0009-0005-7843-7661",
    "googleScholar": "https://scholar.google.co.in/citations?user=6V7sVTUAAAAJ&hl=en",
    "researchPapersPublished": 8,
    "booksPublished": 1,
    "bookChaptersPublished": 2,
    "profileContent": "Dr. Shradha S. Bhandari is an Assistant Professor with over 9 years of teaching experience in Commerce and Management. She holds a Ph.D. in Commerce & Management from KBC North Maharashtra University focusing on retail consumer behavior. She has published 8 research papers, authored 1 textbook, and actively contributes to academic administration and student mentoring."
  },
  {
    "id": 11,
    "name": "Dr. Swati Barnabas",
    "designation": "LIBRARIAN",
    "qualification": "Ph.D. (Library & Information Science), M.Lib.I.Sc., M.Sc.",
    "image": "/images/faculty/director-1.webp",
    "email": "swatibarnabas1@imscdr.ac.in",
    "broadAreas": [
      "Library Management",
      "Information Literacy",
      "Digital Libraries"
    ],
    "specificAreas": [
      "Best Practices in Librarianship",
      "ICT Applications in Libraries",
      "Library Automation & AI",
      "Knowledge Resource Management"
    ],
    "orcidId": "0009-0008-7579-6708",
    "googleScholar": "https://scholar.google.co.in/citations?user=-nW_mbAAAAAJ&hl=en",
    "researchPapersPublished": 30,
    "booksPublished": 5,
    "bookChaptersPublished": 2,
    "sponsoredResearchProjects": 1,
    "profileContent": "Dr. Swati Barnabas has 30 years of professional experience in Library and Information Science. Serving as Librarian at IMSCD&R, she led the library to achieve Grade 'A' audits and the Best B-School Library Award. She received the SPPU Best Librarian Award 2023 and AIMS International Outstanding Management Librarian Award 2019, publishing 30 research papers and 5 books."
  },
  {
    "id": 12,
    "name": "Prof. Gauri Patil",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "MCA, M.C.S., B.C.S.",
    "image": "/images/faculty/director-1.webp",
    "email": "gauri.generaluse@gmail.com",
    "broadAreas": [
      "Mobile Application Development",
      "Web Development",
      "Software Engineering"
    ],
    "specificAreas": [
      "Mobile Application Development",
      "Web Technologies",
      "UML & Object Oriented Design"
    ],
    "researchPapersPublished": 5,
    "sponsoredResearchProjects": 1,
    "profileContent": "Prof. Gauri Patil is an Assistant Professor in the Information Technology Department at IMSCD&R with over 20 years of teaching experience. She has contributed to SPPU curriculum framing for MCA programmes and served as Placement Coordinator, Student Mentor, and SEEDC Coordinator."
  },
  {
    "id": 13,
    "name": "Prof. Poonam Tiwari",
    "designation": "ASSISTANT PROFESSOR & RESEARCH SCHOLAR",
    "qualification": "MBA (Dual Specialization), B.Com., Ph.D. Scholar (CVMU)",
    "image": "/images/faculty/director-1.webp",
    "email": "poonampritamtiwari@gmail.com",
    "broadAreas": [
      "Management",
      "Finance",
      "Technical Analysis",
      "Stock Market",
      "Marketing"
    ],
    "specificAreas": [
      "Financial Management",
      "Indian Financial System",
      "Strategic Management",
      "Business Valuation",
      "Security Analysis & Portfolio Management"
    ],
    "orcidId": "0009-0001-6476-331X",
    "researchPapersPublished": 6,
    "profileContent": "Ms. Poonam Tiwari is an Assistant Professor and Research Scholar with over 9 years of teaching experience in Management. Currently pursuing her Ph.D. at Charutar Vidya Mandal University, she gained prior corporate experience with The Hindu Group and serves as a Board of Studies Member at Parul University."
  },
  {
    "id": 14,
    "name": "Prof. Sayali Sunil Torane",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "MBA (Digital Media Communication Marketing), BJMC, Biomedical Engineering Training",
    "image": "/images/faculty/director-1.webp",
    "email": "sayalitorane.me@gmail.com",
    "broadAreas": [
      "Business Administration & Marketing",
      "AI in Education & Digital Media",
      "Strategic Media Production"
    ],
    "specificAreas": [
      "Microeconomics & Demand Forecasting",
      "AI-Driven Video Production & Digital Branding",
      "Podcasting Curriculum",
      "SEO & Social Media Strategy"
    ],
    "profileContent": "Prof. Sayali Sunil Torane is a multi-disciplinary educator and strategist with over 13 years of cross-functional experience across higher education, digital marketing, and media production. She holds an MBA in Digital Media Communication Marketing from SPPU and has served as Executive Producer and Production Manager for networks like Star Pravah and Colors Marathi."
  },
  {
    "id": 15,
    "name": "Prof. Ajit Sanjay Kute",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "MCA (Master of Computer Applications)",
    "image": "/images/faculty/director-1.webp",
    "email": "ajitkute1111@gmail.com",
    "broadAreas": [
      "Computer Applications",
      "Information Technology",
      "Programming & Software Development",
      "Artificial Intelligence & Data Science"
    ],
    "specificAreas": [
      "C Programming",
      "Python Programming",
      "Java Programming",
      "PHP Programming",
      "Data Structures",
      "Computer Organization & Architecture"
    ],
    "profileContent": "Prof. Ajit Sanjay Kute is an Assistant Professor in Computer Applications with over 4 years of teaching experience. His expertise covers C, Python, Java, PHP, Data Science, AI, Machine Learning, and Computer Organization & Architecture."
  },
  {
    "id": 16,
    "name": "Prof. Ashwini Arun Barathe",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "MCA, BCA",
    "image": "/images/faculty/director-1.webp",
    "email": "ashwinitkl@gmail.com",
    "broadAreas": [
      "Computer Science",
      "Programming",
      "Software Development",
      "Information Technology"
    ],
    "specificAreas": [
      "C Programming",
      "Advanced C Programming",
      "C++",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems"
    ],
    "profileContent": "Prof. Ashwini Arun Barathe is an Assistant Professor with over 6 years of teaching experience in the BCA Department. She teaches undergraduate courses in C, C++, OOP, DBMS, and Web Technologies with emphasis on building strong programming logic."
  },
  {
    "id": 17,
    "name": "Prof. Ashwini Thorat",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "MCA, BCA",
    "image": "/images/faculty/director-1.webp",
    "email": "ashwinithorat@imscdr.ac.in",
    "broadAreas": [
      "Computer Science",
      "Database Systems",
      "Web Technologies"
    ],
    "specificAreas": [
      "Relational Database Management Systems",
      "SQL & PL/SQL",
      "Data Mining",
      "Web Development"
    ],
    "researchPapersPublished": 6,
    "profileContent": "Prof. Ashwini Thorat is an Assistant Professor in Computer Applications specializing in Database Systems, Data Warehousing, SQL Programming, and Web Applications."
  },
  {
    "id": 18,
    "name": "Prof. Sakshi Madhyan",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "MBA (Finance), BBA (Finance)",
    "image": "/images/faculty/director-1.webp",
    "email": "sakshimadhyan@imscdr.ac.in",
    "broadAreas": [
      "Commerce and Management",
      "Finance"
    ],
    "specificAreas": [
      "Financial Management",
      "Managerial Accounting",
      "Risk Management",
      "Digital Banking",
      "Organisational Behaviour"
    ],
    "researchPapersPublished": 4,
    "profileContent": "Prof. Sakshi Madhyan is an Assistant Professor in Management specializing in Financial Management, Managerial Accounting, Digital Banking, and Organizational Behavior."
  },
  {
    "id": 19,
    "name": "Prof. Shital Ashish Upadhyay (Nabariya)",
    "designation": "ASSISTANT PROFESSOR (BBA)",
    "qualification": "B.Ed., M.Com (Cost Accounting), MBA (Marketing), M.B.S. (Finance), P.G.D.B.M., B.Com.",
    "image": "/images/faculty/director-1.webp",
    "email": "shitalupadhyay@imscdr.ac.in",
    "broadAreas": [
      "Commerce",
      "Management",
      "Business Administration"
    ],
    "specificAreas": [
      "Business Analytics",
      "Cost Accounting",
      "Marketing Management"
    ],
    "researchPapersPublished": 6,
    "profileContent": "Ms. Shital Ashish Upadhyay (Nabariya) is an Assistant Professor in the BBA Department with postgraduate qualifications spanning Commerce, Marketing, Cost Accounting, and Business Analytics."
  },
  {
    "id": 20,
    "name": "Prof. Shruti M. Rao",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "MBA (Marketing & HR), BBA",
    "image": "/images/faculty/director-1.webp",
    "email": "shrutirao@imscdr.ac.in",
    "broadAreas": [
      "Marketing",
      "Human Resource Management",
      "Event Management"
    ],
    "specificAreas": [
      "Retail Marketing",
      "Advertising & Sales Promotion",
      "Human Resource Practices"
    ],
    "researchPapersPublished": 5,
    "profileContent": "Prof. Shruti M. Rao is an Assistant Professor with specialization in Marketing, HR, Retail Management, Event Management, and Advertising."
  },
  {
    "id": 21,
    "name": "Prof. Suresh Manohar Khanna",
    "designation": "ASSISTANT PROFESSOR & TRAINING AND PLACEMENT OFFICER",
    "qualification": "MBA (Human Resource Management), MBA (Marketing)",
    "image": "/images/faculty/director-1.webp",
    "email": "sureshkhanna@imscdr.ac.in",
    "broadAreas": [
      "Management & Placements",
      "Corporate Relations",
      "Alumni Engagement & Outreach"
    ],
    "specificAreas": [
      "Human Resource Management",
      "Marketing Management",
      "Placements & Corporate Relations",
      "Soft Skills & Communication"
    ],
    "profileContent": "Prof. Suresh Manohar Khanna serves as Assistant Professor and Training & Placement Officer at IMSCD&R, driving corporate relations, placement drives, industry partnerships, and soft skills training."
  },
  {
    "id": 22,
    "name": "Prof. Shubhangi Ashok Kharmate",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "MCA, BCA",
    "image": "/images/faculty/director-1.webp",
    "email": "shubhangikharmate@imscdr.ac.in",
    "broadAreas": [
      "Computer Science",
      "Cyber Security",
      "Information Technology",
      "Software Engineering"
    ],
    "specificAreas": [
      "Network Security",
      "Java Programming",
      "Python Programming",
      "Software Testing"
    ],
    "researchPapersPublished": 3,
    "profileContent": "Ass. Prof. Shubhangi Ashok Kharmate is an Assistant Professor in Computer Applications focusing on Cyber Security, Java & Python Programming, and Network Security."
  },
  {
    "id": 23,
    "name": "Prof. Swati Vaibhav Thombare",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "MCA, BCA",
    "image": "/images/faculty/director-1.webp",
    "email": "swatithombare@imscdr.ac.in",
    "broadAreas": [
      "Web Technology",
      "Software Applications",
      "Database Management Systems",
      "Discrete Mathematics"
    ],
    "specificAreas": [
      "Web Technologies (HTML, CSS, JavaScript)",
      "Discrete Mathematics",
      "Linear Algebra"
    ],
    "researchPapersPublished": 4,
    "profileContent": "Swati Vaibhav Thombare is an Assistant Professor in the BCA Department specializing in Web Technologies, Discrete Mathematics, and Database Management."
  },
  {
    "id": 24,
    "name": "Dr. Rucha Tandulwadkar",
    "designation": "ASSOCIATE PROFESSOR",
    "qualification": "Ph.D. (Marketing Management), MBA, BCS, BJ",
    "image": "/images/faculty/director-1.webp",
    "email": "ruchatandulwadkar@imscdr.ac.in",
    "broadAreas": [
      "Economics",
      "Entrepreneurship",
      "Marketing Management"
    ],
    "specificAreas": [
      "Entrepreneurship Development",
      "Innovation & Start-up Ecosystem",
      "Digital Marketing"
    ],
    "researchPapersPublished": 16,
    "booksPublished": 2,
    "phdAwarded": 1,
    "profileContent": "Dr. Rucha Tandulwadkar is an Associate Professor specializing in Marketing Management, Entrepreneurship Development, and Innovation Ecosystems."
  },
  {
    "id": 25,
    "name": "Prof. Supriya G. Sapa",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "M.Tech (Information Technology), B.E. (Computer Science & Engineering)",
    "image": "/images/faculty/director-1.webp",
    "email": "sapasupriya@gmail.com",
    "broadAreas": [
      "Computer Science",
      "Information Technology",
      "Artificial Intelligence"
    ],
    "specificAreas": [
      "Machine Learning",
      "Artificial Intelligence",
      "Digital Health",
      "Healthcare Data Analytics",
      "Insurance Analytics"
    ],
    "orcidId": "0009-0008-1631-6970",
    "googleScholar": "https://scholar.google.com/citations?view_op=new_profile&hl=en",
    "researchPapersPublished": 20,
    "booksPublished": 3,
    "bookChaptersPublished": 1,
    "sponsoredResearchProjects": 1,
    "profileContent": "Ms. Supriya Sapa is an academician with over 20 years of teaching experience in Computer Science and IT. She is pursuing her Ph.D. in Information Technology at MGM University, focusing on Artificial Intelligence and Machine Learning in Digital Health and Insurance Analytics."
  },
  {
    "id": 26,
    "name": "Prof. Abhishek Subhash Kawane",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "UGC-NET, MH-SET, MCA (Commerce & Management), B.C.S.",
    "image": "/images/faculty/director-1.webp",
    "email": "abhishekkawane@imscdr.ac.in",
    "broadAreas": [
      "Computer Science",
      "Information Technology",
      "Software Engineering"
    ],
    "specificAreas": [
      "Web Technologies",
      "Database Management Systems",
      "Software Development"
    ],
    "researchPapersPublished": 5,
    "profileContent": "Mr. Abhishek Subhash Kawane is an Assistant Professor qualified in UGC-NET and MH-SET with expertise in Computer Applications, Database Management Systems, and Web Applications."
  },
  {
    "id": 27,
    "name": "Prof. Utkarsha R. Dethe",
    "designation": "ASSISTANT PROFESSOR",
    "qualification": "MCS, MCA, SET (Computer Science & Application)",
    "image": "/images/faculty/director-1.webp",
    "email": "detheutkarsha@gmail.com",
    "broadAreas": [
      "Computer Science & Application",
      "Information Technology",
      "Artificial Intelligence",
      "Machine Learning"
    ],
    "specificAreas": [
      "Knowledge Representation & AI",
      "Machine Learning",
      "Deep Learning",
      "Algorithms",
      "Data Structures",
      "Software Testing"
    ],
    "researchPapersPublished": 3,
    "sponsoredResearchProjects": 1,
    "profileContent": "Ms. Utkarsha R. Dethe has been serving as an Assistant Professor since 2007 with nearly two decades of experience in higher education. She holds an MCS, MCA, SET, and is pursuing her Ph.D. Her interests include AI, Deep Learning, Algorithms, and Student Mentoring."
  }
];
