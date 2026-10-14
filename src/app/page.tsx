import type { Metadata } from "next";
import Herovideo from "@/components/homepage/Herovideo";
import Ranking from "@/components/homepage/ranking";
import AboutUs from "@/components/homepage/AboutUs";
import CoursesWeOffer from "@/components/homepage/CoursesWeOffer";
import ExcellentPlacements from "@/components/homepage/ExcellentPlacements";
import MilestonesAndAchievements from "@/components/homepage/MilestonesAndAchievements";
import OurTrustedRecruiters from "@/components/homepage/OurTrustedRecruiters";
import OurTestimonials from "@/components/homepage/OurTestimonials";
import CampusLife from "@/components/homepage/CampusLife";

export const metadata: Metadata = {
  title: "IMS-CDR Ahilyanagar | Institute of Management Studies",
  description:
    "Explore IMS-CDR Ahilyanagar, a leading Institute of Management Studies offering industry-focused programs. Apply for IMS admission and build your future.",
  alternates: {
    canonical: "https://imscdr.ac.in",
  },
  openGraph: {
    title: "IMS-CDR Ahilyanagar | Institute of Management Studies",
    description:
      "Explore IMS-CDR Ahilyanagar, a leading Institute of Management Studies offering industry-focused programs. Apply for IMS admission and build your future.",
    url: "https://imscdr.ac.in",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS-CDR Ahilyanagar | Institute of Management Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS-CDR Ahilyanagar | Institute of Management Studies",
    description:
      "Explore IMS-CDR Ahilyanagar, a leading Institute of Management Studies offering industry-focused programs. Apply for IMS admission and build your future.",
    images: ["/images/home/black_logo.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <Herovideo />
      <Ranking/>
      <AboutUs />
      <CoursesWeOffer />
      <ExcellentPlacements/>
      <MilestonesAndAchievements/>
      <OurTrustedRecruiters/>
      <OurTestimonials/>
      <CampusLife/>
    </main>
  );
}
