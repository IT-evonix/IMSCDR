import Herovideo from "@/components/homepage/Herovideo";
import Ranking from "@/components/homepage/ranking";
import AboutUs from "@/components/homepage/AboutUs";
import CoursesWeOffer from "@/components/homepage/CoursesWeOffer";
import ExcellentPlacements from "@/components/homepage/ExcellentPlacements";
import MilestonesAndAchievements from "@/components/homepage/MilestonesAndAchievements";
import OurTrustedRecruiters from "@/components/homepage/OurTrustedRecruiters";
import OurTestimonials from "@/components/homepage/OurTestimonials";
import CampusLife from "@/components/homepage/CampusLife";

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
