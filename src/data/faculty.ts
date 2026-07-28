export interface Faculty {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  email: string;
  image: string;
  researchAreas: string[];
  specialization: string[];
  profileContent: string;
}

export const facultyData: Faculty[] = [
  {
    id: 1,
    name: "Prof. M. B. Mehta",
    designation: "Director (IMS - Ahmednagar)",
    qualification: "Ph.D",
    email: "director@imscdr.ac.in",
    image: "/images/faculty/director.webp",

    researchAreas: [
      "User Experience Design",

    ],

    specialization: [
      "UI Design",
    ],

    profileContent:
      "Dr. Amit Sharma has more than 15 years of teaching and research experience. His research focuses on User Experience Design, Interaction Design and Product Innovation."
  },

  {
    id: 2,
    name: "Dr. Neha Kulkarni",
    designation: "Associate Professor",
    qualification: "Ph.D., M.Des.",
    email: "neha.kulkarni@sit.edu",
    image: "/images/faculty/director.webp",

    researchAreas: [
      "Visual Communication",
      "Typography",
      "Brand Design",
    ],

    specialization: [
      "Graphic Design",
      "Digital Branding",
      "Illustration",
    ],

    profileContent:
      "Dr. Neha Kulkarni has worked with various international design studios. She specializes in Branding, Visual Communication and Creative Design."
  },

  {
    id: 3,
    name: "Prof. Rahul Patil",
    designation: "Assistant Professor",
    qualification: "M.Des.",
    email: "rahul.patil@sit.edu",
    image: "/images/faculty/director.webp",

    researchAreas: [
      "Motion Graphics",
      "Animation",
      "Digital Media",
    ],

    specialization: [
      "Motion Design",
      "Video Production",
      "After Effects",
    ],

    profileContent:
      "Prof. Rahul Patil teaches Motion Graphics and Digital Media. He has extensive industry experience in animation and visual storytelling."
  },

  {
    id: 4,
    name: "Prof. Sneha Joshi",
    designation: "Assistant Professor",
    qualification: "M.Des. (Industrial Design)",
    email: "sneha.joshi@sit.edu",
    image: "/images/faculty/director.webp",

    researchAreas: [
      "Industrial Design",
      "Furniture Design",
      "Sustainable Design",
    ],

    specialization: [
      "Product Development",
      "CAD",
      "Rapid Prototyping",
    ],

    profileContent:
      "Prof. Sneha Joshi works in Product Development and Sustainable Design with a focus on innovation and user-centered design."
  },

  {
    id: 5,
    name: "Dr. Vivek Deshmukh",
    designation: "Professor",
    qualification: "Ph.D., B.Arch., M.Plan.",
    email: "vivek.deshmukh@sit.edu",
    image: "/images/faculty/director.webp",

    researchAreas: [
      "Urban Design",
      "Architecture",
      "Smart Cities",
    ],

    specialization: [
      "Urban Planning",
      "Landscape",
      "Public Spaces",
    ],

    profileContent:
      "Dr. Vivek Deshmukh has worked on several national and international architecture projects and has published multiple research papers."
  },

  {
    id: 6,
    name: "Prof. Priya Mehta",
    designation: "Assistant Professor",
    qualification: "M.Des. (UX Design)",
    email: "priya.mehta@sit.edu",
    image: "/images/faculty/director.webp",

    researchAreas: [
      "UX Research",
      "Accessibility",
      "Service Design",
    ],

    specialization: [
      "Wireframing",
      "Usability Testing",
      "Figma",
    ],

    profileContent:
      "Prof. Priya Mehta specializes in UX Research, Accessibility and User Testing. She has worked on several enterprise products."
  }
];