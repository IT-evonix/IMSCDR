// export interface Faculty {
//   id: number;
//   category:
//   | "Administration"
//   | "Faculty - Information Technology"
//   | "Faculty - Management Programme"
//   | "BCA Staff"
//   | "BBA Staff"
//   | "Library-Staff"
//   | "Technical-Support";
//   // Basic Details
//   name: string;
//   designation: string;
//   qualification: string;
//   image: string;
//   email: string;

//   // Research Areas
//   broadAreas: string[];
//   specificAreas: string[];

//   // Research Profile
//   orcidId?: string;
//   googleScholar?: string;
//   scopusId?: string;

//   // Publications
//   researchPapersPublished?: number | string;
//   booksPublished?: number | string;
//   bookChaptersPublished?: number | string;
//   sponsoredResearchProjects?: number | string;

//   // Research Guidance
//   researchGuidance?: string;
//   phdAwarded?: number | string;
//   phdScholarsInProcess?: number | string;
//   patents?: number | string;

//   // Description
//   profileContent: string;
// }

export interface Faculty {
  id: number;

  category:
    | "Administration"
    | "Admin Team"
    | "Faculty - Information Technology"
    | "Faculty - Management Programme"
    | "BCA Staff"
    | "BBA Staff"
    | "Library-Staff"
    | "Technical-Support";

  // Basic Details
  name: string;
  designation: string;
  image: string;

  // Optional Details
  qualification?: string;
  email?: string;

  // Research Areas
  broadAreas?: string[];
  specificAreas?: string[];

  // Research Profile
  orcidId?: string;
  googleScholar?: string;
  scopusId?: string;

  // Publications
  researchPapersPublished?: number | string;
  booksPublished?: number | string;
  bookChaptersPublished?: number | string;
  sponsoredResearchProjects?: number | string;

  // Research Guidance
  researchGuidance?: string;
  phdAwarded?: number | string;
  phdScholarsInProcess?: number | string;
  patents?: number | string;

  // Description
  profileContent?: string;
  number?:string;
}

