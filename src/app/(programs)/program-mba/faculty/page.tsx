import FacultyCard from "@/components/FacultyCard";
import ExploreBtn from "@/components/ui/ExploreBtn";
import { facultyListing } from "@/data/facultyListing";

export default function FacultyPage() {
  return (
    <section className="faculty_listing_page">
      <div className="faculty-heading">
        <div className="heading">Faculty Listing</div>
      </div>

      <div className="faculty-grid">
        {facultyListing.map((faculty) => (
          <FacultyCard
            key={faculty.id}
            faculty={faculty}
            showButton={false}
          />
        ))}
      </div>
      <div className="text-center">
        <ExploreBtn href="/faculty" text="Explore More" />
      </div>
    </section>
  );
}
