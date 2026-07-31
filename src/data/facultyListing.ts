export interface Faculty {
  id: number;
  name: string;
  designation?: string;
  image?: string;
  department?: string;
  qualification?: string;
  experience?: string;
  link: string;
}

export interface FacultyCardProps {
  faculty: Faculty;
  showImage?: boolean;
  showDesignation?: boolean;
  showButton?: boolean;
  buttonText?: string;
  onKnowMore?: (faculty: Faculty) => void;
}

export const facultyListing: Faculty[] = [
  {
    id: 1,
    name: "Dr. Rahul Deshpande",
    designation: "Professor",
    image: "/images/about/director.webp",
    department: "MBA",
    link: "/program-mba/faculty/dr-rajesh-patil",
  },
  {
    id: 2,
    name: "Dr. Neha Kulkarni",
    designation: "Associate Professor",
    image: "/images/about/director.webp",
    department: "MBA",
    link: "/program-mba/faculty/dr-rajesh-patil",
  },
  {
    id: 3,
    name: "Dr. Rahul Deshpande",
    designation: "Professor",
    image: "/images/about/director.webp",
    department: "MBA",
    link: "/program-mba/faculty/dr-rajesh-patil",
  },
  {
    id: 4,
    name: "Dr. Neha Kulkarni",
    designation: "Associate Professor",
    image: "/images/about/director.webp",
    department: "MBA",
    link: "/program-mba/faculty/dr-rajesh-patil",
  },
  {
    id: 5,
    name: "Dr. Rahul Deshpande",
    designation: "Professor",
    image: "/images/about/director.webp",
    department: "MBA",
    link: "/program-mba/faculty/dr-rajesh-patil",
  },
  {
    id: 6,
    name: "Dr. Neha Kulkarni",
    designation: "Associate Professor",
    image: "/images/about/director.webp",
    department: "MBA",
    link: "/program-mba/faculty/dr-rajesh-patil",
  }
];