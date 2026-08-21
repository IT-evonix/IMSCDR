import Image from "next/image";
import { Faculty } from "@/data/facultyListing";
import ExploreBtn from "./ui/ExploreBtn";

interface FacultyCardProps {
  faculty: Faculty;
  showButton?: boolean;
  education?: string;
}

export default function FacultyCard({
  faculty,
  showButton = false,
}: FacultyCardProps) {
  return (
    <div className="faculty-card">
      <div className="faculty-image-box">
        <Image
          src={faculty.image || "/images/about/director.webp"}
          alt={faculty.name}
          width={150}
          height={150}
        />
      </div>

      <div className="faculty_listing_content">
        <div className="subheading">{faculty.name}</div>

        <p className="faculty-designation">{faculty.designation}</p>
        <p className="faculty-education">{faculty.education}</p>

        {/* <div className="faculty-info">
          <span>{faculty.qualification}</span>
          <span>{faculty.experience}</span>
        </div> */}

        {/* {showButton && faculty.link && (
          <ExploreBtn
            href={faculty.link}
            text="Know More"
          />
        )} */}
      </div>
    </div>
  );
}