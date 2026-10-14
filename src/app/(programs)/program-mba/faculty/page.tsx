import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBA Faculty at IMS-CDR Ahilyanagar | Expert Teaching Team",
  description: "Meet the experienced MBA faculty at IMS-CDR Ahilyanagar, featuring qualified professors and industry-focused educators supporting management learning and research.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-mba/faculty",
  },
  openGraph: {
    title: "MBA Faculty at IMS-CDR Ahilyanagar | Expert Teaching Team",
    description: "Meet the experienced MBA faculty at IMS-CDR Ahilyanagar, featuring qualified professors and industry-focused educators supporting management learning and research.",
    url: "https://imscdr.ac.in/program-mba/faculty",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MBA Faculty at IMS-CDR Ahilyanagar | Expert Teaching Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Faculty at IMS-CDR Ahilyanagar | Expert Teaching Team",
    description: "Meet the experienced MBA faculty at IMS-CDR Ahilyanagar, featuring qualified professors and industry-focused educators supporting management learning and research.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import FacultyCard from "@/components/FacultyCard";
import ExploreBtn from "@/components/ui/ExploreBtn";
import { facultyListing } from "@/data/facultyListing";

export default function FacultyPage() {
  return (
    <section className="innerpagerightside">
      <div className="faculty_listing_page">
        <div className="faculty-heading">
          <div className="heading">Faculty</div>
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
      </div>
    </section>
  );
}
