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
  // patents?: number;

  // Description
  profileContent: string;
}

export const facultyData: Faculty[] = [
  {
    id: 1,
    name: "Dr. Rahul K Khandelwal",
    designation: "ASSISTANT PROFESSOR",
    qualification: "Ph.D., LL.B., MMS, MBS, PGDBM, B.Com",
    image: "/images/faculty/director-1.webp",
    email: "khandelwalr29@gmail.com",

    broadAreas: [
      "Marketing Management",
      "Strategic Management",
      "General Management",
    ],

    specificAreas: [
      "Consumer Behavior",
      "International Marketing",
      "Rural Marketing",
      "Marketing Strategy",
      "Healthcare",
    ],

    orcidId: "0000-0002-5217-4024",
    googleScholar: "https://scholar.google.com/citations?user=3DwA9I4AAAAJ",
    scopusId: "57219775811",
    researchPapersPublished: 35,
    booksPublished: 4,
    bookChaptersPublished: 5,
    sponsoredResearchProjects: 2,
    researchGuidance: "",
    phdAwarded: 3,
    phdScholarsInProcess: 3,
    // patents: 3,
    profileContent:
      "Dr. Rahul K Khandelwal is an Assistant Professor with expertise in Marketing Management, Strategic Management, Consumer Behaviour, International Marketing and Healthcare. His academic interests include research, teaching and consultancy in marketing and management domains.",
  },
  {
    id: 2,
    name: "Dr. Rahul K Khandelwal",
    designation: "ASSISTANT PROFESSOR",
    qualification: "Ph.D., LL.B., MMS, MBS, PGDBM, B.Com",
    image: "/images/faculty/director-1.webp",
    email: "khandelwalr29@gmail.com",

    broadAreas: [
      "Marketing Management",
      "Strategic Management",
      "General Management",
    ],

    specificAreas: [
      "Consumer Behavior",
      "International Marketing",
      "Rural Marketing",
      "Marketing Strategy",
      "Healthcare",
    ],

    orcidId: "0000-0002-5217-4024",
    googleScholar: "https://scholar.google.com/citations?user=3DwA9I4AAAAJ",
    scopusId: "57219775811",
    researchPapersPublished: 35,
    booksPublished: 4,
    bookChaptersPublished: 5,
    sponsoredResearchProjects: 2,
    researchGuidance: "",
    phdAwarded: 3,
    phdScholarsInProcess: 3,
    // patents: 3,
    profileContent:
      "Dr. Rahul K Khandelwal is an Assistant Professor with expertise in Marketing Management, Strategic Management, Consumer Behaviour, International Marketing and Healthcare. His academic interests include research, teaching and consultancy in marketing and management domains.",
  },

];