export const facultyData: Faculty[] = [
  {
    "id": 1,
    category: "Administration",
    "name": "Dr. Pronoti V. Telore",
    "designation": "In-Charge Director",
    "qualification": "PhD (Marketing), MBA (Marketing Management)",
    "image": "/images/faculty/In-Charge-director.webp",
    "email": "pronk70@yahoo.com",
    "broadAreas": [
      "Management"
    ],
    "specificAreas": [
      "Marketing and Human Resource Management"
    ],
   
    
    "profileContent": "A Management academic and a leader with 25 years at IMSCD&R Currently serving as an In - Charge Director, former Head of the MBA Department, supported by 8 years of prior Corporate experience. An SPPU-approved Research Guide with 18 published research papers and a strong record across teaching, research supervision, accreditation, and institutional governance. Experienced in leading academic departments, managing change, and building systems that endure, with direct involvement in NAAC accreditation, University-level academic duties, and statutory committees across the BPHE Society. Committed to building IMSCD&R into a leading Management institute for emerging India, grounded in academic rigour, inclusive excellence, and strong industry connect."
  },
  {
    "id": 2,
    category: "Administration",
    "name": "Vikram P. Barnabas",
    "designation": "Deputy Director",
    "qualification": "Ph.D",
    "image": "/images/faculty/dy-director.webp",
    "email": "deputydirector@imscdr.ac.in",
  },



// Technical Support ---------------------------------------
  {
    "id": 1,
    category: "Admin Team",
    "name": "Mahesh Dixit",
    "designation": "Office Superintendent",
    "image": "/images/faculty/Mahesh-Dixit.png",
    "email": "exam@imscdr.ac.in",
    "number": "9272125106"
  },
  {
    "id": 2,
    category: "Admin Team",
    "name": "C. D. Mohite",
    "designation": "Clerk (B. A. LLB)",
    "image": "/images/faculty/C-D-Mohite.png",
    "email": "admission@imscdr.ac.in",
    "number": "9850642379"
  },
  {
    "id": 3,
    category: "Admin Team",
    "name": "Dipak Tungar",
    "designation": "Sr. Clerk",
    "image": "/images/faculty/Dipak-Tungar.png",
    "email": "scholorship@imscdr.ac.in",
    "number": "9766618195"
  },




  // Faculty - Management Programme Start Here
  {
    "id": 1,
    category: "Faculty - Management Programme",
    "name": "Vikram P. Barnabas",
    "designation": "Deputy Director",
    "qualification": "Ph.D",
    "image": "/images/faculty/dy-director.webp",
    "email": "deputydirector@imscdr.ac.in",
  },
  {
    "id": 2,
    category: "Faculty - Management Programme",
    "name": "Dr. Hatim Fakhruddin Kayumi",
    "designation": "Associate Professor, H.O.D",
    "qualification": "Ph. D. (Commerce, Finance): S. P. Pune University, M – SET (Commerce), M. Phil. (Commerce): Y.C.M.O.U Nashik, M.B.A. (Finance): Y.C.M.O.U Nashik, M. Com. (Cost Accounting): S. P. Pune University, B. Com. (Cost Accounting): S. P. Pune University",
    "image": "/images/faculty/Hatim-Kayyumi.png",
    "email": "hatimkayumi@gmail.com",
    "broadAreas": [
      "International Business",
      "Financial Management",
      "Indian Economy",
      "General Management"
    ],
    "specificAreas": [
      "Geopolitics and International Economics",
      "International Finance Management",
      "Indian Financial System",
      "Financial Markets and Banking",
      "Investment Management",
      "Corporate Governance"
    ],
    "googleScholar": "https://scholar.google.com/citations?hl=en&user=Zy7lVRUAAAAJ",
    "researchPapersPublished": 32,
    "booksPublished": 2,
    "bookChaptersPublished": 3,
    "sponsoredResearchProjects": "3",
    "researchGuidance": "Recognized Ph. D. Guide under Faculty of Commerce and Management, S. P. Pune University (in Financial Management and Organizational Management)",
    "phdAwarded": "10",
    // "phdScholarsInProcess": "1 (Organizational Management)",
    "phdScholarsInProcess": "1",
    // "patents": "Registered design patent on 'SUSTAINABLE FINANCE MONITORING AND INVESTMENT ANALYSIS DEVICE' (Design No.: 495732-001),Date of Issue: 24th June 2026.",
    "patents": "1",
    "profileContent": "Dr. Hatim Fakhruddin Kayumi is a proficient academician, researcher, and management educator with extensive and rich experience of over 25 years in academia, research, industry and administration.\n\nHe holds a Ph. D. in Commerce (Mutual Fund Investments) from Savitribai Phule Pune University. He possesses diverse academic qualifications, including M-SET (Commerce), M.Phil. in Commerce, MBA (Finance), M.Com. (Cost Accounting), and B.Com. (Cost Accounting).\n\nHe is committed to integrating contemporary global business developments with classroom teaching and research, enabling students to develop analytical thinking and practical managerial competencies.\n\nHe has made significant contributions to academic and management research, having published 32 research papers and authored two books. He has presented several research papers in national and international conferences and published research articles and case studies in conference proceedings.\n\nHis research accomplishments include the successful completion of two research projects funded by BCUD, S. P. Pune University, and the submission of one research project funded by the Indian Council of Social Science Research (ICSSR), New Delhi.\n\nA recognized Ph.D. Guide under the Faculty of Commerce and Management, Pune University, he has successfully guided ten doctoral scholars to the award of Ph. D. degrees in the disciplines of Financial Management and Organizational Management. He has successfully registered a design patent. His doctoral research work has been awarded with ‘Best Ph. D. Thesis’ by the PIM, Gwalior.\n\nHis academic pursuits are driven by passion for quality education, impactful research, ethical leadership, and the promotion of sustainable financial and management practices. Through his teaching, research, and mentorship, he continues to contribute meaningfully to the advancement of higher education and the development of future business leaders."
  },
  {
    "id": 3,
    category: "Faculty - Management Programme",
    "name": "Dr. Rucha Tandulwadkar",
    "designation": "Associate Professor",
    "qualification": "Ph.D. : Marketing Management from S.P.Pune University, Master's Degree MBA in Marketing and Human Resource, Bachelor's Degree Bachelor in Computer Science, Other Professional Qualifications Bachelor in Journalism",
    "image": "/images/faculty/Rucha-Tandulwadkar.png",
    "email": "ruchaveda@gmail.com",
    "broadAreas": [
      "Economics",
      "Entrepreneurship",
      "Marketing Management"
    ],
    "specificAreas": [
      "Entrepreneurship Development",
      "Innovation and Start-up Ecosystem",
      "Small Business Management",
      "Women Entrepreneurship",
      "Digital Marketing",
      "Tourism Marketing"
    ],
    "orcidId": "https://orcid.org/0009-0003-7748-5202",
    "researchPapersPublished": 22,
    "booksPublished": 1,
    "sponsoredResearchProjects": 1,
    "researchGuidance": "Recognized Ph.D. Guide with expertise in Marketing Management and Entrepreneurship",
    "phdAwarded": 1,
    "phdScholarsInProcess": 3,
    "profileContent": "Dr. Rucha Tandulwadkar is a distinguished academician, researcher, Ph.D. guide, and management educator with over two decades of experience in higher education. Her expertise lies in Economics, Entrepreneurship, Marketing Management, and Women Entrepreneurship, with a strong focus on fostering innovation, entrepreneurial thinking, and sustainable development through learner-centric and experiential teaching practices.\n\nHer research interests include Entrepreneurship Development, Women Entrepreneurship and Marketing Management. As a recognized Ph.D. guide, she has successfully guided one doctoral scholar to completion, while four research scholars are currently pursuing their Ph.D. under her supervision. Dr. Tandulwadkar received a research grant from Savitribai Phule Pune University to study the challenges and opportunities of Self-Help Groups. She has presented and published research papers at numerous national and international conferences and journals and has been honoured with two Best Research Paper Awards for her scholarly contributions.\n\nBeyond academics, Dr. Tandulwadkar serves as the Coordinator of the Skill Enhancement and Entrepreneurship Development Centre (SEEDC), where she actively nurtures entrepreneurial aspirations among students and promotes women empowerment through training, mentoring, networking initiatives, and industry-academia collaborations. She also coordinates the IMS Academy of Fine and Performing Arts (AFPA), where she has introduced new academic programmes, strengthened student participation, and contributed to the promotion of Indian classical dance and cultural education. Her unwavering commitment to academic excellence, research, entrepreneurship, and holistic student development continues to create a lasting impact on higher education.\n\nHer Academic contribution and women empowerment work has been recognized by several institutions which include Best Teacher Award and Vocational Excellence Award"
  },
  {
    "id":4,
    category: "Faculty - Management Programme",
    "name": "D. A. Kulkarni",
    "designation": "Assistant Professor",
    "qualification": "M.Com., C.A.",
    "image": "/images/faculty/D-A-Kulkarni.png",
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
    "profileContent": "Prof. (CA) DNYANESH A. KULKARNI is having huge experience in the area of Financial Management, Management Accounting & Taxation at Institute of Management Studies Career Development & Research, Ahmednagar of Savitribai Phule Pune University, Pune. He is having academic experience of 25 years at graduate & post- graduate level. He is also having Professional & Industrial experience of 25 years. He has completed his masters in Commerce. He is a fellow member of Institute of Chartered Accountants of India and is a former Chairman of Ahmednagar Branch of WIRC of ICAI. He is an Accredited Management Teacher by AIMA, New Delhi. He was on panel of 'Financial Education Resource Person' of SEBI form 2010- 2016. He has also conducted various training sessions for corporates on various topics. His areas of interest are Finance, Accountancy, Economics, Investments and Taxation. He is a co-author of three books published by Nirali Prakashan. He is column writer for Newspaper and has published more than 200 articles on various topics."
  },
  {
    "id": 5,
    category: "Faculty - Management Programme",
    "name": "Ashwini Thorat",
    "designation": "Assistant Professor",
    "qualification": "Ph.D. in Marketing (Pursuing) from Charutar Vidya Mandal University (CVMU), Anand, Gujarat, MMS - Marketing, MBS - Human Resources Management",
    "image": "/images/faculty/Ashwini-Thorat.png",
    "email": "ashwini2721@yahoo.com",
    "broadAreas": [
      "Marketing Management",
      "Human Resource Management"
    ],
    "specificAreas": [
      "Basics of Marketing",
      "Marketing Management",
      "Consumer Behavior",
      "Employee Engagement",
      "Strategic Human Resource Management",
      "Human Resource Management"
    ],
    "orcidId": "https://orcid.org/0009-0003-6099-1301",
    "researchPapersPublished": 5,
    "sponsoredResearchProjects": 2,
    "profileContent": "Ms. Ashwini Thorat is an Assistant Professor and Research Scholar with over 30 years of professional experience, including 10 years of Industry experience and 20 years of teaching experience in management education. She is currently pursuing her Ph.D. in Marketing Management at Charutar Vidya Mandal University (CVMU), Anand, Gujarat.\n\nShe holds dual specialization in management education and possesses extensive expertise in both industry and academia, enabling her to bridge theoretical concepts with practical business applications. She has taught across PGDBM, MMS, MBS, MPM and MBA programs, delivering courses in Basics of marketing, Marketing Management, Employee Engagement, Strategic Human Resource Management, Consumer Behavior.\n\nShe actively participates in research, faculty development programs, curriculum design, and academic quality initiatives.\n\nIn addition to her teaching and research responsibilities, Ms. Thorat is actively involved in student mentoring, academic administration, university examination work, outcome-based education implementation, and institutional development activities. Her extensive industry exposure combined with her academic expertise enables her to provide students with practical insights and industry-oriented learning experiences. She remains committed to academic excellence, research, innovation, and the holistic development of future management professionals."
  },
  {
    "id": 6,
    category: "Faculty - Management Programme",
    "name": "Dr. Manoj Shamrao Kulkarni",
    "designation": "Assistant Professor",
    "qualification": "B.Sc., M.B.A., Ph.D.",
    "image": "/images/faculty/Manoj-Kulkarni.png",
    "email": "mskmanoj@gmail.com",
    "broadAreas": [
      "Marketing Management"
    ],
    "specificAreas": [
      "Sales & Distribution Mgt",
      "Branding & Advertising Mgt",
      "Marketing 4.0 & 5.0"
    ],
    "orcidId": "https://orcid.org/0009-0007-6133-0942",
    "googleScholar": "https://scholar.google.com/citations?user=uv1fugcAAAAJ&hl=en",
    "researchPapersPublished": 9,
    "booksPublished": 1,
    "bookChaptersPublished": 3,
    "sponsoredResearchProjects": 1,
    "patents": 1,
    "profileContent": "Dr. Manoj Shamrao Kulkarni received his Doctor of Philosophy (Ph.D) from Savitribai Phule Pune University in Marketing Management. He has completed MBA - Marketing Management from Shivaji University, Kolhapur. Presently, he is working as an Assistant Professor at Institute of Management Studies Career Development & Research, Ahmednagar. He has 21 years of Teaching and 2 years of corporate experience. His expertise lies in the core subjects such as Sales and Distribution Management, Product & Brand Management, Marketing 4.0 Consumerism, Marketing Management and Integrated Marketing Communication. He has published one E- book titled’ Consumer Protection Measures’. He has co-authored three books and published one patent. He has also published research papers in UGC CARE listed journals. He has completed one BCUD minor research project of S. P. Pune University. He was the member of Ahmednagar District Consumer Protection Council from 2014to 2017."
  },
  {
    "id": 7,
    category: "Faculty - Management Programme",
    "name": "Vijay Shinde",
    "designation": "Assistant Professor",
    "qualification": "MPM",
    "image": "/images/faculty/Vijay-Shinde.png",
    "email": "vijayshinde@imscdr.ac.in",
  },
  {
    "id": 8,
    category: "Faculty - Management Programme",
    "name": "Dr. Sayyed Mudassar",
    "designation": "Assistant Professor",
    "qualification": "Ph.D (Pursuing)",
    "image": "/images/faculty/Sayyed-Mudassar.webp",
    "email": "sayyedmudassar@imscdr.ac.in",
  },
  {
    "id": 9,
    category: "Faculty - Management Programme",
    "name": "Dr. Rahul K. Khandelwal",
    "designation": "Assistant Professor",
    "qualification": "Ph.D., LL.B., MMS, MBS, PGDBM, B.Com.",
    "image": "/images/faculty/Rahul-Khandelwal.png",
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
    "orcidId": "https://orcid.org/0000-0002-5217-4024",
    "googleScholar": "https://scholar.google.com/citations?user=3DwA9l4AAAAJ&hl=en",
    "scopusId": "https://www.scopus.com/authid/detail.uri?authorId=57219775811",
    "researchPapersPublished": 35,
    "booksPublished": 4,
    "bookChaptersPublished": 5,
    "sponsoredResearchProjects": 2,
    "phdAwarded": 3,
    "phdScholarsInProcess": 3,
    "patents": 3,
    "profileContent": "Dr Rahul Khandelwal faculty and Academic Research coordinator at Institute of Management Studies Career Development & Research, Ahilyanagar with 11 years of teaching experience.  He is recognized research guide from Savitribai   Phule Pune University in Marketing and Organizational Management with three research scholars awarded Ph.D. under his guidance. He is Co-director of two minor research projects sponsored by Ministry of Human Resource through Indian Council of Social Science Research.  He has published   research papers in ABDC /Scopus/UGC and peer-reviewed journals. He has presented research papers at major IIMs and attended FDP at IITs and IIMs in the country. His area of expertise is Marketing and general management."
  },
  {
    "id": 10,
    category: "Faculty - Management Programme",
    "name": "Dr. Harshvardhan Nandkishor Bhavsar",
    "designation": "Assistant Professor",
    "qualification": "Ph. D. (Management): R.T.M. Nagpur University, UGC NET (Management), MH SET (Management), M.B.A. (Marketing): PUMBA, S. P. Pune University, B. Sc. (Chemistry): S. P. Pune University,",
    "image": "/images/faculty/Harshvardhan-Bhavsar.png",
    "email": "harshvardhanbhavsar@yahoo.co.in",
    "broadAreas": [
      "Marketing Management",
      "Strategic Management",
      "Research ",
    ],
    "specificAreas": [
      "Marketing Strategy",
      "Marketing Research",
      "Services Marketing",
      "Consumer Behaviour",
      "Business Research Methodology",
      "Business Analytics",
    ],
    "orcidId": "https://orcid.org/0009-0007-7162-4346",
    "googleScholar": "https://scholar.google.com/citations?user=2Mu57UUAAAAJ&hl=en&oi=ao",
    "scopusId": "https://www.scopus.com/authid/detail.uri?authorId=60028671400",
    "researchPapersPublished":22,
    "sponsoredResearchProjects": "2",
    "booksPublished": 1,
    "bookChaptersPublished":2,
    "phdAwarded": 3,
    "phdScholarsInProcess":2,
    "patents":1,
    "researchGuidance":"Recognized Ph. D. Guide under Faculty of Commerce and Management, S. P. Pune University (in the subjects of Marketing Management)",
    "profileContent": "Dr. Harshvardhan N. Bhavsar is an accomplished academician, researcher, and management educator with 15 years of teaching experience. He currently serves as an Assistant Professor, where he also holds key academic and administrative responsibilities as the BBA Coordinator and College Examination Officer (CEO). He holds a Ph.D. in Management from R.T.M. Nagpur University, along with UGC-NET and MH-SET in Management. He completed his MBA in Marketing from PUMBA, S. P. Pune University. His areas of expertise include Marketing Strategy, Marketing Research, Services Marketing, Consumer Behaviour, Business Research Methodology, and Business Analytics. Dr. Bhavsar has 22 research papers, one book, and two book chapters to his credit. He is a recognized Ph.D. Guide under S. P. Pune University and has successfully guided three Ph.D. scholars who have completed their doctoral research, with two scholars currently pursuing their Ph.D. under his guidance. He has also been associated with two sponsored research projects sanctioned by the Indian Council of Social Science Research (ICSSR), New Delhi, and S. P. Pune University (SPPU). He has presented research papers at academic conferences organized by prestigious institutions including IIMs and IITs. His academic philosophy emphasizes research-driven teaching, critical thinking, practical learning, and the holistic development of students."
  },
  {
    "id": 11,
    category: "Faculty - Management Programme",
    "name": "Sakshi Madhyan",
    "designation": "Assistant Professor",
    "qualification": "Currently Pursuing Ph.D. (HRM), MBA (Finance), BBA (Finance)",
    "image": "/images/faculty/Sakshi-Madhyan.webp",
    "email": "madhyansakshi.08@gmail.com",
    "broadAreas": [
      "Commerce and Management"
    ],
    "specificAreas": [
      "Financial Management",
      "Managerial Accounting",
      "Current Trends and Cases in Finance",
      "Risk Management",
      "Digital Banking",
      "Organisational Behaviour",
      "Human Resource Management"
    ],
    "orcidId": "https://orcid.org/0009-0003-1308-9163",
    "researchPapersPublished": 2,
    "profileContent": "I am an Assistant Professor with an MBA specializing in Finance and I am currently pursuing Ph.D. at BPHES IMSCDR, (Affiliated to Savitribai Phule Pune University). My research focuses on Sustainable Human Resource Management (HRM) practices and Employee Engagement in Small and Medium Enterprises (SMEs). My academic interests include Human Resource Management, Organizational Behaviour, Financial Management andCurrent Trends and Cases in Finance. I teach courses in both Human Resource Management and Finance, integrating theoretical concepts with practical applications. I adopt innovative teaching methodologies such as case studies, role plays, flipped classrooms, and experiential learning to enhance student engagement. I have also presented Research Papers at National and International Conferences and actively participate in Faculty Development Programmes, workshops and seminars to continuously strengthen my academic and professional expertise."
  },
  {
    "id": 12,
    category: "Faculty - Management Programme",
    "name": "Pratap Gaikwad",
    "designation": "Assistant Professor",
    "qualification": "MBA",
    "image": "/images/faculty/Pratap-Gaikwad.png",
    "email": "pgaikwad@imscdr.ac.in",
  },
  {
    "id": 13,
    category: "Faculty - Management Programme",
    "name": "Poonam Tiwari",
    "designation": "Assistant Professor & Research Scholar",
    "qualification": "Pursuing Ph.D. in Management, Charutar Vidya Mandal University (CVMU), Anand, Gujarat, MBA (Dual Specialization), B.Com.",
    "image": "/images/faculty/PoonamTiwari.webp",
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
    "orcidId": "https://orcid.org/0009-0001-6476-331X",
    "researchPapersPublished": "More than 6",
    "profileContent": "Ms. Poonam Tiwari is an Assistant Professor and Research Scholar with over nine years of teaching experience in the field of Management. She is currently pursuing her Ph.D. in Management at Charutar Vidya Mandal University (CVMU), Anand, Gujarat. She holds an MBA with Dual Specialization and a Bachelor of Commerce (B.Com.), which together provide her with a strong academic foundation in management and commerce.\n\nPrior to her academic career, she gained valuable corporate experience with The Hindu Group, which strengthened her practical understanding of business operations and industry practices. Her teaching expertise spans Financial Management, Indian Financial System, Business Valuation, Technical Analysis, Stock Market, Research Methodology, Strategic Management, and Mentoring & Coaching for undergraduate and postgraduate students.\n\nHer research interests include Financial Management, Technical Analysis, Stock Market, Indian Financial System, Business Valuation, Higher Education, and Mentoring & Coaching. She has published more than six research papers in reputed national and international journals and actively participates in academic conferences, faculty development programmes, and research activities. She also serves as a Board of Studies (BoS) Member at Parul University, contributing to curriculum design and academic development.\n\nIn addition to teaching and research, Ms. Tiwari is committed to mentoring and coaching students, fostering their academic, professional, and personal growth. She actively contributes to academic administration, university examination responsibilities, institutional development initiatives, and quality assurance activities, reflecting her dedication to excellence in higher education and holistic student development."
  },  
  {
    "id": 14,
    category: "Faculty - Management Programme",
    "name": "Shruti M. Rao",
    "designation": "Assistant Professor",
    "qualification": "MBA (Dual Specialisation Marketing and HR), Certification course in Advertising, BBA. (Bachelors of Business Administration)",
    "image": "/images/faculty/ShrutiRao.webp",
    "email": "shrutithepopstar@gmail.com",
    "broadAreas": [
      "Marketing",
      "Human Resource",
      "Management",
      "Insurance",
      "Event Management",
      "Sales"
    ],
    "specificAreas": [
      "Retail Marketing",
      "Consumer Behaviour",
      "Business Liaison",
      "Sales and Distribution Management",
      "Modular Supply Chain",
      "Global HR Practices",
      "CRM",
      "Business Communication"
    ],
    "profileContent": "Ms. Shruti Rao is working as Assistant Professor and holds a Bachelor of Business Administration (BBA) and a Master of Business Administration (MBA) with dual specialization in Marketing and Human Resource Management. She has four years of professional experience in the insurance and marketing sectors where she gained practical expertise in strategic marketing, customer relationship management, business development and organizational practices. Her academic background complemented by industry experience enables her to effectively integrate theoretical concepts with practical business applications in the classroom. She has also served as a Certified Examiner for Savitribai Phule Pune University (SPPU) contributing to the university's examination and evaluation processes with professionalism and academic integrity. Her areas of academic interest include Marketing Management, Human Resource Management, Consumer Behaviour, Organizational Behaviour and Strategic Management. She is committed to fostering a student-centred learning environment, encouraging critical thinking and contributing to academic excellence through teaching, research, continuous learning and professional development."
  },
  {
    "id": 15,
    category: "Faculty - Management Programme",
    "name": "Suresh Manohar Khanna",
    "designation": "Assistant Professor & Training and Placement Officer.",
    "qualification": "MBA Human Resource Management , MBA Marketing",
    "image": "/images/faculty/SureshKhanna.webp",
    "email": "sureshkhanna3333@gmail.com, imscdr81@gmail.com",
    "broadAreas": [
      "Management and Commerce & Placements",
      "Corporate Relations",
      "Alumini Engagement & outreach",
      "Industry Outreach and Connect"
    ],
    "specificAreas": [
      "Human Resource Management.",
      "Marketing Management.",
      "Placements.",
      "Corporate Relations",
      "Alumini Engagement & outreach.",
      "Industry Outreach and Connect.",
      "Business Development & Lead Generation.",
      "Soft skills and Communication."
    ],
    "profileContent": "I am an Assistant Professor with an MBA specializing in Human resource management and Marketing.I am working with IMS since 2014 handling responsibilities which include but not limited to Placements, Alumni engagement and Outreach , collaboration and connect with the corporate’s , establishing, nurturing and building long term corporate relations for the betterment of the students in form of internships and placements . Conducting the placement sessions for the students which include practical learning, case studies , GD and PI preparation. Arranging the Industrial visits for the students to give them an exposure and real time know how of the corporate world. In short to make the students placement ready and to make them competent in the world of competition."
  },
  {
    "id": 16,
    category: "Faculty - Management Programme",
    "name": "Dr. Shradha S. Bhandari",
    "designation": "Assistant Professor",
    "qualification": "Ph.D. in Commerce & Management, MBA (Financial Management), Diploma in Taxation Laws (DTL), Government Diploma in Cooperation & Accountancy (GDC&A), B.Com. (Business Administration), Diploma in Interior Design & Decoration (De. IDD)",
    "image": "/images/faculty/ShradhaBhandari.webp",
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
      "Accounting & Financial Accounting",
      "Business Economics",
      "Financial Services",
      "Digital Banking",
      "International Finance",
      "Banking Operations",
      "Business Statistics & Business Mathematics",
      "Stock Market & Investment Management"
    ],
    "orcidId": "https://orcid.org/0009-0005-7843-7661",
    "googleScholar": "https://scholar.google.co.in/citations?user=6V7sVTUAAAAJ&hl=en",
    "researchPapersPublished": 8,
    "booksPublished": 1,
    "bookChaptersPublished": 2,
    "profileContent": "Dr. Shradha S. Bhandari is an Assistant Professor with over nine years of teaching experience in the fields of Commerce and Management. She holds a Ph.D. in Commerce & Management from Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon. Her doctoral research focused on consumer perception, buying behaviour, and spending patterns in the retail garment sector. She also holds an MBA in Financial Management along with professional qualifications in Taxation Laws and Government Diploma in Cooperation & Accountancy. Her teaching expertise includes Financial Management, Accounting, Financial Services, Business Economics, Digital Banking, International Finance, Banking Operations, Business Statistics, Business Mathematics, and Investment Management across undergraduate and postgraduate programmes. Her research interests include Consumer Behaviour, Retail Marketing, Financial Management, FinTech, Financial Inclusion, E-Commerce, and Sustainable Business Practices. She has published eight research papers in reputed national and international journals, authored one MBA textbook, contributed two book chapters, and presented research papers at national and international conferences. Alongside her academic and research contributions, she is actively involved in academic administration, university examination responsibilities, student mentoring, entrepreneurship development, and institutional quality initiatives, reflecting her commitment to excellence in higher education. In addition to her teaching and research, she actively contributes to academic administration, university examination responsibilities, student mentoring, entrepreneurship development, and institutional quality initiatives, reflecting her commitment to academic excellence and holistic student development."
  },
  
  


