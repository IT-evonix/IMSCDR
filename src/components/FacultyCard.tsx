import { Faculty } from "@/data/facultyListing";
import ExploreBtn from "./ui/ExploreBtn";

interface FacultyCardProps {
  faculty: Faculty;
  showButton?: boolean;
}

export default function FacultyCard({
  faculty,
  showButton = false,
}: FacultyCardProps) {
  return (
    <div className="faculty-card">
      <div className="faculty-image-box">
        <img src={faculty.image} alt={faculty.name} />
      </div>

      <div className="faculty_listing_content">
        <div className="subheading">{faculty.name}</div>

        <p className="faculty-designation">{faculty.designation}</p>

        <div className="faculty-info">
          <span>{faculty.qualification}</span>
          <span>{faculty.experience}</span>
        </div>

        {showButton && faculty.link && (
          <ExploreBtn
            href={faculty.link}
            text="Know More"
          />
        )}
      </div>
    </div>
  );
}