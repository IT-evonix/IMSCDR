import Footer from "@/components/Footer";
import AboutUs from "@/components/homepage/AboutUs";
import CampusLife from "@/components/homepage/CampusLife";
import CoursesStrip from "@/components/homepage/CoursesStrip";
import CoursesWeOffer from "@/components/homepage/CoursesWeOffer";
import ExcellentPlacements from "@/components/homepage/ExcellentPlacements";
import Herovideo from "@/components/homepage/Herovideo";
import MilestonesAndAchievements from "@/components/homepage/MilestonesAndAchievements";
import OurTestimonials from "@/components/homepage/OurTestimonials";
import OurTrustedRecruiters from "@/components/homepage/OurTrustedRecruiters";
import Ranking from "@/components/homepage/ranking";

export default function Home() {
  return (
    <div>
      <Herovideo />
      <Ranking/>
      <AboutUs />
      <CoursesWeOffer />
      <ExcellentPlacements/>
      <MilestonesAndAchievements/>
      <OurTrustedRecruiters/>
      <OurTestimonials/>
      <CampusLife/>
      <CoursesStrip/>
      <Footer/>
    </div>
  );
}