// Faculty - Information Technology Start Here------------------------ 
  {
    "id": 1,
    category: "Faculty - Information Technology",
    "name": "Dr. Mahesh P. Potdar",
    "designation": "Associate Professor, H.O.D - IT",
    "qualification": "MCM, MMS (System), Ph. D.",
    "image": "/images/faculty/Mahesh-Potdar.png",
    "email": "maheshpotdar@rediffmail.com",
    "broadAreas": [
      "Computer Management",
      "Organizational Management"
    ],
    "specificAreas": [
      "Computer Management"
    ],
    "orcidId": "https://orcid.org/0000-0001-6018-4110",
    "googleScholar": "https://scholar.google.com/citations?user=VpWOQd8AAAAJ&hl=en",
    "scopusId": "https://www.scopus.com/authid/detail.uri?authorId=57522591000",
    "researchPapersPublished": 36,
    "phdAwarded": 1,
    "phdScholarsInProcess": 5,
    "profileContent": "Dr. Mahesh Potdar holds a Ph.D. in Organisation Management from Savitribai Phule Pune University and possesses multidisciplinary qualifications in Computer Management, Systems, Management, Law, and Chemistry. With 26 years of teaching, 10 years of research, and 2 years of industry experience, he brings a rich blend of academic and professional expertise. He is a recognized Ph.D. Research Guide in Computer Management and Organisation Management and actively contributes to teaching, research, curriculum development, and academic administration.\n\nDr. Mahesh Potdar's research focuses on Software Engineering, Software Cost Estimation, Project Management, Cloud Computing, Cyber Security, Service-Oriented Architecture, and Digital Transformation. He has published 15 international research papers, presented 5 papers at national and international conferences, and successfully guided one Ph.D. scholar. He also conducts funded workshops, FDPs, and expert sessions, contributing significantly to research, innovation, and technology-driven."
  },
  {
    "id": 2,
    category: "Faculty - Information Technology",
    "name": "Dr. Anjali A. Vaidya",
    "designation": "Assistant Professor",
    "qualification": "",
    "image": "/images/faculty/Anjali-Vaidya.png",
    "email": "",
    "broadAreas": [
    
    ],
    "specificAreas": [
  
    ],
    "profileContent": "Dr. Anjali A. Vaidya is an accomplished academician with over 23 years of teaching experience in Computer Applications and Information Technology. She holds an M.Sc. in Physics (Electronics), MCA, and Ph.D. Throughout her career, she has served in key academic roles, including MCA Coordinator, Placement Coordinator, Alumni Association Coordinator, and Web In-charge, contributing to academic administration, student mentoring, and institutional development. She has also served Savitribai Phule Pune University (SPPU) as a Syllabus Framing Committee Member, Examiner, and Question Paper Setter. Her areas of interest include Artificial Intelligence, Natural Language Processing, Speech Technology, Web Technologies, Educational Technology, and Software Development. Dr. Vaidya is committed to fostering innovation, industry-academia collaboration, and outcome-based learning while mentoring students to become skilled professionals and lifelong learners."
  },  
  {
    "id": 3,
    category: "Faculty - Information Technology",
    "name": "Dr. Sanjay P. Bhakkad",
    "designation": "Associate Professor",
    "qualification": "M.Sc., M.C.A, Ph.D.",
    "image": "/images/faculty/Sanjay-Bhakkad.webp",
    "email": "sanjaybhakkad@rediffmail.com",
    "broadAreas": [
      "Programming Languages",
      "Logic building",
      "Research Methodology"
    ],
    "specificAreas": [
      "Python programming",
      ".Net architecture",
      "Research Methodology"
    ],
    "orcidId": "https://orcid.org/0000-0002-3309-1119",
    "researchPapersPublished": 10,
    "profileContent": "Dr. Sanjay Bhakkad is an experienced academician with 26 years of professional experience, including 2 years in industry  and 24 years in higher education. He holds an M.Sc., MCA, and Ph.D. from Savitribai Phule Pune University, Pune. His expertise spans Python Programming, .NET Architecture, Research Methodology,  Management Information Systems (MIS) and Computer Architecture. Over the years, he has actively contributed to curriculum development, academic administration, and student mentoring, fostering academic excellence and outcome-based learning. His research interests include Computer Applications, Management Information Systems (MIS), and Logical Thinking. He has published 10 research papers in reputed journals and conferences. Dr. Bhakkad has also served as a Board of Studies (BOS) Member and resource person for universities and affiliated institutes. He has delivered expert sessions, workshops, faculty development programs, and academic training initiatives aimed at strengthening teaching-learning practices and promoting a vibrant research culture in higher education institutions."
  },
  {
    "id": 4,
    category: "Faculty - Information Technology",
    "name": "Utkarsha R. Dethe",
    "designation": "Assistant Professor",
    "qualification": "MCS,MCA,SET(Computer Science & Application).",
    "image": "/images/faculty/Utkarsha-Dethe.png",
    "email": "detheutkarsha@gmail.com",
    "broadAreas": [
      "Computer Science and Application",
      "Information Technology",
      "Artificial Intelligence",
      "Machine Learning"
    ],
    "specificAreas": [
      "Knowledge Representation & Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Design and Analysis of Algorithms",
      "Data Structures",
      "Software Testing & Quality Assurance",
      "JavaScript",
      "Programming"
    ],
    "researchPapersPublished": 3,
    "sponsoredResearchProjects": "1",
    "profileContent": "Ms. Utkarsha R. Dethe has been serving as an Assistant Professor since 2007 and has nearly two decades of experience in higher education. She holds a Master's degree in Computer Science (MCS), a Master's degree in Computer Applications (MCA), and has qualified the State Eligibility Test (SET). She is currently pursuing her Ph.D. Her teaching and research interests include Artificial Intelligence, Knowledge Representation, Machine Learning, Deep Learning, Design and Analysis of Algorithms, Web Technologies, and Data Science.\n\nShe has taught a wide range postgraduate courses, including Knowledge Representation & AI:Machine Learning, Deep Learning, Design and Analysis of Algorithms, C++, Java, Data Structures, Advanced UNIX, Web Technologies, PHP, Software Testing & Quality Assurance, and Computer Organization and guided student internship projects.\n\nShe has actively participated in national and international conferences, presented research papers, and successfully completed a sponsored research project funded by BCUD. She has also contributed to curriculum development for the MCA Programme under the 2024 Pattern of Savitribai Phule Pune.\n\nApart from teaching and research, she actively contributes to institutional development by coordinating the Student Counselling and Mentorship Programme and serving on various institutional committees, including the IMS Newsletter Committee, Student Magazine Committee, and IMS Vidyarthini Manch. She remains committed to promoting academic excellence, research, and student-centric learning."
  },
  {
    "id": 5,
    category: "Faculty - Information Technology",
    "name": "Dr. Madhuri Godbole",
    "designation": "Assistant Professor",
    "qualification": "Ph.D",
    "image": "/images/faculty/Madhuri-Godbole.png",
    "email": "madhurigodbole@imscdr.ac.in",
  },
  {
    "id":6,
    category: "Faculty - Information Technology",
    "name": "Supriya G Sapa",
    "designation": "Assistant Professor",
    "qualification": "Master of Technology (Information Technology) , Bachelor of Engineering (Computer Science and Engineering)",
    "image": "/images/faculty/Supriya-Sapa.png",
    "email": "sapasupriya@gmail.com",
    "broadAreas": [
      "Computer Science"
    ],
    "specificAreas": [
      "Machine Learning",
      "AI",
      "Digital Health"
    ],
    "orcidId": "https://orcid.org/0009-0008-1631-6970",
    "googleScholar": "https://scholar.google.com/citations?view_op=new_profile&hl=en",
    "researchPapersPublished": 20,
    "booksPublished": 3,
    "bookChaptersPublished": 1,
    "sponsoredResearchProjects": 1,
    "profileContent": "Ms. Supriya Sapa is an academician with more than 20 years of teaching experience in the field of Computer Science and Information Technology. She is currently associated with Institute of Management Studies Career Development and Research (IMSCDR), Ahilyanagar, where she teaches postgraduate students. Over the years, she has been actively involved in teaching, mentoring students, curriculum development, project guidance, and various academic and institutional activities. Alongside her teaching career, Ms. Sapa is pursuing her Ph.D. in Information Technology at MGM University, Chhatrapati Sambhajinagar. Her research focuses on the application of Artificial Intelligence and Machine Learning in Digital Health and Insurance Analytics. Her areas of research include Machine Learning, Artificial Intelligence, Digital Health, Wearable Health Technologies, Healthcare Data Analytics, Predictive Analytics, Health Risk Assessment, Insurance Analytics, and Explainable AI. Through her teaching and research, she aims to bridge the gap between academic knowledge and practical applications, preparing students to address real-world challenges using emerging technologies."
  },
  {
    "id": 7,
    category: "Faculty - Information Technology",
    "name": "Gauri Patil",
    "designation": "Assistant Professor",
    "qualification": "B.C.S , M.C.S., M.C.A , Research Scholar",
    "image": "/images/faculty/gauri-patil.png",
    "email": "gauri.generaluse@gmail.com",
    "broadAreas": [
      "Mobile Application Development",
      "Web Development",
      "UML"
    ],
    "specificAreas": [
      "Mobile Application Development",
      "Web Development",
      "UML"
    ],
    "researchPapersPublished": 5,
    "sponsoredResearchProjects": 1,
    "profileContent": "Prof. Gauri Patil is an Assistant Professor in the Information Technology Department at BPHE Society's Institute of Management Studies, Career Development & Research (IMSCDR), Ahilyanagar, with over 20 years of teaching experience. She holds M.C.A., M.C.S., and B.C.S. degrees. Throughout her academic career, she has undertaken several key institutional responsibilities, including Placement Coordinator, Student Mentor, and active membership in the IMS SEEDC and Industry Interface Committee. At the university level, she has contributed as a Paper Setter and Examiner for SPPU and has actively participated in the curriculum development and syllabus framing for the MCA (Management) programme under both NEP and Non-NEP frameworks. She has also served as a Resource Person for Visual Basic .NET and has delivered career guidance sessions on \"Career Opportunities after 10th Standard\" for students at various Schools in Ahilyanagar. Her research interests include Cyber Security, Artificial Intelligence, and emerging technologies, with a focus on their applications in higher education and industry."
  },
  {
    "id": 8,
    category: "Faculty - Information Technology",
    "name": "Dr. Mudassar I Sayyed",
    "designation": "Assistant Professor",
    "qualification": "Ph. D. (Management, HRM), UGC NET (Management), M-SET (Management), MBS (Materials & Production), PGDBM (Materials & Production), M.Sc. (Biochemistry), B.Sc. (Chemistry), CPM, CPED, PGDSCM",
    "image": "/images/faculty/Sayyed-Mudassar-Nazir.webp",
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
    "orcidId": "https://orcid.org/0009-0002-8533-2567",
    "googleScholar": "https://scholar.google.com/citations?user=dwRDcjAAAAAJ&hl=en",
    "researchPapersPublished": 23,
    "booksPublished": 2,
    "bookChaptersPublished": 2,
    "patents": "UK Design Patent titled 'AI-POWERED SUPPLY CHAIN MANAGEMENT DEVICE' (Design No.: 6477012)",
    "profileContent": "Dr. Sayyed Mudassar Nazir is an accomplished academician, researcher, and management educator with over 24 years of combined experience spanning academia, research, and industry. He is currently serving as an Assistant Professor at the Institute of Management Studies, Career Development & Research (IMSCD&R), Ahilyanagar, where he has been contributing to management education since 2013. He holds a Ph.D. in Management (Human Resource Management) from Savitribai Phule Pune University, with his doctoral research focusing on Succession Planning in Family-Owned Enterprises. He is also qualified in UGC-NET and Maharashtra SET in Management and possesses multidisciplinary academic credentials in Operations Management, Supply Chain Management, Entrepreneurship Development, Project Management, and Biochemistry. His teaching and research interests encompass Operations and Supply Chain Management, Human Resource Management, Business Strategy, Lean Management, Theory of Constraints, World-Class Manufacturing Practices, and Family Business Management.Dr. Mudassar has established himself as an active researcher and academic contributor with 23 research publications, 13 conference presentations, 2 authored books, 2 book chapters, and a UK-registered Design Patent titled AI-Powered Supply Chain Management Device. He has been invited as a resource person by several universities and institutions, contributed to the MBA curriculum development of Savitribai Phule Pune University, and has coordinated and served on numerous institutional quality, research, admission, and accreditation committees. His academic excellence has been recognized through multiple distinctions, including the Best Teacher Award (2020 and twice in 2025), the Best Paper Presentation Award (2023), and several professional recognitions. Driven by a passion for quality education, research, innovation, and student development, Dr. Mudassar continues to bridge academic theory with industry practice while fostering critical thinking, ethical leadership, and lifelong learning among future management professionals."
  },
  {
    "id": 9,
    category: "Faculty - Information Technology",
    "name": "Abhishek Subhash Kawane",
    "designation": "Assistant Professor",
    "qualification": "UGC-NET, MH-SET, MCA(Commerce and Management), B.C.S.",
    "image": "/images/faculty/AbhishekKawane.webp",
    "email": "",
    "broadAreas": [
      
    ],
    "specificAreas": [
      
    ],
    "profileContent": ""
  },
  {
    "id": 10,
    category: "Faculty - Information Technology",
    "name": "Shubhangi Ashok Kharmate",
    "designation": "Assistant professor",
    "qualification": "MCA (Masters in computer Application), Certification course in Manual testing., BCA.",
    "image": "/images/faculty/Shubhangi-Kharmate.webp",
    "email": "kharmateshubhangi14@gmail.com",
    "broadAreas": [
      "Computer Science",
      "Cyber Security",
      "Information Technology.",
      "Software Engineering."
    ],
    "specificAreas": [
      "Network security",
      "Java programming",
      "Python programming"
    ],
    "profileContent": "I am Shubhangi Ashok Kharmate, working as an Assistant Professor in the Department of Computer Applications. I completed my Bachelor of Computer Applications (BCA) in 2019 and Master of Computer Applications (MCA) in 2022.\n\nMy academic background has provided me with a strong foundation in programming, software development, databases, data structures, and cyber security. I am committed to continuous learning and enhancing my teaching through practical, student-centric, and innovative methodologies.\n\nExperience \n\n I have teaching experience in undergraduate and postgraduate computer application programs. As an Assistant Professor, I teach subjects including Python Programming, Java Programming, and Cyber Security to MCA students.\n\nIn addition to teaching, I actively contribute to departmental and institutional activities such as academic coordination, student mentoring, practical sessions, technical events, cultural activities, documentation, and NAAC-related work. I believe in fostering an engaging learning environment that promotes analytical thinking, practical skills, and continuous professional development.\n\nResearch Interests \n\n My research interests include: \n\n - Cyber Security\n\n- Information Security\n\n- Network Security\n\n- Python Programming\n\n- Artificial Intelligence Applications in Cyber Security\n\n- Secure Software Development\n\n- Data Privacy and Digital Forensics\n\nI am interested in exploring emerging technologies and contributing to research through academic publications, conferences, and collaborative projects, with a particular focus on Cyber Security."
  },  

  
  




  
  // BBA Staff Start Here--------------------
    {
      "id": 1,
      category: "BBA Staff",
      "name": "Sayali Sunil Torane",
      "designation": "Assistant Professor",
      "qualification": "MBA in Digital Media Communication Marketing (Savitribai Phule Pune University), Bachelor of Journalism & Mass Communication (BJMC) (Tilak Maharashtra Vidyapeeth), Degree / Training in Biomedical Engineering, Diploma in Bharatanatyam, Advanced Certificate Course in Digital Marketing",
      "image": "/images/faculty/SayaliTorane.webp",
      "email": "sayalitorane.me@gmail.com",
      "broadAreas": [
        "Business Administration & Marketing Management",
        "AI in Education & Digital Media",
        "Strategic Media Production & Communication"
      ],
      "specificAreas": [
        "Microeconomics & Demand Forecasting",
        "AI-Driven Video Production & Digital Branding",
        "Podcasting Curriculum & Media Production Management",
        "Social Media Marketing & SEO Strategy",
        "Cross-Functional Business Development"
      ],
      "profileContent": "Prof. Sayali Sunil Torane is a multi-disciplinary educator and strategist with over 13 years of cross-functional experience bridging higher education, digital marketing, media production, and engineering technology. She holds a Master of Business Administration (MBA) in Digital Media Communication Marketing from Savitribai Phule Pune University, a Bachelor’s degree in Journalism & Mass Communication (BJMC), and a background in Biomedical Engineering. Complemented by a formal foundation in the classical arts with a Diploma in Bharatanatyam and advanced credentials in digital marketing, her diverse background brings a rich, multi-dimensional perspective to higher education.\n\nHer academic instruction focuses on business administration, microeconomics, demand forecasting, and digital marketing strategies. Beyond traditional pedagogy, Prof. Torane’s industry experience includes serving as a Executive Producer and Production Manager for prominent broadcast channels like Star Pravaha and Colors Marathi, as well as managing global business development projects utilizing emerging technologies like Virtual Reality.\n\nHer key research interests and creative practice center on the integration of Artificial Intelligence in educational frameworks, AI-driven video production, academic podcasting management, and search engine optimization (SEO). Prof. Torane is dedicated to developing hands-on, industry-aligned curricula that prepare students to navigate the evolving digital economy through strategic branding, media technology, and analytical problem-solving."
    },
    {
    "id": 2,
    category: "BBA Staff",
    "name": "Shital Ashish Upadhyay (Nabariya)",
    "designation": "Assistant Professor,(BBA)",
    "qualification": "B.Ed. (Mathematics & Geography), M.Com. (Cost Accounting), MBA (Marketing), M.B.S. (Financial Management), P.G.D.B.M. (Marketing Management), B.Com. (Costing)",
    "image": "/images/faculty/ShitalNabariya.webp",
    "email": "supadhyay97@gmail.com",
    "broadAreas": [
      "Commerce",
      "Management",
      "Business Administration"
    ],
    "specificAreas": [
      "Business Analytics",
      "Human Resource Management",
      "Organizational Behaviour",
      "Communication Skills",
      "Cost Accounting",
      "Financial Accounting",
      "Corporate Accounting",
      "Marketing Management",
      "Economics"
    ],
    "researchPapersPublished": "4",
    "profileContent": "Ms. Shital Ashish Upadhyay (Nabariya) is an Assistant Professor with 13 years of teaching experience in the fields of Commerce and Management. She holds a Master of Commerce (M.Com.) in Cost Accounting from Savitribai Phule Pune University, an MBA in Marketing from Dr. Babasaheb Ambedkar Marathwada University, an M.B.S. in Financial Management, a Post Graduate Diploma in Business Management (Marketing Management) from the University of Pune, and a Bachelor of Education (B.Ed.) from S.N.D.T. Women's University. Throughout her academic career, she has taught undergraduate and junior college students in a wide range of commerce and management subjects. Her teaching expertise includes Business Analytics, Human Resource Management, Organizational Behaviour, Communication Skills, Cost Accounting, Financial Accounting, Corporate Accounting, Marketing Management, Economics, and Business Communication. Her academic interests focus on Business Analytics, Accounting and Finance, Marketing, Human Resource Management, innovative teaching pedagogies, and the application of Artificial Intelligence in higher education. She has actively participated in Faculty Development Programmes, national conferences, workshops, and professional certification programmes to enhance her academic and professional competencies. In addition to her teaching responsibilities, she has served as Chairman and Member of University Paper Setting Panels, and actively contributes to institutional development through university examination work, student mentoring, seminar coordination, cultural activities, and admission and promotion initiatives. Her commitment to continuous learning, academic excellence, and student-centric teaching reflects her dedication to fostering quality higher education and holistic student development."
  },
  
  
  
  
  // BCA Staff Start Here--------------------------
  {
    "id": 1,
    category: "BCA Staff",
    "name": "Ajit Sanjay Kute",
    "designation": "Assistant Professor",
    "qualification": "Master of Computer Applications (MCA) in IMS, Ahmednagar",
    "image": "/images/faculty/AjitKute.webp",
    "email": "ajitkute1111@gmail.com",
    "broadAreas": [
      "Computer Application & Information Technology",
      "Programming and Software Development",
      "Artificial Intelligence & Data Science",
      "Database and Web Technologies"
    ],
    "specificAreas": [
      "C Programming",
      "Python Programming",
      "Java Programming",
      "PHP Programming",
      "Data Structures",
      "Computer Organization & Architecture",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Web Application Development",
      "Database Management Systems",
      "Lecture Planning and Practical Assignment Design"
    ],
    "profileContent": "Mr. Ajit Sanjay Kute is an Assistant Professor in the field of Computer Applications with over four years of teaching experience. His areas of expertise include Programming, Data Science, Artificial Intelligence, Machine Learning, and Computer Organization & Architecture. He is committed to academic excellence through effective teaching, student mentoring, and the integration of emerging technologies into Computer application education."
  },
  {
    "id": 2,
    category: "BCA Staff",
    "name": "Ashwini Arun Barathe",
    "designation": "Assistant Professor, Department of Bachelor of Computer Applications (BCA)",
    "qualification": "Master of Computer Applications (MCA), Bachelor of Computer Applications (BCA)",
    "image": "/images/faculty/BaratheAshwini.webp",
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
      "Software Engineering",
      "Database Management Systems (DBMS)",
      "Web Technologies",
      "Programming Logic and Problem Solving"
    ],
    "profileContent": "Prof. Ashwini Arun Barathe is an Assistant Professor with over six years of teaching experience in the Department of Bachelor of Computer Applications (BCA). She holds a Master of Computer Applications (MCA) and a Bachelor of Computer Applications (BCA). She is committed to providing quality education in computer science and information technology. She teaches undergraduate courses including C Programming, Advanced C Programming, C++, Object-Oriented Programming, Database Management Systems, and Web Technologies, with an emphasis on building strong programming fundamentals and problem-solving skills.\n\nHer academic interests include programming methodologies, software development, database systems, artificial intelligence, data analytics, and innovative teaching practices in computer science education. She actively mentors students, conducts career guidance and counselling sessions, and contributes to curriculum delivery and student development initiatives.\n\nIn addition to teaching, she is involved in academic coordination, certification courses, admission outreach programmes, and institutional activities. She regularly participates in faculty development programmes, and professional development initiatives to enhance her teaching skills and remain current with emerging technologies and educational practices."
  },
  {
    "id": 3,
    category: "BCA Staff",
    "name": "Swati Vaibhav Thombare",
    "designation": "Assistant Professor (BCA) Department",
    "qualification": "Master of Computer Application(MCA), Bachelor of Computer Application(BCA)",
    "image": "/images/faculty/SwatiThombare.webp",
    "email": "kulatswati@gmail.com",
    "broadAreas": [
      "Web Technology",
      "Software Development and Applications",
      "Database Management System",
      "Linear Algebra and Discrete Mathematics"
    ],
    "specificAreas": [
      "Web Technology(HTML,CSS,Javascript)",
      "Discrete Mathematics",
      "Linear Algebra",
      "C language",
      "C++",
      "Principles of Programming and Algorithm"
    ],
    "profileContent": "Prof. Swati Vaibhav Thombare is an Assistant Professor with over 10 years of teaching and industry experience in Computer Application. She holds a Master of Computer Applications (MCA) and a Bachelor of Computer Applications (BCA).\n\nShe has extensive teaching experience in undergraduate computer science courses, including Web Technology (HTML, CSS, JavaScript), Principles of Programming and Algorithms, C Programming, C++, Discrete Mathematics, and Linear Algebra. She is committed to providing quality education through practical, student-focused learning.\n\nHer areas of interest include Web Technology, Software Development, Programming, Discrete Mathematics, and Linear Algebra. She actively mentors students and participates in academic and professional development activities.\n\nIn addition to teaching, she contributes to academic coordination, certification programmes, admission outreach, and institutional activities. She regularly participates in Faculty Development Programmes (FDPs) and workshops to enhance her teaching skills and stay updated with emerging technologies."
  },

  
  
  
  
  
  
  
  // Library-Staff ---------------------------------------
  {
    "id": 1,
    category: "Library-Staff",
    "name": "Dr. Swati Barnabas",
    "designation": "Librarian",
    "qualification": "M.Sc.; M.lib.I.Sc. Ph.D (Library & Information Science)",
    "image": "/images/faculty/swatibarnabas.png",
    "email": "swatibarnabas1@imscdr.ac.in",
    "broadAreas": [
      "Library Management",
      "Organisation & innovative practices in Information Literacy"
    ],
    "specificAreas": [
      "Best Practices in Librarianship",
      "Research in Library and Information Science",
      "Information resources and Services",
      "Library Management and Organization",
      "Use and User Study"
    ],
    "orcidId": "https://orcid.org/0009-0008-7579-6708",
    "googleScholar": "https://scholar.google.co.in/citations?user=-nW_mbAAAAAJ&hl=en",
    "researchPapersPublished": 30,
    "booksPublished": 5,
    "bookChaptersPublished": 2,
    "sponsoredResearchProjects": "1",
    "profileContent": "Dr. Swati Barnabas has been associated with the field of Library and Information Science since 1995 and has three decades of professional experience. She has worked in academic, corporate, and special libraries and is presently serving as Librarian at the Institute of Management Studies (CD&R), Ahilyanagar, India. Under her leadership, the IMS Library has been awarded Grade 'A' in the Library Audit on two occasions and has successfully undergone both Internal and External Library Audits during 2020–21 and 2023–24. The IMS Library received the Best B-School Library Award 2013 from Discovery Education India Pvt. Ltd.\n\nShe has published 30 research papers in peer-reviewed national and international journals and has participated in 60 national and international conferences, seminars, workshops, and faculty development programmes. Her areas of expertise include Library Management, Library Organization, Information and Communication Technology (ICT) Applications in Libraries, Innovative Library Practices, Digital Library Services, Information Literacy Programmes, User Education, and Knowledge Resource Management. The area of expertise includes -Academic librarianship, digital libraries, information literacy, library automation, emerging technologies in libraries, and AI applications in library services. She is the recipient of the Outstanding Management Librarian Award conferred by AIMS International in 2019 and the prestigious Best Librarian Award from Savitribai Phule Pune University in 2023. These recognitions reflect her significant contributions to library management, innovation, and the advancement of library and information services.\n\nShe is frequently invited as a resource person for library and information science programmes, faculty development programmes, workshops, seminars, and conferences. She also serves as a judge for various academic and professional competitions and provides consultancy and guidance to college librarians on library management, NAAC documentation, ICT applications, and other library-related activities."
  },
  {
    "id": 2,
    category: "Library-Staff",
    "name": "Siraj Shaikh",
    "designation": "Assistant in Library",
    "image": "/images/faculty/Siraj-Shaikh.png",
  },
  {
    "id": 3,
    category: "Library-Staff",
    "name": "Jitin Adhav",
    "designation": "Assistant in Library",
    "image": "/images/faculty/Jitin-Adhav.png",
  },
  {
    "id": 4,
    category: "Library-Staff",
    "name": "Rajesh Kamble",
    "designation": "Assistant in Library",
    "image": "/images/faculty/Rajesh-Kamble.png",
  },


  // Technical Support ---------------------------------------
  {
    "id": 1,
    category: "Technical-Support",
    "name": "Pratap Gaikwad",
    "designation": "Additional Charge - Technical Support",
    "image": "/images/faculty/Pratap-Gaikwad.png",
  },
  {
    "id": 2,
    category: "Technical-Support",
    "name": "Kiran Sable",
    "designation": "Technician",
    "image": "/images/faculty/Kiran-Sable.png",
  },

];






